// Get elements from the HTML
const contactForm = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const textarea= document.getElementById("message ")
const submitBtn= document.getElementById("submitBtn")
const email= document.getElementById("email")

//form validation
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
});



// fullName validation

fullName.addEventListener("input", (event) => {
    name1 = event.target.value;
    if (name1.length >= 3 && name1.length <= 15) {
        fullName.style.border = "5px solid green";
    }
    else{
        fullName.style.border = "5px solid red";
    }
})

// phone validition

phone.addEventListener("input", (event) => {
 let phoneN = event.target.value;

if (phoneN >= 610000000 && phoneN <= 619999999) {
    phone.style.border = "5px solid green";
  } else {
    phone.style.border = "5px solid red";
  }
});

//EMAIL VALIDATION
  email.addEventListener("input", () => {
    localStorage.setItem("email", email.value);
    
  });
  //MESSAGE VALIDATION
   message.addEventListener("input", () => {
    localStorage.setItem("message", message.value);
    
  });


// // submit  validation



//   // hubin (validation fudud)
submitBtn.addEventListener("click", ()=>{
  if(
    fullName.value && email.value && phone.value && message.value && food.value
 ){
    alert("waaad ku guulaysatay coursikan")
  }else{
    alert("fadlan ku noqo foomkana buuxi dhamaan melaha banan")
  }
})