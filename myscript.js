$(document).ready(onReady);
function onReady() {
    console.log('TEST: jQuery is connected!');

    $('#generateButton').on('click', appendDiv);
    $('#generateButton').on('click', countClick);
    $("#pageBody").on("click", '#delete-button', removeDiv);
    $("#pageBody").on("click", '#yellow-button', makeYellow);
}

let clickCount = 0

function appendDiv() {
    
    
    $("#pageBody").append(`      
    <body>
        <div class="addDiv">This is a new div!
            <p class="addP"></p>
            <button id="yellow-button">YELLOW</button>
            <button id="delete-button">DELETE</button>
        </div>
    </body>
      `);

}

function makeYellow() {
    $('.addDiv').css("background-color", "yellow");
}

function countClick() {
    clickCount++;
    $('.addP').text(clickCount);
}

function removeDiv() {
    $(this).parent().remove();
}
