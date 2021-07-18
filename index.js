const winningCombination = [
	//horizontal wins
	[0,1,2],
	[3,4,5],
	[6,7,8],
	//vertical wins
	[0,3,6],
	[1,4,7],
	[2,5,8],
	//cross wins
	[0,4,8],
	[2,4,6]
];

let gameBoard = [];
let turn = "X";
let active = true;

const switchTurns = () =>{
	turn === "X" ? turn = "O": turn = "X";
}

const checkWin =()=>{
	for (let i=0; i < winningCombination.length; i++){
		if(gameBoard[winningCombination[i][0]]=== turn && gameBoard[winningCombination[i][1]]=== turn && gameBoard[winningCombination[i][2]]=== turn){
			document.getElementById("result").innerHTML = `${turn} won`
			active = false;
			return
		}
		
	}
	let count = 0;
	gameBoard.forEach((box)=>{
		if(typeof box === "string"){
			count++;
			console.log(count)
		}
	})
	if (count === 9){
		document.getElementById("result").innerHTML = "Draw";
	}
	// count = 0;
}

const makeMove = (index) => {
	if(!active){
		return
	}
	if (gameBoard[index] === "X" | gameBoard[index] === "O"){
		alert("box already played")
		return
	}
	gameBoard[index] = turn;
	document.getElementById(index).innerHTML = turn;
	checkWin()
	switchTurns()

}

const restart=()=>{
	gameBoard = [];
	turn = "X";
	let boxes = document.getElementsByClassName("box");
	for(let i=0; i<boxes.length; i++){
		boxes[i].innerHTML = ""
	}
	document.getElementById("result").innerHTML= " "
	active = true
}