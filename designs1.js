// Select color input
// Select size input
let height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    console.log('Height:' + height + ' and width: ' + width)
});

//Create the Grid
function makeGrid(x, y) {
    $('tr').remove();
    
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr');
        for (var k = 1; k <=y; k++) {
            $('#table' + i).append('<td></td>');
        }
    }
    //adding the color to each block
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
