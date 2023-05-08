$(document).ready(onReady);
function onReady() {
    console.log('TEST: jQuery is connected!');

    $('#generateButton').on('click', appendDiv);
    $('#generateButton').on('click', countClick);
    $("#pageBody").on("click", '#delete-button', removeDiv);
    $("#pageBody").on("click", '#yellow-button', makeYellow);

}

let clickCount = 0

function appendDiv(event) {
    
    event.preventDefault();

    $("#pageBody").append(`      
        <div class="addDiv">
            <p class="addP"></p>
            <button id="yellow-button">YELLOW</button>
            <button id="delete-button">DELETE</button>
        </div>
        <div></div>
      `);
}

function makeYellow() {
    $(this).parent().css("background-color", "yellow");
}

function removeDiv() {
    $(this).parent().remove();
}
function countClick() {
    clickCount++;
    $('.addP').text(clickCount);
}
