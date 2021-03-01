
function checkEmail() {
    var email = document.getElementById("email-download").value;
    console.log(email);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function isVietnamesePhoneNumber(number) {
    return /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }

function valid() {
    if (checkEmail() == true) {
        console.log("Email đúng" );
    }
    else if (checkEmail()== false){
        console.log("Sai Email");
    }
    else if (isVietnamesePhoneNumber() == true){
        console.log("Dung SDT")
    }
     else if(isVietnamesePhoneNumber() == false){
        console.log("sai SDT")
    }
    else(isVietnamesePhoneNumber() && checkEmail()){
        console.log("Oke")
    }

}
// join us 
function check(){
    
}



                    