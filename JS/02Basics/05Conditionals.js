// Allow user to access course if he is:
// logged in from Email
// logged in from Google
// logged in from Facebook

var email = false;
var facebook = true;
var google = false;

if (email || facebook || google) {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}