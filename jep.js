const box200 = document.getElementsByClassName("money")
console.log(box200)
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

Array.from(box200).forEach(element => {
    element.addEventListener("click", action)
    
});

function action(){
    console.log("money clicked")
   const value = this.innerHTML.slice(1)
   console.log(value)
}