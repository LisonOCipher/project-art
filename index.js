document.getElementById("loginForm")
document.addEventListener("submit"), function(event) {
    event.preventDefault();
 
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("/login" ,{
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {
            "Content-Type": "application/json"
        }
    })
 .then(respond => {
     if(response.status === 200){
        console.log = "successful login"
     }
    else{
        console.log = "login error"
        function showError(errorMessage){ 
            const errorContainer = 
            document.getElementById("erroContainer")
            errorContainer.innerHTML = errorMessage;
        }
    }
  
}
)}

if (loginIsSuccessful) {
    window.location.href = "/landing-page.html";
    document.getElementById("landing-page").style.display="block";
}
function redirectToPage1(){
    window.location.href = "/page1.html";
}
function redirectToPage2(){
    window.location.href = "/page2.html";
}
