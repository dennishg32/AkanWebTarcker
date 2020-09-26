//let's varidate inputs before

var day_error = document.getElementById("day_error");
var month_error = document.getElementById("month_error");
var year_error = document.getElementById("year_error");
var gender_error = document.getElementById("gender_error");

function validate() {
    const form = document.getElementById("form");
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(gender);

    // Create list of days of a month [assume there is no leap year by default]
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day == 1 || month > 2) {
        if (day > monthDays[month - 1]) {
            console.log("Invalid date!");
            return false;
        }
    }
    if (month <= 0 || month > 12) {
        console.log("invalid month");
        /*
                    month.style.border = "1px solid red";
                    month_error.style.display = "block";
                    */
        return false;
    }
    if (day <= 0 || day > 31) {
        console.log("invalid day");
        /*
                       day.style.border = "1px solid #red";
                       day_error.style.display = "block";
                 */
        return false;
    }
    if (month == 2) {
        var lyear = false;
        if ((!(year % 4) && year % 100) || !(year % 400)) {
            lyear = true;
        }
        if (lyear == false && day >= 29) {
            console.log("Invalid date!");
            return false;
        }
        if (lyear == true && day > 29) {
            console.log("Invalid date!");
            return false;
        }
    }

    //declaration of array of names to use

    arrMale = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    arrFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    //calculations

    var cc = (year - 1) / 100 + 1;
    var birthday =
        (cc / 4 - 2 * cc - 1 + (5 * year) / 4 + (26 * (month + 1)) / 10 + day) % 7;

    document.getElementById("display").innerHTML = Math.round(birthday);

    if (gender === "male") {
        console.log(arrMale[Math.round(birthday)]);
        document.getElementById("name").innerHTML = arrMale[Math.round(birthday)];
    }
    if (gender === "female") {
        console.log(arrFemale[Math.round(birthday)]);
        document.getElementById("name").innerHTML = arrFemale[Math.round(birthday)];
    } else {
        console.log("verify your gender");
    }
}