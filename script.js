var selected = null;

function sub(){
    event.preventDefault();
    FormData = readFormData();

    if(selected === null){
            insertNewRecord(FormData);
    }else{
        update(FormData);
    }

}

function readFormData(){
    var FormData = {};

    FormData["name"]=document.getElementById("name").value;
    FormData["pass"]=document.getElementById("pass").value;
    FormData["number"]=document.getElementById("number").value;

    return FormData;
}
function insertNewRecord(data){
    var table = document.getElementById("userlist").getElementsByTagName(`tbody`)[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.name;

     cell2= newRow.insertCell(1);
     cell2.innerHTML = data.pass;

     cell3= newRow.insertCell(2);
     cell3.innerHTML = data.number;

     cell4= newRow.insertCell(3);
     cell4.innerHTML = `<button class="sub1" onClick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i>Edit</button> <button class="res1" onClick="dell(this)"><i class="fa-solid fa-trash-can"></i>Delete</button>`;

}
function onEdit(td){
    selected = td.parentElement.parentElement;
    document.getElementById("name").value = selected.cells[0].innerHTML;
    document.getElementById("pass").value = selected.cells[1].innerHTML;
    document.getElementById("number").value = selected.cells[2].innerHTML;
}
function update(FormData){
    selected.cells[0].innerHTML = FormData.name;
    selected.cells[1].innerHTML = FormData.pass;
    selected.cells[2].innerHTML = FormData.number;
}
function dell(td){
    row = td.parentElement.parentElement;
    document.getElementById("userlist").deleteRow(row.rowIndex);
}