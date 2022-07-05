export function checkTel(telNumber) {
    if(/^[8]/.test(telNumber) === true) {
       telNumber = telNumber.replace(/^8/, "7")
       console.log(telNumber);
    }
    let newtel = telNumber.replace(/\D/g, "");
    return ("+" + newtel)   
}



