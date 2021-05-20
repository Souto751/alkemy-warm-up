// Import XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Allowed image formats on a regex variable
let formats = /\.(jpeg|jpg|gif|png|svg|bmp|webp)/;

// Validates that the image exists
const validateExistence = url => {

    // Executes a request to the image url, if the information is ok, it will return true, otherwise it will return false.

    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();

    return http.status == 200;
}

// Validates the Image format
const validateFormat = url => {
    if(url.match(formats)){
        return true;
    }else{
        return false;
    }
}

// Export module
module.exports.validate = {
    "existance": validateExistence,
    "format": validateFormat
};