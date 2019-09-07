const multipleRandomURL = 'https://dog.ceo/api/breeds/image/random/'; 
let userInput = '';

function dogApiCall(userInput){
    fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => display(responseJson))
    .catch(error => errMessage(responseJson));
}

function errMessage(responseJson){
    alert(responseJson.message);
}



function display(responseJson){
    console.log(responseJson);
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