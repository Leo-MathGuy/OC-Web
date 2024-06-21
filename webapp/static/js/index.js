titleTl = gsap.timeline();

titleTl.from("h1", {
    opacity: 0,
    x: -25,
    duration: 1,
    ease: "power1.inOut",
    scale: 0.95,
});

titleTl.from(
    ".hero p",
    {
        duration: 1,
        opacity: 0,
        x: -15,
        ease: "power1.inOut",
    },
    "=-0.5"
);

const fadein_amount = 20;

var the_p = $(".hero p").get(0);

last_letters = [];

for (
    let i = the_p.innerText.length - fadein_amount;
    i < the_p.innerText.length;
    i++
) {
    var s = document.createElement("span");
    s.innerText = the_p.innerText[i];

    last_letters.push(s);
}

the_p.innerText = the_p.innerText.substring(
    0,
    the_p.innerText.length - fadein_amount
);

for (let i = 0; i < last_letters.length; i++) {
    const e = last_letters[i];
    the_p.appendChild(e);
    titleTl.from(e, { opacity: 0, duration: 0.5 }, "<+0.02");
}

titleTl.from(
    $(".cta-button a").get(0),
    {
        duration: 1,
        opacity: 0,
        x: -10,
        ease: "power2.inOut",
    },
    "<-0.25"
);

titleTl.from(
    $(".cta-button a").get(1),
    {
        duration: 1,
        opacity: 0,
        x: -10,
        ease: "power2.inOut",
    },
    "<+0.2"
);
