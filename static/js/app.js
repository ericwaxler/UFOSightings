// from data.js
var tableData = data;

ind_i = 0;
populateTable(data);


var filtButton = document.getElementById('filter-btn');

filtButton.addEventListener('click', function(){
    var filtDate = document.getElementById('datetime').value;
    filterByDate(filtDate);
});

function populateTable(data){
    var table = document.getElementById("ufo-table");
    Object.values(data).forEach((data) => {
        
        var row = table.insertRow(1);
        ind_i++;
        ind_j = 0;
        // Get the entries for each object in the array
        Object.entries(data).forEach(([key, value]) => {
            
        //console.log(`Key: ${key} and Value ${value}`); 
        var cellval = row.insertCell(ind_j);
        cellval.innerHTML = value;
        //console.log(ind_j);
        ind_j++;
        });
    });
}

function filterByDate(filtDate){
    var table = document.getElementById("ufo-table");
    let filteredData = data.filter(obj => obj.datetime == filtDate);

    let rowCount = table.rows.length;
    for (var i = 1; i < rowCount; i++) {
        table.deleteRow(1);
    }
    populateTable(filteredData);
    console.log(filtDate)
}