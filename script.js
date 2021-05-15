function addItem(){
    var x = document.getElementById("text");
    var item = document.createElement("LI");
    item.innerHTML = x.value + " ";
    x.value = "";
    var list = document.getElementById("list");
    var button = document.createElement("BUTTON");
    button.innerHTML = "❌";
    button.addEventListener("click",function(){
        item.remove();
    })
    item.appendChild(button);
    list.appendChild(item);
}
