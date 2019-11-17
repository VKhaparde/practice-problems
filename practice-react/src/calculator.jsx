import React from 'react';
import ReactDOM from 'react-dom';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
function toFahrenheit(celsius){
  return (celsius * 9/5) + 32 ;
}

function toCelsius(fahrenheit){
  return (fahrenheit - 32)* 5/9;
}
function tryConvert(temp , convert){
  const input = parseFloat(temp);
  if (Number.isNaN(input)){
    return '';
  }
   const output = convert(temp);
   const rounded = Math.round(output * 1000)/1000;
   return rounded.toString();

}


function BoilingVerdict(props){
  if (props.celsius >= 100)
  {
  return(
    <p>The water would boil.</p>
  );
  }
  else {
    return (
      <p>The water would not boil.</p>
    );
  }
}

class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    console.log('event.target.value',event.target.value);
    this.props.onTemperatureChange(event.target.value);
  }

  render(){
    return(
      <fieldset>
        <legend>Enter any temperature in {scaleNames[this.props.scale]}:</legend>
        <input value = {this.props.temperature}
        onChange = {this.handleChange}/>
      </fieldset>
    );
  }
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'c',
      temperature: ''
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(temp) {
    console.log('temp', temp);
    this.setState({
      scale: "c",
      temperature: temp
    });
  }
  handleFahrenheitChange(temp) {
    console.log('temp', temp);
    this.setState({
      scale: "f",
      temperature: temp
    });
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
export default Calculator;
