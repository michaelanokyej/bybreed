const multipleRandomURL = 'https://dog.ceo/api/breeds/image/random/'; 
let userInput = '';

function dogApiCall(userInput){
    fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
    .then(response => response.json())    
    .then(responseJson => {
        if(responseJson.status === "error"){
            errMessage(responseJson);
        }
        else{
            display(responseJson)
        }
    })
        
    .catch(error => alert('Something went wrong'));
}

function errMessage(responseJson){
    alert(responseJson.message);
}

// fetch(url, options)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(response.statusText);
//     })
//     .then(responseJson => displayResults(responseJson, maxResults))
//     .catch(err => {
//       $('#js-error-message').text(`Something went wrong: ${err.message}`);
//     });



function display(responseJson){
    console.log(responseJson);
        $('#chosen').empty();
        $('#chosen').append(`   
        <li><div class="imgWrapper"><img src="${responseJson.message}" class="results-img"></div></li>
        `)
    $('.results').removeClass('hidden');
}

function callOnSubmit() {
    $('form').submit(event => {
        event.preventDefault();
       userInput = $('#breed').val();
        console.log(`user input = ${userInput}`);
        dogApiCall(userInput);
    });
}

$(callOnSubmit);