let name = document.querySelector('.yourName');
let email = document.querySelector('.yourMail');
let noOfPasses = document.getElementById('passes');
let comments = document.querySelector('.comment');

let button = document.getElementById('purchase');
function submit(e){
    e.preventDefault();
    if (name.value ==""){
        alert('please you must input Your Name');
    } else if (email.value ==""){
        alert('please you must input Email Address');
    } else if (noOfPasses.value ==""){
        alert('please you must input your passes');
    } else if (comments.value ==""){
        alert('please you must write your comment');
    } else {
        alert('Your Purchase is succesfull');
        console.log(`Name is ${name.value}`);
        console.log(`Email is ${email.value}`);
        console.log(`Passes is ${noOfPasses.value}`);
        console.log(`Comment is ${comments.value}`);
        window.location.reload();
    } 
    
}
button.addEventListener('click',submit);
