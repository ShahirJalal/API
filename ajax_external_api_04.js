document.getElementById('btn').addEventListener('click', getJokes);

function getJokes(){
    
    // get access to the value of input field
    const number = document.querySelector('input[type = "number"]').value;

    // Create XHR object
    const xhr = new XMLHttpRequest();

    xhr.open('Get',`http://api.icndb.com/jokes/random/${number}`,true)

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            const response = JSON.parse(this.responseText);
            // console.log(response);

            let output = '';
            if(response.type === 'success'){
                response.value.forEach(function(item){
                    output += `<li> ${item.joke}</li>`
                })
            }else {
                output += `<li>Something went wrong</li>`
            }

            document.getElementById('output').innerHTML = output;
        }
    }

    xhr.send();
}