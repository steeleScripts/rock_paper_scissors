/*App Goals: 
-
-Cookie score tracker

*/
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

function TitleScreen() {
  return (
    <>        
      <div className="TitleScreen">        
        <Link to="/play">
          <button id="playButton" >
            <h1>Click to Play</h1>
          </button>
        </Link>
      </div>          
    </>
  );
}

//

function PlayRound() {         
  return (
    <>      
      <div className="Game">
        <h1>Rock, Paper, or Scissors?</h1>     
        
        <div className="ButtonContainer">
          <Link to={{pathname: "/result", state: {player: "ROCK"} }}>
            <button id="rock"></button>
          </Link>
          <Link to={{pathname: "/result", state: {player: "PAPER"} }}>
            <button id="paper"></button>
          </Link>
          <Link to={{pathname: "/result", state: {player: "SCISSORS"} }}>
            <button id="scissors"></button>
          </Link>          
        </div>        
      </div>
    </>
  );  
  
}

class Result extends React.Component {
  constructor() {
    super();
    this.state = {cpu: "", player: "", result: ""}
  }
  computerPlay = () => {
    let play = Math.floor(Math.random() * 3);
    switch(play){
        case 0: play = "ROCK"; break;
        case 1: play = "PAPER"; break;
        case 2: play = "SCISSORS"; break;
        default: console.log("Error");
    }
    this.setState({cpu: play});
  } 
  
  
  playRound = function(){
    //Game Logic
    switch(this.state.player){
        case "ROCK":
            switch(this.state.cpu){
                case "ROCK":
                    this.setState({result: "Rock against rock; it's a tie game, try again"});
                    break;
                case "PAPER":
                    this.setState({result: "Paper beats rock, yeah I don't get it either. You lose though."});
                    break;
                case "SCISSORS":
                    this.setState({result: "Rock beats scissors, winner!"});
                    break;
            }
            break;
        case "PAPER":
            switch(this.state.cpu){
                case "ROCK":
                    this.setState({result: "Paper beats rock! Don't question it, you win!!"});
                    break;
                case "PAPER":
                    this.setState({result: "Any more paper and we'd have a small pamplet. It's a tie"});
                    break;
                case "SCISSORS":
                    this.setState({result: "Your paper got sliced. You lose. "});
                    break;
            }
            break;
        case "SCISSORS":
            switch(this.state.cpu){
                case "ROCK":
                  this.setState({result: "A rock smashed your scissors. You lose."});
                  break;
                case "PAPER":
                  this.setState({result: "Snippity dippity. You have the victory"});
                  break;
                case "SCISSORS":
                  this.setState({result: "Tie game, better look away."});
                  break;
            }                     
            break;
          default:
              console.log("Error");
              break;
            
      }   
  }
  render() { 
    console.log(this.state.player + " " + this.state.cpu);
    return (
      <>
        <div className="Result">{this.playRound()}</div>      
      </>
    );
  }  
}

function App() {  
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TitleScreen />
        </Route>
        <Route path="/play">
          <PlayRound />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/stats">
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  )  
}

ReactDOM.render(<App />, document.getElementById("root"));


export default App;


/*class Score extends React.Component{
  state = {
    playerScore: 0,
    cpuScore :0
  }
  
  addWin = () => this.setState({playerScore: this + 1});
  addLoss = () => this.setState({cpuScore: this + 1});
  getPlayerScore = () => {return this.state
.playerScore}
  getCpuScore = 
    () => {return this.state.cpuScore}
  
  render(){
    return <div className="Score">Player: {this.getPlayerScore()} Computer: {this.getCpuScore()}</div>;
  }
}*/