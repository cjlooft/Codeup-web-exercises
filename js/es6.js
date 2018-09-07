/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'daniel',
        email: 'daniel@codeup.com',
        languages: ['java', 'javascript, 'css']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },


    {
        name: "C. Josette Looft",
        email: 'cjlooft@gmail.com',
        languages: ['html', "css"]
    }


];

const name = 'C. Josette Looft';
const email = 'cjlooft@gmail.com';
const languages = ['html', 'css'];

// name = 'C. Josette Looft';
// email = 'cjlooft@gmail.com';
// languages = ['html', '


users.push({
    name: 'C. Josette Looft',
    email: 'cjlooft@gmail.com',
    languages: ['html', 'css']

});

let emails = [];
let names = [];


users.forEach(function (user =>) {
    emails.push(user.email);
     names.push(user.name);
});


let developers = [];
users.forEach(function (user => {

    //       note that you can also use destructuring assignment in the function
    //
    //parameter definition
    const  (name , email, languages} = user;


    developers.push(`${name}'s email is '${email}.  ${name} ' knows ' ${languages}.join(', ')`);
});

let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for (let developers of developer) {


    // TODO: rewrite the assignment below to use template strings
    list += '<li>' + developer + '</li>';
}) ;
list += '</ul>';


document.getElementById("list").innerHtml = list;
