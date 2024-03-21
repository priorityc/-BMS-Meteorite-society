"use strict";

// 1.Validate the report form
//Selecting elements
const fnameEl = document.querySelector("#fname");
const lnameEl = document.querySelector("#lname");
const locationEl = document.querySelector("#location");
const selectionEl = document.querySelector("#selection");

const errorEl = document.getElementById("name-error");
const lerrorEl = document.getElementById("lname-error");
const locationErrorEl = document.getElementById("location-name-error");
const selectionErrorEl = document.getElementById("selection-name-error");
const formEl = document.getElementById("report");
const error = fnameEl.nextElementSibling;
console.log(formEl);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  console.log(errorDisplay);
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  console.log(inputControl);
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const fname = fnameEl.value.trim();
  const lname = lnameEl.value.trim();
  const loc = locationEl.value.trim();

  if (fname === "") {
    //If it empty, we'll call the setError function and provide the username element to it, with our error message.
    setError(fnameEl, "Name is required");
  } else {
    // call the setSuccess method with the username element.
    setSuccess(fnameEl);
  }

  if (lname === "") {
    //If it empty, we'll call the setError function and provide the username element to it, with our error message.
    setError(lnameEl, "Last name is required");
  } else {
    // call the setSuccess method with the username element.
    setSuccess(lnameEl);
  }

  if (loc === "") {
    //If it empty, we'll call the setError function and provide the username element to it, with our error message.
    setError(locationEl, "Location is required");
  } else {
    // call the setSuccess method with the username element.
    setSuccess(locationEl);
  }

  if (selec == "") {
    showError(selectionEl, "Please select.");
  } else {
    showSuccess(selectionEl);
  }
};

const events = {
  number: [1, 2, 3, 4, 5],
  location: [],
  count: []
}

//function to count how many observers are from same area
functuion countObservers() {
  const getLocationName = locationEl.value;//the value of the 
}

//attach submit event to the form

// const isRequired = (value) => (value === "" ? false : true);
// const isBetween = (length, min, max) =>
//   length < min || length > max ? false : true;

// //The function that showError() function highlights the border of the input field and displays an error message if the input field is invalid:
// const showError = (input, message) => {
//   // get the perent element of the input field which is the div el
//   const formField = input.parentElement;
//   //Second, remove the success class and add the error class to the form-field element:
//   formField.classList.remove("success");
//   formField.classList.add("error");

//   // show the error message
//   const error = formField.querySelector("small");
//   error.textContent = message;
// };

// // Same function for Sucess
// const showSuccess = (input) => {
//   // get the form-field element
//   const formField = input.parentElement;

//   // remove the error class
//   formField.classList.remove("error");
//   formField.classList.add("success");

//   // hide the error message
//   const error = formField.querySelector("small");
//   error.textContent = "";
// };

// function checkInputs () {
//   const fNameEmpty=fnameEl.value.trim();
//   const lNameEmpty=lnameEl.value.trim();
//   const selNameEmpty=location.value.trim();

// }
// // Check the inputs
// const fname = () => {
//   let valid = false;
//   const min = 3,
//     max = 25;
//   const name = fnameEl.value.trim();

//   if (!isRequired(name)) {
//     showError(fnameEl, "Name cannot be blank.");
//   } else if (!isBetween(name.length, min, max)) {
//     showError(fnameEl, `Name must be between ${min} and ${max} characters.`);
//   } else {
//     showSuccess(fnameEl);
//     valid = true;
//   }
//   // return true if passes
//   return valid;
// };

// const lname = () => {
//   let valid = false;
//   const min = 3,
//     max = 25;
//   const name = lnameEl.value.trim();

//   if (!isRequired(name)) {
//     showError(lnameEl, "Name cannot be blank.");
//   } else if (!isBetween(name.length, min, max)) {
//     showError(lnameEl, `Name must be between ${min} and ${max} characters.`);
//   } else {
//     showSuccess(lnameEl);
//     valid = true;
//   }
//   // return true if passes
//   return valid;
// };

// // validate the selection type
// const select = () => {
//   if (select == "") {
//     showError(location, "Please select.");
//   } else {
//     showSuccess(location);
//     valid = true;
//   }
//   return valid;
// };

// // Modify the submit event handler
// formEl.addEventListener("submit", function (e) {
//   // prevent the form from submitting
//   e.preventDefault();
// });
// // validate forms
// let isNameValid = fname(),
//   islNameValid = lname(),
//   isSelectionValid = select();

// let isFormValid = isNameValid && islNameValid && isSelectionValid;

// // submit to the server if the form is valid
// // Finally, submit data to the server if the form is valid specified the isFormValid flag.
// if (isFormValid) {
//   sendEmail();
// }
