import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

const teams = data.teams;

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function App() {
  return (
    <div>
      <Welcome />
      <TeamList />
      <Goodbye />
    </div>
  );
}

function Welcome() {
  return (
    <div className="App-header">
      <header className="Center">
        <h1>Welcome to March Madness</h1>
        <p>
          This site will allow you to see all NCAA Basketball teams, along with
          their mascot name and location.
        </p>
      </header>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h3>{oneTeam.school}</h3>
        <h4>{oneTeam.name}</h4>
        <p>
          {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-list">
      {teams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function Goodbye() {
  return (
    <div>
      <footer>&copy; Mission9_Barlocker | March Madness</footer>
    </div>
  );
}

export default App;
