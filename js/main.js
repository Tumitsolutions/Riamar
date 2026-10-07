// ─────────────────────────────
// TELÉFONO
// ─────────────────────────────

document.querySelectorAll("[data-phone]").forEach(element => {
    element.textContent = CONFIG.phone;
});


// ─────────────────────────────
// ENLACES TELEFÓNICOS
// ─────────────────────────────

document.querySelectorAll("[data-phone-link]").forEach(link => {
    link.href = `tel:${CONFIG.phoneTel}`;
});


// ─────────────────────────────
// WHATSAPP
// ─────────────────────────────

document.querySelectorAll(".btn-whatsapp").forEach(button => {
    const message = "Hola quiero más información";

    button.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
});


const currentLanguage = document.documentElement.lang.startsWith("es")
    ? "es"
    : "en";

document.querySelectorAll("[data-phone-container]").forEach(element => {
    if (CONFIG.showPhoneLabel) {
        element.textContent =
            `${CONFIG.phoneLabel[currentLanguage]} ${CONFIG.phone}`;
    } else {
        element.textContent = CONFIG.phone;
    }
});

document.querySelectorAll(".btn-whatsapp").forEach(button => {
    const message = CONFIG.whatsappMessage[currentLanguage];

    button.href =
        `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
});