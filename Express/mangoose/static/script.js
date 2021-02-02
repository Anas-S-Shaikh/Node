console.log('included!');
// getting data from server that we have created!
fetch('http://127.0.0.1:3000/apicall')
    .then(Response => Response.json())
    .then(data => console.log(data));
