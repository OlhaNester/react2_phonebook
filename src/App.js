import { Component } from "react";
import "./App.css";
import Form from './components/Form';

class App extends Component {
  state = {
    contacts: [],
    
  }

  formHandleSubmit = (data) => {
    console.log(data);
  }
 
  
 

  render() {
    return <div className="App">
      <Form onSubmit={ this.formHandleSubmit}/>
      
    </div>;
  }
}

export default App;
