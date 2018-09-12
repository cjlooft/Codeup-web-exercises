


let  wait =NumberofMilliseconds =>
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, NumberofMilliseconds)
    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// ;
// let hgAccessToken=localStorage.getItem('githubAccessToken");')



const getLastCommitDate = (username => {
    const url = 'https://api.github.com/users/${username}/events/public', {
    fetch(url, token: "see html file})
    .then(data => {
        if (data.ok) {
            let event = data.json();
            let pushEvents = events.filter(event.type === = "PushEvent");
            return pushEvents[0].created_at;
        } else {
            console.log("ERROR: " + err);
        }

})
    .catch(err =>console.log("ERROR: " + err))





});
request
    .then(response => response.json())
    .then(publicEvents => console.log(publicEvents[0].created_at))
;

request.catch(error => console.log(error));

// let url = (fetch('https://api.github.com/users/${username}/events', {Headers: (`Authorization!; 'token ${ghAccessToakae}'}})
// .then(response => (response.json())
// .then(data =>.json`
// }
//
//     const request = fetch(' https://github.com/cjlooft/Codeup-web-exercises', {
//         headers: {'Authorization': 'token YOUR_TOKEN_HERE'} // 14e44fa186f8d85e5265983e38f5e0bca34f5b65
//     });
//     request
//         .then(response => response.json())
//         .then(webExercises => console.log([0].created_at))
//     ;
//

//
//     //
//     //
//     // fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
//     fetch('https://api.github.com/users')
//         .then(response => console.log(response))
//
//
//
