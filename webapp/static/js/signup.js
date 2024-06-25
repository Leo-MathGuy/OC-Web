function clearPass() {
    $("#password1").get(0).setCustomValidity("");
    $("#password2").get(0).setCustomValidity("");
}

var passCheckers = [
    () => {
        return $("#password1").val() != $("#password2").val()
            ? "Passwords must match"
            : "";
    },
    () => {
        return /^\d+$/.test($("#password1").val())
            ? "Passwords cannot be all numbers"
            : "";
    },
    () => {
        return /^[A-z]+$/.test($("#password1").val())
            ? "Passwords cannot be all letters"
            : "";
    },
    () => {
        return $("#password1").val() == "password123"
            ? "You cannot be serious"
            : "";
    },
];

function checkElement(el, checkers) {
    for (let i = 0; i < checkers.length; i++) {
        var check = checkers[i];
        let result = check();

        if (result != "") {
            el.setCustomValidity(result);
            return false;
        }
    }

    return true;
}

let password1 = $("#password1");
let subscribe = $("#subscribe");
let email = $("#email");

function enableNews() {
    subscribe.prop("disabled", false);
    $('label[for="subscribe"]').css("color", "black");
}
function disableNews() {
    subscribe.prop("disabled", true);
    subscribe.prop("checked", false);
    $('label[for="subscribe"]').css("color", "#888");
}

disableNews();

email.on("input", () => {
    if (email.val()) {
        enableNews();
    } else {
        disableNews();
    }
});

$("form")
    .get(0)
    .addEventListener("submit", (e) => {
        if (!checkElement(password1.get(0), passCheckers)) {
            e.preventDefault();
            return false;
        }
        return true;
    });

$("#password1, #password2").on("input", () => {
    clearPass();
});
