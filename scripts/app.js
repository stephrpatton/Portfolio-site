const nav = document.querySelector(".mobile__nav");
const navOpen = document.querySelector(".mobile__nav--icon");
const navClose = document.querySelector(".mobile__nav--icon-x");
const contact = document.getElementById("contactForm");
const alertMessage = document.querySelector(".alert");

// Mobile View Slide out menu

navOpen.addEventListener("click", () => {
  nav.classList.add("menu-open");
});

navClose.addEventListener("click", () => {
  nav.classList.remove("menu-open");
});

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtUnNC1URm91FDMI-1RuhVGol2incUglY",
  authDomain: "portfolio-page-fa7cf.firebaseapp.com",
  databaseURL: "https://portfolio-page-fa7cf.firebaseio.com",
  projectId: "portfolio-page-fa7cf",
  storageBucket: "",
  messagingSenderId: "1095691325994",
  appId: "1:1095691325994:web:00049bcf8a2c1264b8e953"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Contact form

// Reference message collection
let messageRef = firebase.database().ref("messages");

// Save messages to firebase
const saveMessage = (name, phone, email, message) => {
  let newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    email: email,
    message: message
  });
};

// submit form
const submitForm = e => {
  e.preventDefault();

  // get values of inputs
  let name = getInputValue("name");
  let phone = getInputValue("phone");
  let email = getInputValue("email");
  let message = getInputValue("message");
  // save message
  saveMessage(name, phone, email, message);

  // show alert
  alertMessage.style.display = "block";

  // Hide alert
  setTimeout(() => {
    alertMessage.style.display = "none";
  }, 3000);

  // clear form
  contact.reset();
};

// get inputs
const getInputValue = id => {
  return document.getElementById(id).value;
};

// event listener to submit form
contact.addEventListener("submit", submitForm);
