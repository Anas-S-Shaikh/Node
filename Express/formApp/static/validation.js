console.log('working');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const address = document.getElementById('address');
const contactNumber = document.getElementById('contactNumber');
console.log(username, email, password, address, contactNumber);

// validating username 
username.addEventListener('blur', () => {
    // console.log('blur');
    let regex = /(^[a-zA-Z])([a-z0-9]){3,7}$/ 
    //username must starts with a letter and can be of 4 to 8 character 
    if (regex.test(username.value)) {
        console.log('matched');
        console.log(regex, username.value);
        username.classList.remove('is-invalid');
    }
    else {
        console.log('failed');
        username.classList.add('is-invalid');
    }
})
email.addEventListener('blur', () => {
    // console.log('blur');
    let regex = /(^[_\.\-a-zA-Z0-9]+)@([_\.a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/
    //email can starts with _ - . a-z A-Z and should have @ and some char(email client) and . then some char(domain) 
    if (regex.test(email.value)) {
        console.log('matched');
        console.log(regex, email.value);
        email.classList.remove('is-invalid');
    }
    else {
        console.log('failed');
        console.log(regex, email.value);
        email.classList.add('is-invalid');
    }
})
contactNumber.addEventListener('blur', () => {
    // console.log('blur');
    let regex = /^([\+][0-9]{1,2})?[0-9]{10}$/
    // contact number must be 10 digit long and contry code is optional
    if (regex.test(contactNumber.value)) {
        console.log('matched');
        console.log(regex, contactNumber.value);
        contactNumber.classList.remove('is-invalid');
    }
    else {
        console.log('failed');
        console.log(regex, contactNumber.value);
        contactNumber.classList.add('is-invalid');
    }
})

password.addEventListener('blur', () => {
    // console.log('blur');
    let regex = /^(?=.*\d)(?=.*[@#$%&*^!])(?=.*[a-z])(?=.*[A-Z]).{4,8}$/ 
    //password must be 4 to 8 character long and should contain at least one uppercase, lowercase, digit and special character 
    if (regex.test(password.value)) {
        console.log('matched');
        console.log(regex, password.value);
        password.classList.remove('is-invalid');
    }
    else {
        console.log('failed');
        console.log(regex, contactNumber.value);
        password.classList.add('is-invalid');
    }
})

address.addEventListener('blur', () => {
    // console.log('blur');
    let regex = /^.{10,}$/ 
    //address must be 10 or more character long and can conatain any char
    if (regex.test(address.value)) {
        console.log('matched');
        console.log(regex, address.value);
        address.classList.remove('is-invalid');
    }
    else {
        console.log('failed');
        console.log(regex, address.value);
        address.classList.add('is-invalid');
    }
})