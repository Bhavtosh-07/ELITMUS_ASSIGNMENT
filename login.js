let log_e_mail="abc@gmail.com"
let log_password="12345"


function validate(event) {
    event.preventDefault();
    const password = document.getElementById("password").value;
    const e_mail = document.getElementById("email").value;

    const rightPass = log_password === password;
    const rightEmail = log_e_mail === e_mail;
    
    if (rightPass && rightEmail) {
        alert("Login Successful");

        // window.location.assign("/ELITMUS_ASSIGNMENT/main.html");
        window.location.replace("/ELITMUS_ASSIGNMENT/index.html");
    } 
    else {
        alert(
            "Sorry, your username or password was incorrect.\
            Please double-check your login information and try again."
            );
        }
    }
// document.location.reload();
let submit_btn=document.getElementById("submit");

submit_btn.addEventListener('click',validate)