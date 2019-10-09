/*App Goals: 
-
-Cookie score tracker

*/
import React from 'react';
import './App.css';

class Score extends React.Component{
  state = {
    playerScore: 0,
    cpuScore :0
  }
  
  addWin = () => this.setState(this.state.playerScore + 1);
  addLoss = () => this.setState(this.state.cpuScore + 1);
  getPlayerScore = () => {return this.state.playerScore}
  getCpuScore = () => {return this.state.cpuScore}
  
  render(){
    return <div>Player: {this.getPlayerScore()} Computer: {this.getCpuScore()}</div>;
  }
}

class Player extends React.Component {
  score = new Score();  
  render(){
    return (
      <>
        <div className="Player">
          <Score />
          <img src="../images/Full_Icon.png" alt="Click to Play"/>
        </div>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">        
        <Player />
    </div>
  ); 
}

export default App;
