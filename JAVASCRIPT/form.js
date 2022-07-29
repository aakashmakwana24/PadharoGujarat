let form = document.getElementById('form');
let fnameNode = document.getElementById('username');
let emailNode = document.getElementById('mail');
let mobileNode = document.getElementById('number');

let errorNode1=document.getElementById("error1");
let errorNode2=document.getElementById("error2");
let errorNode3=document.getElementById("error3");



let array=[errorNode1,errorNode2,errorNode3];
for(let node of array){
  node.style.color="red";
}




function validateForm(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();

    return (v1 && v2 && v3 ); 
}

function validate1(){
    let fname=fnameNode.value;
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.innerHTML="";
    if(fname===''){
        errorNode1.innerHTML="<small>Name is required</small>";
        fnameNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(fname)==false){
        errorNode1.innerHTML="<small>First name must have only letters</small>";
        fnameNode.style.border="2px solid red";
        return false;
    }
    else{
        fnameNode.style.border="2px solid green";
        return true;
    }
}


function validate2(){
    let mobile=mobileNode.value;
    errorNode3.innerHTML="";
    let regex=new RegExp("^[0-9]{10}$");
    console.log(mobile);
    console.log(regex.test("mobile"));
    if(mobile===''){
        errorNode3.innerHTML="<small>Mobile number is required</small>";
        mobileNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(mobile)===false){
        errorNode3.innerHTML="<small>Mobile number must be 10 digits number</small>";
        mobileNode.style.border="2px solid red";
        return false;
    }
    else{
        mobileNode.style.border="2px solid green";
        return  true;
    }

}

function validate3(){
    let email=emailNode.value;
    errorNode2.innerHTML="";
    if(email===''){
        errorNode2.innerHTML="<small>Email is required</small>";
        emailNode.style.border="2px solid red";
        console.log("function called")
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode2.innerHTML="<small>Please enter valid email</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else{
        emailNode.style.border="2px solid green";
        return true;
        console.log(email);
    }
}