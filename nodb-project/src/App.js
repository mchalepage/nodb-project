import React, {Component} from 'react';
import Header from './components/Header'
import Stickies from './components/Stickies'
import AddSticky from './components/AddSticky'
import axios from 'axios' 
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      allStickies: [],
    }
    this.makeSticky = this.makeSticky.bind(this)
    this.editSticky = this.editSticky.bind(this)
    this.deleteSticky = this.deleteSticky.bind(this)
  }

  componentDidMount(){
    axios.get('/api/stickies').then(res => {
      this.setState({
        allStickies: res.data
      })
    })
  }

  makeSticky(newSticky){
    axios.post('/api/stickies/sticky', newSticky).then(res => {
      this.setState({
        allStickies: res.data
      })
    })
  }

  editSticky(id, newContents){
    axios.put(`/api/stickies/sticky/${id}`, {newContents}).then(res => {
      this.setState({
        allStickies: res.data
      })
    })
  }

  deleteSticky(id){
    axios.delete(`/api/stickies/sticky/${id}`).then(res => {
      this.setState({
        allStickies: res.data
      })
    })
  }


  render(){
    return (
      <div className="App">
        <Header />
        <AddSticky 
        makeSticky={this.makeSticky}
        />
        <Stickies 
        allStickies={this.state.allStickies}
        editSticky={this.editSticky}
        deleteSticky={this.deleteSticky}
        />
      </div>
    );
  }
}

export default App;
