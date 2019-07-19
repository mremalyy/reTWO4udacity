// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
// Add click event to the submit input
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    // Storing grid height value
    height = $('#inputHeight').val();
    // Storing grid width value
    width = $('#inputWidth').val();
    makeGrid(height, width);

})
/**
 * @desc create a grid of squares 
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */

function makeGrid(height, width) {
    $('tr').remove();
    // Loop to insert the rows
    for (var row = 1; row <= height; row++) {
        $('#pixelCanvas').append('<tr id=table' + row + '></tr');
        // Loop to insert the cells
        for (var column = 1; column <= width; column++) {
            $('#table' + row).append('<td></td>');
        }
    }
    //add color
    // When the cell is clicked, the background color changes to the selected color
    $('td').click(function addcolor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {

            $(this).attr('style', 'background-color:' + color);
        }

    })
}