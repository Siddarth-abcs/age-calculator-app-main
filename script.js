let btn = document.querySelector(".linebtn");

btn.onclick = () => {
  let dd = document.getElementById("DD").value;
  let mm = document.getElementById("MM").value;
  let yyyy = document.getElementById("YYYY").value;


  let dayvaild = document.getElementById("dayvaild");
  let yearvaild = document.getElementById("yearvaild");
  let monthvaild = document.getElementById("monthvaild");

  if (dd === "" || mm === "" || yyyy === "") {
    dayvaild.innerHTML = "This field is required";
    monthvaild.innerHTML = "This field is required";
    yearvaild.innerHTML = "This field is required";
    
  }else{
    dayvaild.innerHTML = "";
    monthvaild.innerHTML = "";
    yearvaild.innerHTML = "";
    
  }

  let day = parseInt(dd, 10);
  let month = parseInt(mm, 10);
  let year = parseInt(yyyy, 10);

  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || year < 1) {
    // alert("Date, month, or year is not correct.");
    return;
  }

  // Define the maximum number of days for each month
  const maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Check the validity of the year input
if (year > new Date().getFullYear()) {
  yearvaild.innerHTML = "Must be a valid year";
}else{
  yearvaild.innerHTML = "";
}

// Check the validity of the month input
if (month < 1 || month > 12) {
  monthvaild.innerHTML = "Must be a valid month";
}else{
  monthvaild.innerHTML = "";
}

// Check if the day input is within the valid range for the given month
if (day < 1 || day > maxDaysInMonth[month - 1]) {
  dayvaild.innerHTML = "Must be a valid day";
}else{
  dayvaild.innerHTML = "";
}



  let showday = document.getElementById("showday");
  let showmonth = document.getElementById("showmonth");
  let showyear = document.getElementById("showyear");

  // Calculate age
  let currentDate = new Date();
  let birthDate = new Date(year, month - 1, day);

  let ageInMilliseconds = currentDate - birthDate;
  let ageDate = new Date(ageInMilliseconds);

  let years = ageDate.getUTCFullYear() - 1970;
  let months = ageDate.getUTCMonth();
  let days = ageDate.getUTCDate() - 1;

  showyear.innerHTML = years;
  showmonth.innerHTML = months;
  showday.innerHTML = days;
  // alert(`Your age is ${years} years, ${months} months, and ${days} days.`);
};
