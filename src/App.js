import React from 'react';
import './App.css';
import InputField from './Components/InputField';
import SelectBox from './Components/SelectBox';
import RadioButtons from './Components/RadioButtons';
function App() {
  const inputRefs = React.useRef(
    [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef()
    ]
  );
  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData(prev => ({...prev, [name]: value}))
  }
console.log(data)
  const submitForm = (e) => {
    e.preventDefault();
    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return false
    } else {
      alert (JSON.stringify(data))
      setData("")
    }
  }
  return (
    <div className="App">
      <form onSubmit={submitForm} className="form">
        <h1>SIGN UP</h1>
        <InputField
          ref={inputRefs.current[0]}
          name ="username"
          label = "Username*:"
          type="text"
          onChange = {handleChange}
          validation={"required|min:6|max:12"}
        />

        <InputField
          ref={inputRefs.current[1]}
          name ="password"
          label = "Password*:"
          onChange = {handleChange}
          type="password"
          validation={"required|min:8"}
        />

        <SelectBox
        ref={inputRefs.current[2]}
        name="age"
        onChange = {handleChange}
        validation={"required"}
        />

        <RadioButtons 
        ref={inputRefs.current[3]}
        name = "gender"
        label = "Gender"
        onChange = {handleChange}
        validation = {"required"}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default App;
