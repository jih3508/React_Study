import './App.css';
import PhoneForm from './components/PhoneForm';
import { Component } from 'react';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{

  id = 0;

  state = {
    information: [],
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat(
        Object.assign({}, data, {id: this.id++})
      )
    })
    console.log(data);
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(info => {
        if(info.id === id){
          return {
            id,
            ...data,
          };
        }
        return info;
      })
    });

  }

  render(){
    return (
      <div>
        <PhoneForm  onCreate = {this.handleCreate}/>
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate = {this.handleUpdate}
        />
      </div>
    );
 }
}

export default App;