//c.	When the user focus in full name text, show blue border for the input (use element.style.border=”solid 1px blue”), and remove the border when the input loses the focus. ++d.	After user finish writing his full name and leaves the text box (lost focus), if full name wasn't in correct format (not empty string and more than 3 letters), show text next to textbox saying “invalid name”, and focus the full name textbox, and select all text on it, else if full name was in correct format hide the text next to textbox.
let username = document.querySelector("#fullname");
username.style.backgroundColor ='white';
let sub = document.querySelector('.submit');


username.addEventListener("focus", () => {
  username.style.border = "solid 1px blue";
});

username.addEventListener("blur", () => {
  username.style.border = "none";});
  
  username.addEventListener("change", function () {
    let correct = /[a-zA-Z]{3,}/.test(username.value);
    if (!correct) {
      username.style.backgroundColor ='gray';
      document.querySelector('.NameError').classList.add('span');
      document.querySelector('.NameError').classList.remove('spanremove');
      sub.setAttribute('disabled', '');
    
    } else {
      username.style.backgroundColor ='white';
      document.querySelector('.NameError').classList.add('spanremove');
      document.querySelector('.NameError').classList.remove('span');
      sub.removeAttribute('disabled');
    }
  });
  
  //============================================================================
  
  //e.	For Password and repeat password fields, when the user leaves the repeat password field, we need to validate that they’re required, and they’re identical (The same), and if they’re not the same show text besides it saying “password and repeat password should be the same”; remove the validation message when the user enters it correctly.
  
  let password = document.querySelector("#password");
  let repeatedPassword = document.querySelector("#repeatpassword");
  repeatedPassword.addEventListener("change", function () {
    let correctPassword = repeatedPassword.value == password.value;
    if (!correctPassword) {
      repeatedPassword.style.backgroundColor ='gray';
      document.querySelector('.Passworderror').classList.add('span');
      document.querySelector('.Passworderror').classList.remove('spanremove');
      sub.setAttribute('disabled', '');
      
      
  } else {
    document.querySelector('#password').style.backgroundColor ='white';
    repeatedPassword.style.backgroundColor ='white';
    document.querySelector('.Passworderror').classList.add('spanremove');
    document.querySelector('.Passworderror').classList.remove('span');
    sub.removeAttribute('disabled');
    
    }
});
