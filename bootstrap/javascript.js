var counter = 1;
function addProduct(quantity, price,productName,taxRate){
	var grossPrice = quantity * price;
	var selectedQtyType = $('#qtySelect option:selected').text();
	var selectedQtyValue = $('#qtySelect option:selected').val();

	var trow = "<tr id=row"+counter+">\
	<td>"+counter+"</td>\
	<td>"+productName+"</td>\
	<td>"+quantity+" "+selectedQtyType+"</td>\
	<td>$"+price+" / "+selectedQtyType+"</td>\
	<td>$"+grossPrice+"</td>\
	<td>%"+taxRate+"</td>\
	<td>$"+getNetPrice(grossPrice, taxRate)+"</td>\
	</tr>";
	$('#table tbody').append(trow);
	counter++;
}

function getNetPrice(grossPrice, taxRate){
	return grossPrice - grossPrice * (taxRate/100);
}

function deleteRow(rowNumber){
	if (rowNumber == counter - 1){
		$('#row'+rowNumber).remove();
		counter--;
	}else if(rowNumber == 1){
		var k = $('#table tbody tr').length;
	}
}