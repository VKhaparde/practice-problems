import React from 'react';
import ReactDOM from 'react-dom';

class ExampleForm extends React.Component{
constructor(props){
  super(props);
  this.state = {
    name : '',
    password : '',
    text: 'Please write an essay about your favorite DOM element.',
    selectValue : '',
    isChecked : false
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleReset = this.handleReset.bind(this);
}

handleSubmit(event){
  event.preventDefault();
  console.log(event.target);
  alert("Form Submitted");
}
handleChange(event){
  console.log(event);
  if(event.target.name === 'name'){
    this.setState(
      {
        name : event.target.value
    });
  }
  else if (event.target.name === 'password') {
    this.setState(
      {
        password : event.target.value
      });
  }
  else if (event.target.name === 'textarea') {
    this.setState(
      {
        text : event.target.value
      });
  }
  else if (event.target.name === 'select') {
    this.setState(
      {
        selectValue: event.target.value
      });
  }
  else if(event.target.name ==='checkbox'){
    this.setState(
      {
        isChecked: !this.state.isChecked
      });
  }

}
handleReset(){
  this.setState(
    {
      name: '',
      password: '',
      text: '',
      selectValue: '',
      isChecked: ''
    });
}
render(){
  const name = this.state.name;
  const password = this.state.password;
  const text = this.state.text;
  const option = this.state.selectValue;
  const check = this.state.isChecked;
  return (
    <div className="container">
      <form action="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" name="name" value={name}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="password" name="password" value={password}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="">Description:
        <textarea name="textarea" id="txtarea" cols="30" rows="10"
              value={text} onChange={this.handleChange}></textarea>
              </label>
        </div>
        <div>
          <label htmlFor="">Pick your favorite Fruit</label>
          <select name="select" id="select" value={option}
            onChange={this.handleChange}>
            <option value="Coconut">Coconut</option>
            <option value="Orange">Orange</option>
            <option value="Mango">Mango</option>
            <option value="Apple">Apple</option>
            <option value="Persimmon">Persimmon</option>
          </select>
        </div>
        <div>
          <div>
            <label htmlFor="">Are you sure you want to submit?</label>
            <input type="checkbox" name="checkbox" id=""
            value ={check} onChange={this.handleChange} />
          </div>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" onClick={this.handleReset} />

        </div>
      </form>
    </div>
  );
}
}
export default  ExampleForm;
