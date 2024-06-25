
let careerContainer = document.getElementById("career-container");
let careerLink = document.getElementById("creers-link");

let modal = document.getElementById("modal");
let xModal = document.getElementById("xModal");

let boxs = document.getElementsByClassName("boxs");
let textBox = document.getElementsByClassName("box-text");
let plus = document.getElementsByClassName("pluss");

let humburgerButton = document.getElementById("humburger");
let headerLinks = document.getElementById("header-ul-links-container");
let humburgerLine1 = document.getElementById("humburger-line1");
let humburgerLine2 = document.getElementById("humburger-line2");
let humburgerLine3 = document.getElementById("humburger-line3");

let logo = document.getElementById("logo");

let oneStepToHiTechModa = document.getElementById("one-step-to-hi-tech-modal");
let oneStepToHiTechModaButton = document.getElementById(
  "one-step-to-hi-tech-x-button"
);

oneStepToHiTechModaButton.addEventListener("click", () => {
  oneStepToHiTechModa.classList.add("none");
});

logo.addEventListener("click", () => {
  window.location.reload();
});

setTimeout(() => {
  modal.classList.remove("none");
}, 5000);

humburgerButton.addEventListener("click", () => {
  headerLinks.classList.toggle("show");
  careerLink.classList.toggle("active-button");
  humburgerLine1.classList.toggle("right");
  humburgerLine3.classList.toggle("up-left");
  humburgerLine2.classList.toggle("none");
});

careerLink.addEventListener("click", () => {
  if (careerLink.classList.contains("active-button")) {
      careerContainer.classList.toggle("none");
  }
});

for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener("click", () => {
      textBox[i].classList.toggle("show-box-text");
      plus[i].classList.toggle("turn-right");
  });
}

xModal.addEventListener("click", () => {
  modal.classList.add("none");
});

let questions = document.getElementsByClassName("question");
let answers = document.getElementsByClassName("answer");
let arrows = document.getElementsByClassName("question-arrow");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
      answers[i].classList.toggle("show-answer");
      arrows[i].classList.toggle("fa-circle-arrow-down");
      arrows[i].classList.toggle("fa-circle-arrow-up");

  });
}

let submitAll=document.getElementsByClassName('form')
for(let i=0;i<submitAll.length;i++){
  submitAll[i].addEventListener('submit',(event)=>{
    checkSubmit(event)
  })
}

let submitModal=document.getElementById('modal-form')
submitModal.addEventListener('submit',(event)=>{
  checkSubmit(event)
})

function checkSubmit(event){
   event.preventDefault()
  if (!isNameValid(event.target[0].value)) {
    event.target[0].placeholder = "*נא להזין שם תקין";
  }
  if (!isMailValid(event.target[2].value)) {
    event.target[2].value = "";    
    event.target[2].placeholder = "*נא להזין כתובת מייל";
  }
  if (!isPhoneValid(event.target[1].value)) {
    event.target[1].value = "";    
    event.target[1].placeholder = "*נא להזין מספר טלפון";
  }
  if(isPhoneValid(event.target[1].value)&&isMailValid(event.target[2].value)&&isNameValid(event.target[0].value)){
    oneStepToHiTechModa.classList.remove("none");
    event.target[2].value = "";
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].placeholder = "";
    event.target[0].placeholder = "";
    event.target[1].placeholder = "";
  }
}

function isNameValid(name) {
  if (name.length > 0) return true;
  else return false;
}

function isMailValid(mail) {
  if (mail === "") return false;
  else return true;
}

function isPhoneValid(phone) {
  if (phone.length === 10) {
    for (let i = 0; i < 10; i++) {
      if (!(phone[i] >= 0 && phone[i] < 10)) return false;
    }
    return true;
  } else return false;
}
