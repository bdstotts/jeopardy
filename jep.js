//const box200 = document.getElementsByClassName("money");
//console.log(box200);

team1ScoreBox= document.getElementById("team1Score");
team2ScoreBox= document.getElementById("team2Score");
team1Score =0;
team2Score =0;

const board = document.getElementById("board");
const dialog = document.querySelector("dialog");
//const closeButton = document.getElementById("close");

const cat1 = [
    {dollars: "$100", link: "https://www.youtube.com/", answer:"youtube"},
    {dollars: "$200", link: "https://github.com/new", answer:"github"}
]

for(i=0;i<cat1.length;i++){
   const square = document.createElement("div");
   square.classList.add("square");
   square.classList.add("money")
   let value = parseInt(cat1[i].dollars.slice(1));
   square.innerHTML = "$"+value;
   const link = cat1[i].link;
   board.appendChild(square);
   square.addEventListener("click", openModal)
   
    function openModal(){
       // console.log("money clicked");
        //const value = parseInt(this.innerHTML.slice(1));
        console.log("money clicked of $" + value + " value");
        dialog.showModal();

        playButton = document.getElementById("playButton")
        playButton.addEventListener("click",playMedia)

        function playMedia(){
        window.open(link,"_blank");

        }


    closeButton.addEventListener("click", () => {
        const team1 = document.getElementById("team1");
        const team2 = document.getElementById("team2")

        if (team1.checked){
            team1Score = (team1Score + value);
        }

        if(team2.checked){
            team2Score = (team2Score + value);
        }

        team1ScoreBox.innerHTML = team1Score;
        team2ScoreBox.innerHTML = team2Score;
        // value=0
        console.log(value)

        dialog.close();
       });

       

}

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

