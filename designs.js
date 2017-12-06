$(document).ready(function(){
	var grid = $('#pixel_canvas');																//Canvas area

	function makeGrid(maxRows,maxColumns) {												//Draw maxRows x maxColumns sized Canvas
		for (let i=0; i<maxRows; i++){															//Nested loop to add Table Rows and Table Data (aka cells)
			grid.append('<tr></tr>');
			for (let j=0; j<maxColumns; j++){
				$('tr').last().append('<td></td>');
			}
		}
	}

	$('#sizePicker').submit(function(e){													//Event handler for [submit] button click
		var gridHeight = Number($('#input_height').val());					//Height of Canvas (aka number of rows)
		var gridWidth = Number($('#input_width').val());						//Width of Canvas (aka number of columns)
		grid.empty(); 																							//Clear Canvas area
		makeGrid(gridHeight,gridWidth);															//Draw Canvas
		e.preventDefault();																					//Prevent refresh of page
	});

	$(grid).on('click','td',function() {													//Event handler to fill a cell with chosen color upon click
		$(this).css('background-color', $('#colorPicker').val());
	});

	$(grid).on('dblclick','td',function() {												//Event handler to clear a cell upon doubleclick
		$(this).removeAttr('style');
	});
});