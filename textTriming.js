function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function removeSpaceAndEnter(string){
    return string.trim().replace(/\n+$/, '').replace(/[ \t]+$/gm, '') 
}

function textTrim(string){
   return (capitalizeFirstLetter(removeSpaceAndEnter(string)))
}

module.exports = {
    textTrim
}