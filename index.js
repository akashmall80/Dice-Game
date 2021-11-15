document.querySelector("h1").innerText="Hello,And Refresh Please!!";
var randumNumber=Math.floor(Math.random()*7);
document.querySelectorAll("img")[0].setAttribute("src","/images/dice"+randumNumber+".png");
var randomNumber2=Math.floor(Math.random()*7);
document.querySelectorAll("img")[1].setAttribute("src","/images/dice"+randomNumber2+".png");
if(randumNumber===randomNumber2)
{
    document.querySelector("h1").innerText="Winner";
}
else
{
    document.querySelector("h1").innerText="Do It Again";
}