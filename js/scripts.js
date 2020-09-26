//let's varidate inputs before

var day_error = document.getElementById("day_error");
var month_error = document.getElementById("month_error");
var year_error = document.getElementById("year_error");
var gender_error = document.getElementById("gender_error");

/*
day.addEventListener("textInput", day_Verify);
month.addEventListener("textInput", month_verify);
year.addEventListener("textInput", year_verify);
gender.addEventListener("textInput", gender_verify);
*/

function validate() {
    const form = document.getElementById("form");
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;
    //var genderMale = toString(document.getElementById("gender").checked.value);
    //var genderFemale = document.getElementById("genFemale").value;

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(gender);

    arrMale = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    arrFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    //console.log(genderFemale);

    //trynna display error
    /*

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
        //Akan name should include this
    } else {
        alert("You are Woman");
    }

*/
}