var rowCount = 0;

function addProduct(quantity, price,productName,taxRate){

	var grossPrice = (quantity * price);
	var netPrice = getNetPrice(grossPrice, taxRate);

	var sGrossPrice = grossPrice.toPrecision(4);
	var sNetPrice = netPrice.toPrecision(4);
	var selectedQtyType = $('#qtySelect option:selected').text();
	var selectedQtyValue = $('#qtySelect option:selected').val();
	rowCount++;

	var trow = "<tr id=row"+rowCount+">\
	<td>"+rowCount+"</td>\
	<td>"+productName+"</td>\
	<td>"+quantity+" "+selectedQtyType+"</td>\
	<td>$"+price+" / "+selectedQtyType+"</td>\
	<td>$"+sGrossPrice+"</td>\
	<td>%"+taxRate+"</td>\
	<td>$"+sNetPrice+"</td>\
	</tr>";
	$('#table tbody').append(trow);

	if(!$('#totalGPrice').length){

		$('.row.mt-4').after('<hr>',
			$('<div>',{
				class: 'row'
			}).append(
			$('<div>',{
				id: 'totalGPrice',
				class: 'offset-lg-6 offset-md-4 col-lg-3 col-md-4 col-sm-6 col-12'
			}).html('Total Gross Price: $<span id=\"gPrice\">'+sGrossPrice+'</span>'),
			$('<div>',{
				id: 'totalNPrice',
				class: 'col-lg-3 col-md-4 col-sm-6 col-12'
			}).html('Total Net Price: $<span id=\"nPrice\">'+sNetPrice+'</span>'))
			)
	}else{
		addTotals(grossPrice, netPrice);
	}
}

function addTotals(grossPrice, netPrice){

	var gPrice = parseFloat($("#gPrice").html());
	var nPrice = parseFloat($("#nPrice").html());

	$('#gPrice').html((grossPrice + gPrice).toPrecision(4));
	$('#nPrice').html((netPrice + nPrice).toPrecision(4));
}

function addtoTotalGrossPrice(){

}

function addtoTotalNetPrice(){

}

function getNetPrice(grossPrice, taxRate){
	return grossPrice - grossPrice * (taxRate/100);
}

function deleteRow(rowNumber){
	if (rowNumber == rowCount){
		$('#row'+rowNumber).remove();
		rowCount--;
	}else if(rowNumber == 1){
		var k = $('#table tbody tr').length;
	}
}