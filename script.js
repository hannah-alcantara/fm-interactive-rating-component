const ratingButton = document.querySelectorAll('.number');
const submitButton = document.getElementById('submit');
const ratingResult = document.getElementById('ratingResult');
const componentInitial = document.getElementById('componentInitial');
const componentFinal = document.getElementById('componentFinal');
let ratingSelected = false;

ratingButton.forEach((button) => {
    button.addEventListener("click", () => {
        const rating = button.textContent;
        ratingResult.textContent = "You selected " + rating + " out of 5";
        ratingSelected = true;
        submitButton.disabled = false;
    })
});

submitButton.addEventListener("click", () => {
    if (ratingSelected) {
        componentInitial.style.display = "none";
        componentFinal.style.display = "block";
    } else {
        alert("Please provide us a rating!")
    }
    }
)
