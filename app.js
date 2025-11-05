
let url = "superheroes.php";
function thisFunc(){
    console.log("we plan to run a php file here by clicking a button");
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function checkStatus() {
        if (this.status === 200) {
           window.alert(this.responseText);
        }
        else {
            window.alert("we got an Error: " + this.status);
        }
    };
    xhttp.send();
};
document.getElementById("myBtn").addEventListener("click", thisFunc);