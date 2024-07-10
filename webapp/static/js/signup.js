let username = $("#username");
let password1 = $("#password1");
let password2 = $("#password2");
let subscribe = $("#subscribe");
let email = $("#email");

function clearPass() {
    password1.get(0).setCustomValidity("");
    password2.get(0).setCustomValidity("");
}

var passCheckers = [
    () => {
        return password1.val() != password2.val() ? "Passwords must match" : "";
    },
    () => {
        return /^\d+$/.test(password1.val())
            ? "Passwords cannot be all numbers"
            : "";
    },
    () => {
        return /^[A-z]+$/.test(password1.val())
            ? "Passwords cannot be all letters"
            : "";
    },
    () => {
        return password1.val() == "password123" ? "You cannot be serious" : "";
    },
];

var usernameCheckers = [
    () => {
        var request = new XMLHttpRequest();
        request.open(
            "GET",
            "/api/client/checkuser?user=" + username.val(),
            false
        );
        try {
            request.send();
        } catch {
            return "Error fetching availability, please try again";
        }

        let result = request.responseText;

        if (result == "1") {
            return "Username taken";
        }

        return "";
    },
];

function checkElement(el, checkers) {
    for (let i = 0; i < checkers.length; i++) {
        var check = checkers[i];
        let result = check();

        if (result != "") {
            el.setCustomValidity(result);
            $("form").get(0).reportValidity();
            return false;
        }
    }

    return true;
}

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
        if (
            !(
                checkElement(password1.get(0), passCheckers) &&
                checkElement(username.get(0), usernameCheckers)
            )
        ) {
            e.preventDefault();
            return false;
        }
        return true;
    });

$("#password1, #password2").on("input", () => {
    clearPass();
});

username.on("input", () => {
    username.get(0).setCustomValidity("");
});
