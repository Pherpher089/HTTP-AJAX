import React from 'react';
import axios from 'axios';
import CardDisplay from './components/FriendCard/CardDisplay';
import AddFriend from './components/AddFriend/AddFriend' 
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      friendData:{},
      hasData: false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({friendData: response.data}))
      .then(()=> this.setState({hasData: true}))
      .catch(err => console.log(err));
    
  }

  componentDidUpdate(){
    //console.log(this.state.friendData)
  }

  render(){
    if(this.state.hasData)
    {
      return(
        <div>
          <CardDisplay friendData={this.state.friendData}/>
          <AddFriend />
        </div>
        
      )
    }
    else
    {
      return(<div>Loading Data...</div>)
    }
  }
}

export default App;
