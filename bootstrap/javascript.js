var counter = 1;
function addProduct(quantity, price,productName){
	var sum = quantity * price;
	var trow = "<tr id=row"+counter+">\
	<td>"+counter+"</td>\
	<td>"+productName+"</td>\
	<td>"+quantity+"</td>\
	<td>"+price+" $</td>\
	<td>"+sum+" $</td>\
	</tr>";
	$('#table tbody').append(trow);
	counter++;
}

function deleteRow(rowNumber){
	if (rowNumber == counter - 1){
		$('#row'+rowNumber).remove();
		counter--;
	}else if(rowNumber == 1){
		var k = $('#table tbody tr').length;
		for(
	}
	
}