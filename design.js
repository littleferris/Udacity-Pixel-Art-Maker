const $inputHeight = $('#inputHeight');
const $colorPicker = $('#colorPicker');
const $inputWidth = $('#inputWidth');
const $tableElement = $('#pixelCanvas');

function makeGrid(x, y) {
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr');
        for (var k = 1; k <=y; k++) {
            $('#table' + i).append('<td></td>');
        }
    }
}

function addEvent() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color);
    });
}

$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html(''); 

    makeGrid(height, width);
    addEvent();
});
