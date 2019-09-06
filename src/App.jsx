import React, { Component } from 'react';
import './style/app.scss';
import ReactImage from './assets/img/react.png';
import StuffList from './components/stuffList';

const API = 'http://localhost:8080/api';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch(`${API}/getUsername`)
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        { username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!!</h1> }
        <img src={ReactImage} alt="react" />
        <StuffList />
      </div>
    );
  }
}
