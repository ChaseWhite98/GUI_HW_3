/*
Chase White
Chase_white@student.uml.edu
GUI I:  HW 3 multiplcation table:  JS file
6/13/22
*/

//function to both check for input error and display form-matching multiplication table
function calculate_table(){
	//clear alert box on each button click (func. call)
	var alert = document.getElementById("alert_box");
	alert.innerHTML = "";

	//get all input values from form
	var mincol = Number(document.getElementById("mincol").value);
	var maxcol = Number(document.getElementById("maxcol").value);
	var minrow = Number(document.getElementById("minrow").value);
	var maxrow = Number(document.getElementById("maxrow").value);
	console.log(mincol, maxcol, minrow, maxrow);

	//check for errors in input and alert user
	if (mincol < -50 || mincol > 50 || maxcol < -50 || maxcol > 50 || minrow < -50 || minrow > 50 || maxrow < -50 || maxrow > 50){
		alert.innerHTML = "all values must range from -50 to 50";
		alert.style.backgroundColor = "yellow";
		return false;
	}
	if (mincol >= maxcol){
		alert.innerHTML = "minimum column value must be strictly less than maximum column value";
		alert.style.backgroundColor = "yellow";
		return false;
	}
	if (minrow >= maxrow){
		alert.innerHTML = "minimum row value must be strictly less than maximum row value";
		alert.style.backgroundColor = "yellow";
		return false;
	}

	var num_rows = Math.abs(maxrow - minrow);
	var num_cols = Math.abs(maxcol - mincol);

	//initialize the final HTML table output to the table opening with empty TL corner
	var table_output = "<table><tr><td></td>";

	//loop for heading row at top
	for (var i = mincol; i <= maxcol; i++){
		table_output += "<td>" + i + "</td>";
	}
	table_output += "</tr>"; //end first row (heading row)

	//rest of rows loop
	for (var i = minrow; i <= maxrow; i++){
    	table_output += "<tr><td>" + i + "</td>";
    	for (var j = mincol; j <= maxcol; j++){
    		table_output += "<td>" + i*j + "</td>";
    	}
    	table_output += "</tr>";
	}

	//finish off table w/ closing
	table_output += "</table>";
	console.log(table_output);

	//grab empty div and set its inner html to the content of the table, which displays it
	var multi_table = document.getElementById("multi_table");
	multi_table.innerHTML = table_output;
}