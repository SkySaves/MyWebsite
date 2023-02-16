// Parses the url and returns an object with the parameters
function urlFormParser() {
    var url = window.location.href;
    var urlArray = url.split('?');
    var urlParams = urlArray[1].split('&');
    var urlParamsArray = [];
    for (var i = 0; i < urlParams.length; i++) {
        var urlParam = urlParams[i].split('=');
        urlParamsArray.push(urlParam);
    }
    return urlParamsArray;
}

// Cleans the url of the parameters and returns an Array<String>
function urlParamsCleaner(urlParam) {
    var replacers = {
        '%20': ' ',
        '%3A': ':',
        '%2C': ',',
        '%3F': '?',
        '%40': '@'
    };
    var cleanedUrlParam = [];
    for (var i = 0; i < urlParam.length; i++) {
        for (var key in replacers) {
            cleanedUrlParam[i] = urlParam[i][1].replace(key, replacers[key]);
        }
    }
    return cleanedUrlParam;
}

// What do you think it does?
function toUpperCase(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Appends the new elements to the DOM
document.addEventListener('DOMContentLoaded', function () {
    let params = urlParamsCleaner(urlFormParser());
    let ids = ['name', 'email', 'message'];
    let alternatingBgs = ['#003366', '#546E81'];
    let formResultDiv = document.getElementById('form-results');
    for (var i = 0; i < ids.length; i++) {
        let newP = document.createElement('p');
        newP.textContent += toUpperCase(ids[i]) + ": " + params[i]; // if only js had a to uppercase function lol
        newP.className = ids[i] + " form-result";
        newP.style.backgroundColor = alternatingBgs[i % 2];
        formResultDiv.appendChild(newP);
    }
    console.log("Done...");
});
