let elBody = document.querySelector("body");
let elForm = document.querySelector(".form");
let elInputText = document.querySelector(".input-text");
let elInputLabel = document.querySelector(".input-label");
let elInputColor = document.querySelector(".input-color");


elForm.style.maxWidth = "300px";
elForm.style.width = "100%";
elForm.style.margin = "20px auto";
elForm.style.display = "flex";
elForm.style.flexDirection = "column";
elForm.style.alignItems = "center";
elForm.style.gap = "25px";
elForm.style.backgroundColor = "white";
elForm.style.fontSize = "30px";
elForm.style.boxShadow = "0 0 40px 0 cyan";
elForm.style.padding = "30px 10px";
elForm.style.borderRadius = "10px";

elInputText.style.fontSize = "80%";
elInputText.style.textAlign = "center";

elInputLabel.style.fontFamily = "Monotype Corsiva";


elForm.addEventListener("input", function(event){
  event.preventDefault();
  elBody.style.backgroundColor = elInputColor.value;
  let valueInput = elInputText.value.trim();
  if(!isNaN(valueInput)){
    if(valueInput > 0){
      if(valueInput % 3 == 0 && valueInput % 5 == 0){
        elInputLabel.textContent = "FizzBuzz";
      }
      else if(valueInput % 3 == 0){
        elInputLabel.textContent = "Fizz";
      }
      else if(valueInput % 5 == 0){
        elInputLabel.textContent = "Buzz";
      }
      else{
        elInputLabel.textContent = valueInput;
      }
    }else{
      elInputLabel.textContent = "Iltimos, musbat raqam kiriting"
      elInputLabel.style.textAlign = "center";

    }
  }else{
    elInputLabel.textContent = "Iltimos, raqamli qiymat kiriting!!!"
    elInputLabel.style.textAlign = "center";
  }

  if(valueInput.length == 0){
    elInputLabel.textContent = "Natija"
  }

})