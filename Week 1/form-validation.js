function validation(){
    var name = document.getElementById("name");
    var security = document.getElementById("security");
    var mail = document.getElementById("email");
    var phone = document.getElementById("phone");
    
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    

    if(name.value.length < 3){
        alert("The box marded red cannot be empty or less than 3");
        name.focus();
        name.style.border = "2px solid red";
        return false;
    }else if(phone.value.length < 11){
        alert("The box marded red cannot be empty or less than 3");
        phone.focus();
        phone.style.border = "2px solid red";
        return false;
    }else if(security.value.length < 3){
        alert("The box marded red cannot be empty or less than 3");
        security.focus();
        security.style.border = "2px solid red";
        return false;
        
    }else if(mail.value.length < 11){
        alert("The box marded red cannot be empty or less than 3");
        mail.focus();
        mail.style.border = "2px solid red";
        return false;

    }
   

}