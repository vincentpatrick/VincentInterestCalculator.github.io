function compute()
{
    var principal = document.getElementById("principal").value;
    //check the validation of principal
    if (principal <= 0 || principal == "")
    {
        alert("the number you are writing is incorrect, please only enter positive numbers");
        document.getElementById("principal").focus();
        return;
    }
    //get elements value from index.html
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;

    //parse the date information to get the year info
    var year = new Date().getFullYear()+parseInt(years);
    
    //display the result
   var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + year + "</span>";
}
        


function updateRate() 
{
    //get elements value
    var rate_val = document.getElementById("rate").value;
    var output= document.getElementById("rate_val").innerText=rate_val;
    
    //the interest rate value change is shown in the html
    output.innerHTML = rate_val.value + "%";
}