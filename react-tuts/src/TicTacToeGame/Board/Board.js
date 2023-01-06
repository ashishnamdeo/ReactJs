import {useState} from 'react';
import Square from "../Square/Square";

function Board(){
    const [state,setState] = useState(Array(9).fill(null));
    const [isXTurn, SetIsXTurn] = useState(true);
    //console.log('state', state);

    const checkWinner =()=>{
        const winnerArray = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ];

        for(let item of winnerArray){
            const [a,b,c] = item;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            } 
        }
    }

    const isWinner = checkWinner();

    const handleClick = (index)=>{

        if(state[index] !== null){
            return;
        }
        //console.log('index', index);
      const copyState = [...state];
      copyState[index] = isXTurn ? 'X' : '0';
      setState(copyState);
      SetIsXTurn(!isXTurn)
    }
    const  resetGame=()=>{
        setState(Array(9).fill(null));
    }
    return(
        <div>
            {
                isWinner ?(<div><h1>Winner is {isWinner} {isXTurn}</h1> <br /><br /><br /> <button onClick={resetGame}>Play Again</button></div>):(<div>
                    <h2>Player {isXTurn ? 'X': '0'}  Turn</h2>
                     <div className="board-container">
                <Square value={state[0]} onClick={()=>handleClick(0)}/>
                <Square value={state[1]} onClick={()=>handleClick(1)}/>
                <Square value={state[2]} onClick={()=>handleClick(2)}/>
           </div>
           <div className="board-container">
                <Square value={state[3]} onClick={()=>handleClick(3)}/>
                <Square value={state[4]} onClick={()=>handleClick(4)}/>
                <Square value={state[5]} onClick={()=>handleClick(5)}/>
           </div>
           <div className="board-container">
                <Square value={state[6]} onClick={()=>handleClick(6)}/>
                <Square value={state[7]} onClick={()=>handleClick(7)}/>
                <Square value={state[8]} onClick={()=>handleClick(8)}/>
           </div>
                </div>)
            }
           
        </div>
    )
}

export default Board;