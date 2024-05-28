titleTl = gsap.timeline();

titleTl.from(
    "h1",
    { opacity: 0, y: 30, duration: 0.8, ease: "power1.inOut", scale: 0.9 },
    "<"
);

titleTl.to("#cta-1", { duration: 1, x: -40, ease: "power2.inOut" }, "<");
titleTl.to(
    "#cta-2",
    {
        duration: 1,
        scale: 1.05,
        ease: "power2.inOut",
    },
    "<"
);
titleTl.to("#cta-3", { duration: 1, x: 40, ease: "power2.inOut" }, "<");
