// TODO: Define a function that answer the roles of a user

// Admin - Full access 
// SubAdmin - Access create/Delete course
// testPrep - Access create/Delete test
// User - consume content

// Input: getUserRole(name, role);

// var getUserRole = function(name, role) {}
// var getUserRole = (name, role) => {}

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `ADMIN: ${name} gets Full Access`;

        case "subAdmin":
            return `SUB ADMIN: ${name} gets Deleting/Creating Course`;

        case "testPrep":
            return `TEST PREP: ${name} gets Deleting/Creating Test`;

        case "user":
            return `USER: ${name} can consume Content`;

        default:
            return `TRIAL USER: ${name} is Trial User`;
    }
}

var getRole = getUserRole("Mohib", "subAdmin");
console.log(getRole);

// console.log(getUserRole("Mohib", "subAdmin"));