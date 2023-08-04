// 1. vérifier le numéro de téléphone
function phoneNumbersValid() {
    let mobileInput = document.getElementById("phone-mobile-input");
    let phoneInput = document.getElementById("phone-input");
    let mobileChecked = document.getElementById("phone-mobile").checked;
    let phoneChecked = document.getElementById("phone").checked;

    if (!mobileChecked && !phoneChecked) {
        alert("Please provide at least one phone number (mobile or fixed).");
        return false;
    }

    if (mobileChecked && !mobileInput.value.match(/^[0-9]{10}$/)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    if (phoneChecked && !phoneInput.value.match(/^[0-9]{10}$/)) {
        alert("Please enter a valid 10-digit fixed phone number.");
        return false;
    }

    return true;
}
// 2. le code postal doit être sur 5 chiffres (on suppose qu’on n’a que des utilisateurs français)

function postalLength() {
    let postalInput = document.querySelector(".postal");
    let warningEl = document.querySelector(".warning_postal");

    if (isNaN(postalInput.value) || postalInput.value.length !== 5) {
        warningEl.classList.add("warning_color");
        warningEl.textContent =
            "Il faut saisir le code postale en 5 chiffres valables!";
        warningEl.style.display = "block";

        return false;
    } else {
        warningEl.classList.remove("warning_color");
        warningEl.textContent = "";
        warningEl.style.display = "none";
        return true;
    }
}

// 3. la date de naissance doit être une date valide, et bien évidemment, elle doit être dans le passé (l’utilisateur doit avoir au moins 13 ans pour s’inscrire)
function validDateOfBirth() {
    let birthdayInput = document.getElementById("birthday");
    let warningEl = document.querySelector(".warning_birthday");

    let ageInput = new Date(birthdayInput.value);
    let minAge = 13;
    let now = new Date();

    if ((now - ageInput) / (365 * 24 * 60 * 60 * 1000) < minAge) {
        warningEl.textContent = "Il faut avoir 13 ans pour vous inscrire.";
        warningEl.style.display = "block";
        return false;
    }

    warningEl.textContent = "";
    warningEl.style.display = "none";
    return true;
}
// 4.valider les numéros de siren/siret
function validSIREN() {
    let sirenInput = document.getElementById("siren_input");
    if (!sirenInput.value.match(/^[0-9]{9}$/)) {
        alert("Il faut entrer 9 chiffres.");
        return false;
    }
    return true;
}

function validSIRET() {
    let siretInput = document.getElementById("siret_input");
    if (!siretInput.value.match(/^[0-9]{14}$/)) {
        alert("Il faut entrer 14 chiffres.");
        return false;
    }
    return true;
}

function validVATNumber() {
    let tvaInput = document.getElementById("tva");
    if (!tvaInput.value.match(/^FR[0-9]{2}[0-9]{9}$/)) {
        alert("Il faut entrer numéro de TVA valide.");
        return false;
    }
    return true;
}

// 5. si l’utilisateur n’a pas coché la case pour accepter les CGV, il faut y remettre le focus et l’afficher en rouge

function conditionFocus() {
    let acceptEls = document.querySelectorAll(".accept");
    acceptEls.forEach((acceptEl) => {
        if (!acceptEl.checked) {
            acceptEl.classList.add("warning_focus");
            acceptEl.focus();
            return false;
        } else {
            acceptEl.classList.remove("warning_focus");
        }
    });

    return true;
}

function submitEvent() {
    let formEl = document.querySelector("#individu");
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        if (
            postalLength() &&
            validDateOfBirth() &&
            phoneNumbersValid() &&
            conditionFocus()
        ) {
            return true;
        }
    });
}

function main() {
    console.log("start");

    console.log("end");
}
main();
