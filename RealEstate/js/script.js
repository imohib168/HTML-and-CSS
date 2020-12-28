function SignUp() {
    var userName = document.getElementById("username").value;
    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (userName == "") {
        alert("Kindly Enter your Name...")
    }
    if (fullName == "") {
        alert("Kindly Enter your Full Name...")
    }
    if (email == "") {
        alert("Kindly Enter your Email...")
    }
    if (password == confirmPassword) {
        if (password == "") {
            alert("Please Enter your password");
        } else {
            alert("Signed Up Successfully")
            location.href = "index.html"
        }
    } else {
        alert("Password does not match.!");
    }
}


function querySubmitted() {
    var queryName = document.getElementById("queryName").value;
    var queryEmail = document.getElementById("queryEmail").value;
    var queryMessage = document.getElementById("queryMessage").value;

    if (queryName == "") {
        alert("Kindly Enter your Full Name...");
    } else if (queryEmail == "") {
        alert("Kindly Enter your Email...");
    } else if (queryMessage == "") {
        alert("Kindly Enter your Query...")
    } else {
        alert("Query Recieved...")
    }

    document.getElementById("queryName").value = ""
    document.getElementById("queryEmail").value = ""
    document.getElementById("queryMessage").value = ""

}