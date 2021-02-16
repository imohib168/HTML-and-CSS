// Create application with following rules:
// Admin - Full access 
// SubAdmin - Access create/Delete course
// testPrep - Access create/Delete test
// User - consume content

var user = "admin";

switch (user) {
    case "admin":
        console.log("Full Access");
        break;

    case "subAdmin":
        console.log("Access create/Delete course");
        break;

    case "testPrep":
        console.log("Access create/Delete test");
        break;

    case "user":
        console.log("consume content");
        break;

    default:
        console.log("Trial User");
        break;
}