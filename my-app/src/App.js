import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

function Square(props){
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares){
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i=0; i<win.length; i++){
    const [a,b,c] = win[i]
    if(squares[a]&&squares[a]===squares[b]&&squares[b]===squares[c]){
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
  renderSquare(i){
    return (<Square 
    value = {this.props.squares[i]}
    onClick = {() => this.handleClick(i)}
    />);
  }

  render(){    
    return(
      <div>
        <div class="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div class="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div class="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  };
}

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      history:[
        {square: Array(9).fill(null)}
      ],
      xIsTrue: true,
      stepNumber: 0,
    }
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber+1);
    const current = history[history.length-1]
    const squares = current.squares

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsTrue? 'X':'O';
    this.setState({
      hisotry: history.concat([{
        squares: squares,
      }]),
      xIsTrue: !this.state.xIsTrue,
      stepNumber: history.length
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsTrue: (step%2) === 0,
    })
  }

  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step,move) => {
      const desc = move?
      "go to move #" + move:
      "go to the start";
      return (
        <li key={move}>
          <button onClick = {() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if(winner){
      status = "Winner is: " + winner;
    }else{
      status = 'The next player is: ' + (this.state.xIsTrue? 'X':'O');
    }

    return(
      <div>
        <div class="game-on">
          <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div>{status}</div>
        <div>{moves}</div>
      </div>
    )
  }
}

class App extends Component {
render() {
  return (
      <Game />
    );
  }
}

export default App;
  