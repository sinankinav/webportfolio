var inputText,comment,btnSil,imgCol,liste,tr;

function ekle(){
    inputText =document.querySelector("#input");
    liste = document.querySelector("#liste");
    if (inputText.value ==="") {
        return;
    }
   
    comment = document.createElement("td");
    imgCol =document.createElement("td")

    comment.setAttribute("id","comment");

    imgCol.setAttribute("type","button");
    imgCol.setAttribute("id","btnSil");
    imgCol.setAttribute("onClick","satirSil(this)");

    comment.textContent = inputText.value;
    imgCol.innerHTML = '<a  class="delete-item float-right"><i class="fas fa-times"></i></a>'

    tr = document.createElement("tr");
    tr.appendChild(comment);
    tr.appendChild(imgCol);
    
    liste.appendChild(tr);
    
    inputText.value = "";
    inputText.focus();
    
}

function temizle(){
    if (liste != null) {
        var rowCount = liste.rows.length;
        for (var i = 0; i < rowCount; i++){
            liste.deleteRow(0);
        }
    }
}
function satirSil(e){
    
    e.closest('tr').remove();
   
}
