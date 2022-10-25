console.log("hello there!")
const firstName = document.getElementById("first-name");
const secondName = document.getElementById ("second-name");
const submitButton = document.getElementById ("submit")
submitButton.onclick = function(){
    console.log("click");
    if(firstName.value == "" || secondName.value == ""){
        console.log("Fill it in ")
    }else{
        console.log("WOW!!!! WEll done")
    }
}