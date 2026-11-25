function isOddOrEven(){
    let num = 2;
    if(num % 2 === 0){
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}
isOddOrEven()

function isPositiveOrNegative(){
    let num = 0;
    if(num > 0){
        console.log("The number is positive.");
    } else if(num < 0){
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
isPositiveOrNegative()

function launchBrowser(){
    let browser = "Chrome";
    if(browser === "Chrome"){
        console.log("Launching Chrome browser.");
    } else if(browser === "Firefox"){
        console.log("Launching Firefox browser.");
    } else {
        console.log("Browser not supported.");
    }
}
    launchBrowser()
