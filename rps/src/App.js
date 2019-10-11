/*App Goals: 
-
-Cookie score tracker

*/
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

class Score extends React.Component{
  state = {
    playerScore: 0,
    cpuScore :0
  }
  
  addWin = () => this.setState({playerScore: this + 1});
  addLoss = () => this.setState({cpuScore: this + 1});
  getPlayerScore = () => {return this.state.playerScore}
  getCpuScore = () => {return this.state.cpuScore}
  
  render(){
    return <div className="Score">Player: {this.getPlayerScore()} Computer: {this.getCpuScore()}</div>;
  }
}

function TitleScreen() {
  return (
    <>  
      <Helmet><title>Rock Paper Scissors</title></Helmet>      
      <div className="TitleScreen">
        <h1>Rock Paper Scissors</h1>
        <Link to="/play"><button id="playButton" >Play</button></Link>
      </div>          
    </>
  );
}

function NewGame() {  
  return (
    <>
      <Score />
      <div className="Player" style={{backgroundImage:"#"}}></div>          
    </>
  );
}

function Result() {
  
}

function Stats() {

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
          <NewGame />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  )  
}

ReactDOM.render(<App />, document.getElementById("root"));


export default App;
