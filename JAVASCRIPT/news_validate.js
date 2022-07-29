let emailNode = document.getElementById('input_news');
let errorNode=document.getElementById("error");

errorNode.style.color="red";

function validate(){
    let email=emailNode.value;
    errorNode.innerHTML="";
    if(email===''){
        window.confirm("Email is required")
        emailNode.style.border="2px solid red";
        console.log("function called")
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        window.confirm("Please enter valid email")
        emailNode.style.border="2px solid red";
        return false;
    }
    else{
        emailNode.style.border="2px solid green";
        window.confirm("Email is Registered Successfully for Newsletter..")
        return true;
    }
}

