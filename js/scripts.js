//let's varidate inputs before
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

    // Create list of days of a month
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day == 1 || month > 2) {
        if (day > monthDays[month - 1]) {
            console.log("Invalid date!");
            alert("Invalid date");
            return false;
        }
    }
    if (month <= 0 || month > 12) {
        console.log("invalid month");
        alert("Please Enter month");
        return false;
    }

    if (day <= 0 || day > 31) {
        console.log("invalid day");
        alert("Please enter a day");
        return false;
    }
    if (month == 2) {
        var lyear = false;
        if ((!(year % 4) && year % 100) || !(year % 400)) {
            lyear = true;
        }
        if (lyear == false && day >= 29) {
            console.log("Invalid date!");
            alert("Invalid");
            return false;
        }
        if (lyear == true && day > 29) {
            console.log("Invalid date!");
            alert("Invalid date");
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
    document.getElementById("res").innerHTML = birthday.toFixed();

    if (gender === "") {
        console.log("Cant be empty");
        alert("Cant be empty");
    } else {
        if (gender === "male") {
            console.log(arrMale[birthday.toFixed()]);
            document.getElementById("name").innerHTML = arrMale[birthday.toFixed()];
        }
        if (gender === "female") {
            console.log(arrFemale[birthday.toFixed()]);
            document.getElementById("name").innerHTML = arrFemale[birthday.toFixed()];
        }
    }
}