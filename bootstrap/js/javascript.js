var rowCount = 0;

function addProduct(quantity, price,productName,taxRate){

	var grossPrice = accounting.toFixed((quantity * price),2);
	var netPrice = accounting.toFixed(getNetPrice(grossPrice, taxRate),2);
	var tax = accounting.toFixed(grossPrice * (taxRate/100),2);
	console.log(tax);
	
	var selectedQtyType = $('#qtySelect option:selected').text();
	var selectedQtyValue = $('#qtySelect option:selected').val();
	rowCount++;

	var trow = "<tr id=row"+rowCount+">\
	<td>"+rowCount+"</td>\
	<td>"+productName+"</td>\
	<td>"+quantity+" "+selectedQtyType+"</td>\
	<td>$"+price+" / "+selectedQtyType+"</td>\
	<td>$"+grossPrice+"</td>\
	<td>%"+taxRate+"</td>\
	<td>$"+netPrice+"</td>\
	</tr>";
	$('#table tbody').append(trow);

	if(!$('#totalNPrice').length){

		$('.row.mt-4').after('<hr>',
			$('<div>',{
				class: 'row'
			}).append(
			$('<div>',{
				id: 'totalNPrice',
				class: 'offset-lg-6 offset-md-4 col-lg-3 col-md-4 col-sm-6 col-12'
			}).html('Total Net Price: $<span id=\"spanNetPrice\">'+netPrice+'</span>'),
			$('<div>',{
				id: 'totalTax',
				class: 'col-lg-3 col-md-4 col-sm-6 col-12'
			}).html('Total Tax: $<span id=\"spanTax\">'+tax+'</span>'))
			)
	}else{
		console.log('burada');
		addTotals(parseFloat(netPrice), parseFloat(tax));
	}
}

function addTotals(netPrice, tax){

	var floatNPrice = parseFloat($("#spanNetPrice").html());
	var floatTax = parseFloat($("#spanTax").html());

	$('#spanNetPrice').html(accounting.toFixed((netPrice + floatNPrice)));
	$('#spanTax').html(accounting.toFixed((tax + floatTax), 2));
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