function addItem(){
    var item = document.createElement("LI");
    item.innerHTML = document.getElementById("text").value + " ";
    var list = document.getElementById("list");
    var button = document.createElement("BUTTON");
    button.innerHTML = "❌";
    button.addEventListener("click",function(){
        item.remove();
    })
    item.appendChild(button);
    list.appendChild(item);
}