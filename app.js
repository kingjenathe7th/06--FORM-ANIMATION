function animaatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-right");
    const progressBar = document.querySelector(".progress");
    const totalForms = document.querySelectorAll(".user").length;
    let currentFormIndex = 0;

    function updateProgressBar(currentIndex, totalForms) {
        const progressBarPercentage = (currentIndex / totalForms) * 100;
        progressBar.style.width = `${progressBarPercentage}%`;
    };

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;



            if (input.type === 'text' && validationUser(input)) {
                slideNextForm(parent, nextForm);
                updateProgressBar(++currentFormIndex, totalForms);
                console.log(currentFormIndex);

            } else if (input.type === 'email' && validationEmail(input)) {
                slideNextForm(parent, nextForm);
                updateProgressBar(++currentFormIndex, totalForms);
                console.log(currentFormIndex);
            }
            else if (input.type === 'password' && validationPassword(input)) {
                slideNextForm(parent, nextForm);
                updateProgressBar(++currentFormIndex, totalForms);
                console.log(currentFormIndex);
            } else {
                parent.style.animation = "shake 0.5s ease";
            }

            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            })
        })
    })
};




function slideNextForm(parent, nextForm) {
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

function validationUser(user) {
    if (user.value.length < 6) {
        console.log("not enough characters");
        error("rgb(189, 87, 87)");
    } else {
        error("rgb(87, 189, 130)");
        return true;
    }
};

function validationEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error("rgb(87, 189, 130)");
        return true;
    } else {
        error("rgb(189, 87, 87)");
    }
};

function validationPassword(password) {
    if (password.value.length < 6) {
        console.log("not enough symbols");
        error("rgb(189, 87, 87)");
    } else {
        error("rgb(87, 189, 130)");
        return true;
    }
}




function error(color) {
    document.body.style.backgroundColor = color;
};


animaatedForm();