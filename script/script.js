// ==============================
// Selectoren
// ==============================

// Nav + menu knop
const nav = document.querySelector("header nav");
const menu_Button = document.querySelector("header nav button");


// FAQ sectie + alle details
const faq_section = document.querySelector("#stop_Pagina main section:nth-of-type(5)");
const faq_details = faq_section ? faq_section.querySelectorAll("details") : [];
// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll



// ==============================
// Eventlisteners
// ==============================

// Menu openen/sluiten bij klik
menu_Button.addEventListener("click", toggleMenu);


// Sluit menu wanneer focus nav verlaat (tab)
nav.addEventListener("focusout", geenFocusNav);
// https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event


// Sluit menu met Escape
document.addEventListener("keydown", escapeSluitNav);


// Voor dit stukje heb ik hulp gebruikt van een code AI om te helpen met hoe ik er voor
// kan zorgen dat het variabel met de FAQ sections daar in er niet voor zorgt dat het JS
// script crashed op de index.html pagina (omdat deze faq sections hier niet staan en anders
// het antwoord "null" is en crashed)
if (faq_section) {

    faq_section.addEventListener("focusin", autoToggleDetailFocus);
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event


    faq_section.addEventListener("focusout", autoToggleDetailFocusOut);
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event


    document.addEventListener("pointerdown", registreerClickBuitenElement);
    // https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
}



// ==============================
// Functies
// ==============================

// Toggle menu open/dicht
function toggleMenu() {
    nav.classList.toggle("toonMenu");
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
}

// Sluit menu wanneer focus nav verlaat
function geenFocusNav(event) {
    if (!nav.contains(event.relatedTarget)) {
        nav.classList.remove("toonMenu");
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
    // https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget
}

// Sluit menu met Escape toets
function escapeSluitNav(event) {
    if (event.key !== "Escape") return;

    if (nav.classList.contains("toonMenu")) {
        nav.classList.remove("toonMenu");
    }
}


// Opent FAQ automatisch bij focus op summary
function autoToggleDetailFocus(event) {
    const vraagElement = event.target.closest("summary");
    if (!vraagElement) return;

    const detail = vraagElement.closest("details");
    if (!detail) return;

    faq_details.forEach((otherDetail) => {
        if (otherDetail !== detail) {
            otherDetail.removeAttribute("open");
        }
    });

    detail.setAttribute("open", "");
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/setAttribute
}

// Sluit FAQ’s bij klik buiten de sectie
function registreerClickBuitenElement(event) {
    if (!faq_section.contains(event.target)) {
        sluitAlleFaqVragen();
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
}

// Sluit FAQ’s wanneer focus de sectie verlaat
function autoToggleDetailFocusOut(event) {
    if (!faq_section.contains(event.relatedTarget)) {
        sluitAlleFaqVragen();
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget
}

// Sluit alle FAQ’s
function sluitAlleFaqVragen() {
    faq_details.forEach((detail) => {
        detail.removeAttribute("open");
    });
}
