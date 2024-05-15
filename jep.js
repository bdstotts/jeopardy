//const box200 = document.getElementsByClassName("money");
//console.log(box200);

team1ScoreBox= document.getElementById("team1Score");
team2ScoreBox= document.getElementById("team2Score");
team1Score =0;
team2Score =0;

catBoard = document.getElementById("catBoard")
const board = document.getElementById("board");
const dialog = document.querySelector("dialog");
//const closeButton = document.getElementById("close");

const cats = [//It all adds up
    [{dollars: "$100", link: "https://www.youtube.com/watch?v=kPBzTxZQG5Q&ab_channel=3DoorsDownVEVO", answer:"3 doors down here w/o you"},
    {dollars: "$200", link: "https://www.youtube.com/watch?v=3sO-Y1Zbft4&ab_channel=twentyonepilots", answer:"top shy away"},
    {dollars: "$300", link: "https://www.youtube.com/watch?v=y7gnzVuHfdg&ab_channel=BoyzIIMen-Topic", answer:"b2m thank you"},
    {dollars: "$400", link: "https://www.youtube.com/watch?v=5d7EbtLb8ok&ab_channel=MatchboxTwenty", answer:"MB20 How far weve come"},
    {dollars: "$500", link: "https://www.youtube.com/watch?v=l5261s3Z3RU&ab_channel=Beat-Club", answer:"3 dog night One"}],
    //Your Highness..........................................................................
    [{dollars: "$100", link: "https://www.youtube.com/watch?v=rblt2EtFfC4&ab_channel=Prince", answer:"youtube"},
    {dollars: "$200", link: "https://www.youtube.com/watch?v=PivWY9wn5ps&ab_channel=michaeljacksonVEVO", answer:"MJ Man in the mirror"},
    {dollars: "$300", link: "https://www.youtube.com/watch?v=vGJTaP6anOU&ab_channel=ElvisPresleyVEVO", answer:"Elvis- cant help falling..,"},
    {dollars: "$400", link: "https://www.youtube.com/watch?v=Jp3fu05GdsM&ab_channel=YoungPilgrimMusic", answer:"queen youre my best friend"},
    {dollars: "$500", link: "https://www.youtube.com/watch?v=nlcIKh6sBtc&ab_channel=LordeVEVO", answer:"Lorde Royals"}],
    //Feeling Hungry..........................................................................
    [{dollars: "$100", link: "https://www.youtube.com/", answer:"youtube"},
    {dollars: "$200", link: "https://github.com/new", answer:"github"},
    {dollars: "$300", link: "https://github.com/new", answer:"github"},
    {dollars: "$400", link: "https://github.com/new", answer:"github"},
    {dollars: "$500", link: "https://github.com/new", answer:"github"}],
     //Lets go to Broadway..........................................................................
     [{dollars: "$100", link: "https://www.youtube.com/", answer:"youtube"},
     {dollars: "$200", link: "https://github.com/new", answer:"github"},
     {dollars: "$300", link: "https://github.com/new", answer:"github"},
     {dollars: "$400", link: "https://github.com/new", answer:"github"},
     {dollars: "$500", link: "https://github.com/new", answer:"github"}],
      //As seen on TV..........................................................................
    [{dollars: "$100", link: "https://www.youtube.com/", answer:"youtube"},
    {dollars: "$200", link: "https://github.com/new", answer:"github"},
    {dollars: "$300", link: "https://github.com/new", answer:"github"},
    {dollars: "$400", link: "https://github.com/new", answer:"github"},
    {dollars: "$500", link: "https://github.com/new", answer:"github"}],
]

const catTitles = ["It All Adds Up", "Your Highness","Feeling Hungry", "Let's go to Broadway","As Seen on TV"]

for(k=0;k<catTitles.length;k++){
    const titleSquare = document.createElement("div");
    titleSquare.classList.add("square","category");
    titleSquare.innerHTML = catTitles[k];
    catBoard.appendChild(titleSquare);

}


for(j=0;j<cats.length;j++){

for(i=0;i<cats[j].length;i++){
    
   const square = document.createElement("div");
   square.classList.add("square");
   square.classList.add("money")
   console.log(cats[j][i].dollars);
   let value = parseInt(cats[j][i].dollars.slice(1));
   square.innerHTML = "$"+value;
   const link = cats[j][i].link;
   board.appendChild(square);
   square.addEventListener("click", openMedia)

   function openMedia(){
    console.log("clicked");
    mediaBox = document.getElementById("mediaBox")
    play = document.createElement("button")
    play.setAttribute("id", "play")
    play.innerHTML= "Play";
    mediaBox.appendChild(play);

    checkDiv = document.createElement("div")
    checkDiv.setAttribute("id","checkDiv")
    mediaBox.appendChild(checkDiv)
    
    team1Check = document.createElement("input")
    team1Check.setAttribute("type", "checkbox")
    checkDiv.appendChild(team1Check);

    p1Label = document. createElement("p");
    p1Label.innerHTML = "Team 1 Wins"
    checkDiv.appendChild(p1Label)
    
    team2Check = document.createElement("input")
    team2Check.setAttribute("type", "checkbox")
    checkDiv.appendChild(team2Check);

    p2Label = document. createElement("p");
    p2Label.innerHTML = "Team 2 Wins"
    checkDiv.appendChild(p2Label)

    submit = document.createElement("button")
    submit.innerHTML= "submit";
    submit.setAttribute("id", "submit")
    mediaBox.appendChild(submit);

    items = [checkDiv,team1Check,team2Check,p1Label,p2Label,play,submit]

    console.log(play)

    play.addEventListener("click",playMedia)
   
    function playMedia(){
        window.open(link, "_blank", "height=50,width=100")
    }

    submit.addEventListener("click", submitted)

    function submitted(){
        items = [checkDiv,team1Check,team2Check,p1Label,p2Label,play,submit]
        console.log(items)

        if (team1Check.checked){
            team1Score = (team1Score + value);
        }

        if(team2Check.checked){
            team2Score = (team2Score + value);
        }

        team1ScoreBox.innerHTML = team1Score;
        team2ScoreBox.innerHTML = team2Score;

        document.getElementById("play").remove()
        document.getElementById("submit").remove()
        document.getElementById("checkDiv").remove()

/*
            play.remove();
            submit.remove();
            checkDiv.remove();*/
        
            



    }
    square.style.color = "rgb(0,0,190)";
    console.log(square)
    square.removeEventListener("click", submitted,true)


   }}


}
   
    /*function openModal(){
       // console.log("money clicked");
        //const value = parseInt(this.innerHTML.slice(1));
        console.log("money clicked of $" + value + " value");
        dialog.showModal();

        playButton = document.getElementById("playButton")
        playButton.addEventListener("click",playMedia)

        function playMedia(){
        window.open(link,"_blank");

        }

        this.style.color = ("rgb(0,0,190)")


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
*/

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
    window.open(cats[0],"_blank");



   closeButton.addEventListener("click", () => {
    dialog.removeChild(boxy);
    dialog.close();
   });

}*/

