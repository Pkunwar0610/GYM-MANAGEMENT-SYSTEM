let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.oneclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  window.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector(".header").classList.add("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
  };
};

/*for home section*/
var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

/*for feature section*/
var swiper = new Swiper(".feature-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

/*for trainer section*/

var swiper = new Swiper(".trainer-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

/*blog-----------*/
var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyDK662KIE-n4qHix9zbs203Z86xhR4T3Ho",
  authDomain: "gym-management-system-3a35c.firebaseapp.com",
  databaseUrl:
    "https://gym-management-system-3a35c-default-rtdb.firebaseio.com",
  projectId: "gym-management-system-3a35c",
  storageBucket: "gym-management-system-3a35c.appspot.com",
  messagingSenderId: "759054045341",
  appId: "1:759054045341:web:1bd1bce37a48513a5c0474",
  measurementId: "G-5DE4FB5N8J",
};

// Initialize Firebase
firebase.intializeApp(firebaseConfig);

var messageRef = firebase.database().ref("messages");

document.getElementById("jotform-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var First_Name = getInputVal("First Name");
  var Last_Name = getInputVal("Last Name");
  var Current_Weight = getInputVal("name");
  var Height = getInputVal("Height");
  var BMI = getInputVal("BMI");
  var Age = getInputVal("Age");
  var Goal_Weight = getInputVal("Goal Weight");
  var Address = getInputVal("Address");
  var StreetAddress = getInputVal("Street Address");
  var StreetAddressLine2 = getInputVal("Street Address line 2");
  var City = getInputVal("City");
  var State = getInputVal("State");
  var Country = getInputVal("Country");
  var Phone_Number = getInputVal("Phone_Number");
  var Cell_Number = getInputVal("Cell_Number");
  var Email = getInputVal("Email");
  var EmergencyContactPerson = getInputVal("Emergency contact person");
  var Relationship = getInputVal("Relationship");

  saveMessage(
    First_Name,
    Last_Name,
    Current_Weight,
    Height,
    BMI,
    Age,
    Goal_Weight,
    Address,
    StreetAddress,
    StreetAddressLine2,
    City,
    State,
    Country,
    Phone_Number,
    Cell_Number,
    Email,
    EmergencyContactPerson,
    Relationship
  );

  document.querySelector(".alert").style.display = "block";

  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("jotform-form").reset();
}

function saveMessage(
  First_Name,
  Last_Name,
  Current_Weight,
  Height,
  BMI,
  Age,
  Goal_Weight,
  Address,
  StreetAddress,
  StreetAddressLine2,
  City,
  State,
  Country,
  Phone_Number,
  Cell_Number,
  Email,
  EmergencyContactPerson,
  Relationship
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    First_Name: First_Name,
    Last_Name: Last_Name,
    Current_Weight: Current_Weight,
    Height: Height,
    BMI: BMI,
    Age: Age,
    Goal_Weight: Goal_Weight,
    Address: Address,
    StreetAddress: StreetAddress,
    StreetAddressLine2: StreetAddressLine2,
    City: City,
    State: State,
    Country: Country,
    Phone_Number: Phone_Number,
    Cell_Number: Cell_Number,
    Email: Email,
    EmergencyContactPerson: EmergencyContactPerson,
    Relationship: Relationship,
  });
}
