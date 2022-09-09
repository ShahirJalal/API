// Selecting the element
document.getElementById('btn').addEventListener('click', loadData);

function loadData(){
    // Create the XHR object
    const xhr = new XMLHttpRequest();

    // Open method (type of the request, URL (where to get the data from),)
    xhr.open('Get', 'data_02.txt', true);

    // Load response
    xhr.onload = function() {
        // console.log(xhr.readyState);
        // console.log(this.responseText);

        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // Send request
    xhr.send();
}

// Ready state value:
// 0 : request not initialized
// 1 : server connection established
// 2 : request received
// 3 : processing the response
// 4 : request finished and response is ready


// HTTP Status:
// 200 : OK
// 403 : forbidden
// 404 : not found