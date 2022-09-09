// JSON stands for JavaScript object notation
// Structured format for representing data, so all
// the computers can understand it
// JSON is a way of communicating data
// JSON is using key value pairs
// JSON can work with other languages as well

// document.getElementById('btn1').addEventListener('click', loadUser);
document.getElementById('btn2').addEventListener('click', loadUsers);

// function loadUser(){
//     // create XHR object
//     const xhr = new XMLHttpRequest();

//     // Open method 
//     xhr.open('Get', 'user_03.json', true);

//     // Onload
//     xhr.onload = function(){
//         if(this.status === 200) {
//             // console.log(this.responseText);
//             // convert the JSON to 
//             const user = JSON.parse(this.responseText);
//             console.log(user);

//             const output = `<ul>
//             <li>Id: ${user.id}</li>
//             <li>Name: ${user.name}</li>
//             <li>Age: ${user.age}</li>
//             </ul>`;

//             document.getElementById('user').innerHTML = output;
//         }
//     }
//     xhr.send();
// }

function loadUsers(){
    // create XHR object
    const xhr = new XMLHttpRequest();

    // Open method 
    xhr.open('Get', 'users_03.json', true);

    // Onload
    xhr.onload = function(){
        if(this.status === 200) {
            // console.log(this.responseText);
            // converting to JS object
            const users = JSON.parse(this.responseText);
            // console.log(users);

            let output = "";
            // We use forEach to loop through an array
            users.forEach(function(user){
                output +=
                `<ul>
                <li>Id: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Age: ${user.age}</li>
                </ul>`;
            });

            document.getElementById("users").innerHTML = output;
        }
    }
    xhr.send();
}