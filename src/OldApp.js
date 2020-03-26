import React from 'react';
//import logo from './logo.svg';
import './layout.css';

class App extends React.Component
{
  state =
  {
    userInformation: [],
    userInfo:
    {
      email: '',
      password: ''
    }
  }

  componentDidMount()
  {
    this.getProducts();
  }

  getProducts = _ =>
  {
    fetch('http://localhost:4000/HospitalManagementSystem')
    .then(response => response.json())
    .then(response => this.setState({userInformation: response.data}))
    .catch(err => console.error(err))
  }


  renderProduct = ({email, userType}) => <div key={email}>{userType}</div>
  render()
  {
    const { userInformation, userInfo } = this.state;

    return (
      <div className="App">
        {userInformation.map(this.renderProduct)}
        </div>
      );
  }
}

export default App;
