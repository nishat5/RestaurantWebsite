//Navbar Toggler Script

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function navToggler() {
  //BY USING TERNARY OPERATOR
  menuList.style.maxHeight == "0px"
    ? (menuList.style.maxHeight = "300px")
    : (menuList.style.maxHeight = "0px");

  //BY USING SIMPLE IF STATEMENT

  // if (menuList.style.maxHeight == "0px") {
  //   menuList.style.maxHeight = "300px";
  // } else {
  //   menuList.style.maxHeight = "0px";
  // }
}

//FOOD MENU SWITCHING SCRIPT

//GETTING TWO SAME CLASSES INTO A SINGLE VARIABLE
const lunchItems = document.getElementsByClassName("lunchItems");
const dinnerItems = document.getElementsByClassName("dinnerItems");
const breakfastItems = document.getElementsByClassName("breakfastItems");

//GETTING ID OF BREAKFAST,LUNCH AND DINNER DIVS

const breakfastBtnId = document.getElementById("breakfastBtnId");
const lunchBtnId = document.getElementById("lunchBtnId");
const dinnerBtnId = document.getElementById("dinnerBtnId");

function breakfastMenu() {
  // changing Food Menus by for loop method

  // for (let i = 0; i < lunchItems.length; i++) {
  //   lunchItems[i].style.display = "none";
  // }

  // for (let i = 0; i < dinnerItems.length; i++) {
  //   dinnerItems[i].style.display = "none";
  // }

  // for (let i = 0; i < breakfastItems.length; i++) {
  //   breakfastItems[i].style.display = "block";
  // }

  //CHANGING FOOD MENU BY (FOR OF) LOOP METHOD

  for (const elements of lunchItems) {
    elements.style.display = "none";
  }

  for (const elements of dinnerItems) {
    elements.style.display = "none";
  }

  for (const elements of breakfastItems) {
    elements.style.display = "block";
  }

  //Bottom Border Script

  breakfastBtnId.style.borderBottomColor = "#fea115";
  lunchBtnId.style.borderBottomColor = "#f1ecec";
  dinnerBtnId.style.borderBottomColor = "#f1ecec";
}

function lunchMenu() {
  for (const elements of lunchItems) {
    elements.style.display = "block";
  }

  for (const elements of dinnerItems) {
    elements.style.display = "none";
  }

  for (const elements of breakfastItems) {
    elements.style.display = "none";
  }

  //Bottom Border Script

  breakfastBtnId.style.borderBottomColor = "#f1ecec";
  dinnerBtnId.style.borderBottomColor = "#f1ecec";
  lunchBtnId.style.borderBottomColor = "#fea115";
}

function dinnerMenu() {
  for (const elements of lunchItems) {
    elements.style.display = "none";
  }

  for (const elements of dinnerItems) {
    elements.style.display = "block";
  }

  for (const elements of breakfastItems) {
    elements.style.display = "none";
  }

  //Bottom Border Script

  breakfastBtnId.style.borderBottomColor = "#f1ecec";
  dinnerBtnId.style.borderBottomColor = "#fea115";
  lunchBtnId.style.borderBottomColor = "#f1ecec";
}

//SHOW ALERT MESSAGE ON (HOME PAGE) IF ALL VALUES OF FORM ARE VALID
function reservationConfirmed() {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const date = document.getElementById("date").value.trim();
      const people = document.getElementById("people").value.trim();

      const emailIsValid = email && /\S+@\S+\.\S+/.test(email); // Simple email validation
      const allValid = name && emailIsValid && date && people;

      // ? alert("Your Form Has Been Sucessfully Submitted!")
      // : alert("Please fill out all fields correctly.");
      if (allValid) {
        let timerInterval;
        Swal.fire({
          title: "Your Form Has Been Submitted Sucessfully!",
          html: "I will close in <b></b> milliseconds.",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      }

      document.getElementById("myForm").reset();
    });
}

//SHOW ALERT MESSAGE ON (CONTACT PAGE) IF ALL VALUES OF FORM ARE VALID

function contactUsForm() {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();

      const emailIsValid = email && /\S+@\S+\.\S+/.test(email); // Simple email validation
      const allValid = name && emailIsValid && subject;

      if (allValid) {
        let timerInterval;
        Swal.fire({
          title: "Your Form Has Been Submitted Sucessfully!",
          html: "I will close in <b></b> milliseconds.",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              // let time = timer / 1000;
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      }

      document.getElementById("myForm").reset();
    });
}

//Scroll to Top Btn

let mysBtn = document.getElementById("scrollbuttonid");

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 360 ||
    document.documentElement.scrollTop > 360
  ) {
    mysBtn.style.display = "block";
  } else {
    mysBtn.style.display = "none";
  }
});
