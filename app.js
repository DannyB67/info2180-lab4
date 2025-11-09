
let url = "superheroes.php";
//document.getElementById("result").innerHTML="i got tet";
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
document.getElementById("myBtn").addEventListener("click", thisFunc);