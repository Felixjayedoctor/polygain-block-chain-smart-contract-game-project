


// username//
function getUserDetails(){
    let UserName = prompt("enter your username")
    if (UserName == null){
        return
    }


    function validateUserName(UserName){
        if(UserName.length < 10 & UserName.length > 0){
            return true
        }else{
            return false
        }
    }
    
    while(validateUserName(UserName) == false)(
        UserName = prompt("Username must be less than 10 but greater than 0")
    )



    //phonenumber//
    let PhoneNumber = prompt("enter your phone number")
    function validatephonenumber(PhoneNumber){
        if(PhoneNumber.length == 11){
            return true
        }else{
            return false
        }
    }
    
while(validatephonenumber(PhoneNumber) == false)(
    PhoneNumber = prompt("phone number must be 11 digits, try again!")
)
if ((PhoneNumber) == null){
    return
}


    //email address//
    let Email = prompt("enter your email")
    function validateEmail(Email){
        if (Email.length > 7){
            return true
        }else{
            return false
        }
    }
    console.log(validateEmail(Email))
    
    let password = prompt("enter your password")
    function validatepassword(password){
        if(password.length > 7){
            return true
        }else{
            return false
        }
    }
    while(validateEmail(Email) == false)(
        Email = prompt("email address does not match!. Try again")
    )
    
    let ConfirmPassword = prompt("confirm your password")
    function validateConfirmPassword(ConfirmPassword){
        if(ConfirmPassword != password){
            return false
        }else{
            return true
        }
    }
    console.log(validateConfirmPassword(ConfirmPassword))
    
    let goway = prompt("enter now")
    function validategoway(goway){
        if(goway.length > 5){
            return true
        }else{
            return false
        }
    }
    console.log(validategoway(goway))
    
    let myman = prompt("come inside please")
    function validatemyman(myman){
        if(myman.length = 10){
            return true
        }else{
            return false
        }
    }
    console.log(validatemyman(myman))
    
    let Hit = prompt("Hit hard")
    function validatehit(Hit){
        if(Hit.length <2){
            return true
        }else{return false
        }
    }
    console.log(validatehit(Hit))
}

