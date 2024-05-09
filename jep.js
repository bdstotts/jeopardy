//const box200 = document.getElementsByClassName("money");
//console.log(box200);
const board = document.getElementById("board");
const dialog = document.querySelector("dialog");
const closeButton = document.getElementById("close");
const cat1 = [
    {dollars: "$100", link: "https://www.youtube.com/", answer:"youtube"},
    {dollars: "$200", link: "https://github.com/new", answer:"github"}
]

for(i=0;i<cat1.length;i++){
   const square = document.createElement("div");
   square.classList.add("square");
   square.classList.add("money")
   square.innerHTML = cat1[i].dollars;
   board.appendChild(square);
   console.log(square.innerHTML);

}


/*function action(){
    console.log("Money was clicked")
    let value = this.innerHTML;
    console.log(value);
}

for (var i in box200) {
    box200[i].onclick = function() {
      action();
    };
}*/

/*Array.from(box200).forEach(element => {
    element.addEventListener("click", action)
    
});

function action(){
    console.log("money clicked");
   const value = this.innerHTML.slice(1);
   console.log(value);
   const boxy = document.createElement("div")
boxy.classList.add("square");
boxy.innerHTML = "boxy text " + value
   dialog.appendChild(boxy)
   dialog.showModal();
    window.open(cat1[0],"_blank");



   closeButton.addEventListener("click", () => {
    dialog.removeChild(boxy);
    dialog.close();
   });

}*/

