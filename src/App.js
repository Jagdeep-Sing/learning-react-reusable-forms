import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './Components/InputField'

function App() {
  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData(prev => ({...prev, [name]: value}))
  }
  console.log('t', data)
  return (
    <div className="App">
      <form>
        <InputField
          name ="username"
          label = "Username*:"
          onChange = {handleChange}
        />

        <InputField
          name ="password"
          label = "Password*:"
          onChange = {handleChange}
        />
      </form>
    </div>
  );
}

export default App;
