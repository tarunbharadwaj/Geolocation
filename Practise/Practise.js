function isEven(userinput){
    var output
    if(userinput%2 == 0){
        output = `Number ${userinput} is even`
    }
    else{
        output = `Number ${userinput} is odd`
    }
    return output
}

var email = a@gmail.com
email.match("^([a-zA-z0-9]+)@([a-zA-z]+)\.([a-zA-z]{2,5})")