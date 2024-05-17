//const box200 = document.getElementsByClassName("money");
//console.log(box200);

team1ScoreBox= document.getElementById("team1Score");
team2ScoreBox= document.getElementById("team2Score");
team1Score =0;
team2Score =0;

catBoard = document.getElementById("catBoard")
//const board = document.getElementById("board");
//const dialog = document.querySelector("dialog");
//const closeButton = document.getElementById("close");

const catTitles1 = ["It All Adds Up", "Your Highness","Feeling Hungry", "Let's go to Broadway","As Seen on TV"]

const cats1 = [//It all adds up
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
    [{dollars: "$100", link: "https://www.youtube.com/watch?v=YM_oPxKQR7o&ab_channel=BrianMartens", answer:"rhcp snow hey oh"},
    {dollars: "$200", link: "https://www.youtube.com/watch?v=JZN9N-WFLKI&ab_channel=ALBAMUSIC", answer:"spice girls"},
    {dollars: "$300", link: "https://www.youtube.com/watch?v=6Ejga4kJUts&ab_channel=TheCranberriesVEVO", answer:"cranberries"},
    {dollars: "$400", link: "https://www.youtube.com/watch?v=F_HoMkkRHv8&ab_channel=CakeVEVO", answer:"cake"},
    {dollars: "$500", link: "https://www.youtube.com/watch?v=6oipFiNPfdY&ab_channel=BlindMelon-Topic", answer:"blind melon"}],
     //Lets go to Broadway..........................................................................
     [{dollars: "$100", link: "https://www.youtube.com/watch?v=UeqKF_NF1Qs&ab_channel=Ren%C3%A9eEliseGoldsberry-Topic", answer:"hamilton"},
     {dollars: "$200", link: "https://www.youtube.com/watch?v=tvsDObIQFhg&ab_channel=CamilaDS", answer:"into the woods"},
     {dollars: "$300", link: "https://www.youtube.com/watch?v=77umP7IRxD4&t=31s&ab_channel=ThePhantomoftheOpera", answer:"phantom"},
     {dollars: "$400", link: "https://www.youtube.com/watch?v=Dp8sYTlLQRY&ab_channel=ScreenBites", answer:"les mis"},
     {dollars: "$500", link: "https://www.youtube.com/watch?v=s-VRyQprlu8&t=33s&ab_channel=Rodgers%26Hammerstein", answer:"sound of music"}],
      //As seen on TV..........................................................................
    [{dollars: "$100", link: "https://www.youtube.com/watch?v=hBe0VCso0qs&ab_channel=Coin", answer:"fresh prince"},
    {dollars: "$200", link: "https://www.youtube.com/watch?v=7KtAgAMzaeg&ab_channel=Tiktook", answer:"cheers"},
    {dollars: "$300", link: "https://www.youtube.com/watch?v=Mpl86S5z9ic&ab_channel=Xero", answer:"simps"},
    {dollars: "$400", link: "https://www.youtube.com/watch?v=AdQ3JDLlmPI&ab_channel=GameofThrones", answer:"GoT"},
    {dollars: "$500", link: "https://www.youtube.com/watch?v=O8W9qr7DB-o&ab_channel=GilGonzalez", answer:"twd"}],
]

const catTitles2 = ["Colors of the Rainbow", "Divas","Boy Bands", "Letters to You","Classic Emo"]

const cats2 = [//Colors of the Rainbow
    [{dollars: "$200", link: "", answer:"Maroon 5"},
    {dollars: "$400", link: "", answer:"Green Day"},
    {dollars: "$600", link: "", answer:"Black Sabbath"},
    {dollars: "$800", link: "", answer:"Blue MAn group"},
    {dollars: "$1000", link: "https://www.youtube.com/watch?v=Dy4HA3vUv2c&ab_channel=BlueOysterCultVEVO", answer:"Blue oyster cult ... reaper"}],
    //Divas..........................................................................
    [{dollars: "$200", link: "", answer:"Celine Dion MY heart will go on"},
    {dollars: "$400", link: "", answer:"MAriah Carrey Emotions"},
    {dollars: "$600", link: "", answer:"Whitney Houston I wanna dance with somebody"},
    {dollars: "$800", link: "", answer:"Beyonce Halo"},
    {dollars: "$1000", link: "", answer:"Ariana G Thank you next"}],
    //Boy Bands..........................................................................
    [{dollars: "$200", link: "", answer:"Nsync"},
    {dollars: "$400", link: "", answer:"98 deg"},
    {dollars: "$600", link: "", answer:"One Direction"},
    {dollars: "$800", link: "", answer:"Backstreet Boys"},
    {dollars: "$1000", link: "", answer:"BTS Butter"}],
     //Letters to You..........................................................................
     [{dollars: "$200", link: "", answer:"ACDC"},
     {dollars: "$400", link: "", answer:"U2"},
     {dollars: "$600", link: "", answer:"REM"},
     {dollars: "$800", link: "", answer:"LMFAO party rock anthem"},
     {dollars: "$1000", link: "", answer:"B-52s"}],
      //Classic Emo..........................................................................
    [{dollars: "$200", link: "https://www.youtube.com/watch?v=iBeyEXd46U8&ab_channel=TheSquiggleyPanda", answer:"Yellow Card Ocean Avenue"},
    {dollars: "$400", link:  "https://www.youtube.com/watch?v=SU9Fm2bqZTo&ab_channel=21CLyrics", answer:"Fallout boy sugar were going.."},
    {dollars: "$600", link:  "", answer:"Jimmy Eat World The middle"},
    {dollars: "$800", link:  "", answer:"Sum 41 "},
    {dollars: "$1000", link: "", answer:"Deathcab "}],
]


createBoard(catTitles1,cats1);

function createBoard(x,y){

for(k=0;k<x.length;k++){
    const titleSquare = document.createElement("div");
    titleSquare.classList.add("square","category");
    titleSquare.innerHTML = x[k];
    catBoard.appendChild(titleSquare);
    console.log(k)

}


for(j=0;j<y.length;j++){

for(i=0;i<y[j].length;i++){
    
   const square = document.createElement("div");
   square.classList.add("square");
   square.classList.add("money")
   //console.log(y[j][i].dollars);
   let value = parseInt(y[j][i].dollars.slice(1));
   square.innerHTML = "$"+value;
   const link = y[j][i].link;
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

    //console.log(play)

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
           
    }

    square.style.color = "rgb(0,0,190)";
    console.log(square)
    square.removeEventListener("click", submitted,true)

   }}


}}

team1Box = document.getElementById("team1Box")
const doubleJep = document.createElement("div")
doubleJep.classList.add("double")
//console.log(typeof(team1Box))
doubleJep.addEventListener("click", (destroyRebuild))
team1Box.appendChild(doubleJep);


function keyPressed(){
    if (KeyboardEvent.key === "ArrowUp"){
        destroyRebuild()
    }
}

function destroyRebuild(){

    console.log("Correct key pressed")
    squares = document.getElementsByClassName("square");
    squares = Array.from(squares);
    squares.forEach(element => {
    element.remove();        
    });

    createBoard(catTitles2, cats2)

}
/////add this note to cjeck for commit
   
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

