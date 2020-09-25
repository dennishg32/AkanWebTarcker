//let's varidate inputs before

const form = document.getElementById("form");
var day = parseInt(document.forms["form"]["day"]);
var month = parseInt(document.forms["form"]["month"]);
var year = parseInt(document.forms["form"]["year"]);
var genderMale = document.forms["form"]["gender"];
var genderFemale = document.forms["form"]["gender"];

var day_error = document.getElementById("day_error");
var month_error = document.getElementById("month_error");
var year_error = document.getElementById("year_error");
var gender_error = document.getElementById("gender_error");

day.addEventListener("textInput", day_Verify);
month.addEventListener("textInput", month_verify);
year.addEventListener("textInput", year_verify);
gender.addEventListener("textInput", gender_verify);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validate();
});

function validate() {
    const dayValue = day.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();
    const genderMale = gender_male.value;
    const genderFemale = gender_female.value;

    if (dayValue <= 0 && dayValue > 31) {
        day.style.border = "1px solid red";
        day_error.style.display = "block";
        day.focus();
        return false;
    } else {}
    if (monthValue <= 0 && monthValue > 12) {
        month.style.border = "1px solid red";
        month_error.style.display = "block";
        month.focus();
        return false;
    } else {}

    if (yearValue <= 0000 && yearValue > 9999) {
        year.style.border = "1px solid red";
        year_error.style.display = "block";
        year.focus();
        return false;
    }

    if (genderMale.checked == true && genderFemale.checked == false) {
        alert("You are Man");
    } else {
        alert("You are Woman");
    }
    /*
    if (gender.value.length <= 2) {
        gender.style.border = "1px solid red";
        gender_error.style.display = "block";
        gender.focus();
        return false;
    }
*/
}