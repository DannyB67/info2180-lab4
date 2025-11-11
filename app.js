
let url = "superheroes.php";
document.getElementById("result").textContent= "<h1>i got text </h1>";
function thisFunc(){
    console.log("we plan to run a php file here by clicking a button");
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function checkStatus() {
        if (this.status === 200) {
           document.getElementById("result").textContent=this.responseText;
        }
        else {
            window.alert("we got an Error: " + this.status);
        }
    };
    xhttp.send();
};

document.getElementById("myBtn").addEventListener("click", checkSearch);//donothing=>{console.log(1+1);});

/*
function searchheroes(){
    console.log("we plan to search a hero by clicking a button");
    var heroName=document.getElementById("searchTxt").value.trim();
    const newXhttp = new XMLHttpRequest();
    newXhttp.open("POST", url, true);
    newXhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    newXhttp.onload = function checkStatus() {
        if (this.status === 200) {
           document.getElementById("result").textContent=this.responseText;
        }
        else {
            window.alert("we got an Error: " + this.status);
        }
    };
    newXhttp.send("hero="+heroName);
}
    */
function searchheroes(){
    console.log("we plan to search a hero by clicking a button");
    var heroName=document.getElementById("searchTxt").value.trim();
    const newXhttp = new XMLHttpRequest();
    newXhttp.open("GET", url+"?hero="+heroName, true);
    newXhttp.onload = function checkStatus() {
        if (this.status === 200) {
           document.getElementById("result").textContent=this.responseText;
        }   
        else {
            window.alert("we got an Error: " + this.status);
        }
    };
    newXhttp.send();
}



function checkSearch(){
    if (document.getElementById("searchTxt").value === ""){
        thisFunc();
    }else{
       searchheroes();
    }
}