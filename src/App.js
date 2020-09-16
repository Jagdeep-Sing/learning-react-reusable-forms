import React from 'react';
import './App.css';
import InputField from './Components/InputField';
import SelectBox from './Components/SelectBox';
import RadioButtons from './Components/RadioButtons';
import Calender from './Components/Calender';
import TextArea from './Components/TextArea';
import Checkbox from './Components/checkbox'
import ReactJson from 'react-json-view'

function App() {
  const inputRefs = React.useRef(
    [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef()
    ]
  );
  let [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData(prev => ({...prev, [name]: value}))
  }
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
      //setData("")
    }
  }

  const resetForm = () => {
    alert('Not able to reset')
  }

  return (
    <div className="App">
      <form onSubmit={submitForm} className="form">
        <h1>SIGN UP</h1>
        <InputField
          ref={inputRefs.current[0]}
          name ="username"
          label = "Username:"
          type="text"
          onChange = {handleChange}
          validation={"required|min:6|max:12"}
        />

        <InputField
          ref={inputRefs.current[1]}
          name ="email"
          label = "Email:"
          type="text"
          onChange = {handleChange}
          validation={"required|email"}
        />

        <InputField
          ref={inputRefs.current[2]}
          name ="luckyNumber"
          label = "Your lucky number:"
          type="number"
          onChange = {handleChange}
          validation={"required|positive"}
        />

        <InputField
          ref={inputRefs.current[3]}
          name ="password"
          label = "Password:"
          onChange = {handleChange}
          type="password"
          validation={"required|min:8"}
        />

        <SelectBox
        ref={inputRefs.current[4]}
        name="age"
        label="Age"
        onChange = {handleChange}
        validation={"required"}
        />

        <RadioButtons 
        ref={inputRefs.current[5]}
        name = "gender"
        label = "Gender"
        onChange = {handleChange}
        validation = {"required"}
        />

        <Calender
          ref = {inputRefs.current[6]}
          name="dob"
          onChange = {handleChange}
          validation = {"required"}
        />

        <TextArea
          ref= {inputRefs.current[7]}
          name="about"
          label="Something about you"
          onChange = {handleChange}
          validation={"required"}
          multiline="true"
          variant="outlined"
          rows="3"
          />

          <Checkbox
          ref= {inputRefs.current[8]}
          name="agreed"
          label="Agree"
          onChange = {handleChange}
          validation={"required"}
          />
        <button type="submit">SignUp</button>
      </form>
      <div className="form">
      <ReactJson src={data} />
      <button onClick={resetForm}>RESET</button>
      </div>
    </div>
  );
}

export default App;
