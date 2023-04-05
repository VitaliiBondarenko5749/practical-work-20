import React from 'react';
import ReactDOM from 'react-dom/client';

class Task1 extends React.Component{
  constructor(){
    super();
    this.state = {value: ''};
  }

  changeValue(event){
    this.setState({value: event.target.value});
  }

  render(){
    return <div>
      <p>Task 1</p>
      <p>{this.state.value}</p>
      <textarea onChange={this.changeValue.bind(this)}/>
    </div>
  }
}

class Task2 extends React.Component{
  constructor(){
    super();
    this.state = {checked: false};
  }

  handleCheckboxChange(event){
    this.setState({checked: !this.state.checked});
  }

  render(){
    return <div>
      <p>Task 2</p>
      <p>{this.state.checked ? 'checked' : 'unchecked'}</p>
      <input type={'checkbox'} checked={this.state.checked} onChange={this.handleCheckboxChange.bind(this)} />
    </div>
  }
}

class Task3 extends React.Component{
  constructor(){
    super();
    this.state = {checked: false};
  }

  handleCheckboxChange(event){
    this.setState({checked: !this.state.checked});
  }

  render(){
    return <div>
      <p>Task 3</p>
      <p>{this.state.checked ? 'Hello, World!' : ''}</p>
      <input type={'checkbox'} checked={this.state.checked} onChange={this.handleCheckboxChange.bind(this)} />
    </div>
  }
}

class Task4 extends React.Component{
  constructor(){
    super();
    this.state = {city: ''};
  }

  handleChange(event){
    this.setState({city: event.target.value});
  }

  render(){
    return <div>
      <p>Task 4</p>
      <p>{this.state.city}</p>
      <select onChange = {this.handleChange.bind(this)}>
        <option>Київ</option>
        <option>Чернівці</option>
        <option>Вінниця</option>
        <option>Тернопіль</option>
      </select>
    </div>
  }
}

class Task5 extends React.Component{
  constructor(){
    super();
    this.state = {value: ''}
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return <div>
      <p>Task 5</p>
      <p>{this.state.value}</p>
      <input type={'radio'} value="1" checked={this.state.value==="1"} onChange={this.handleChange.bind(this)}/>
      <input type={'radio'} value="2" checked={this.state.value==="2"} onChange={this.handleChange.bind(this)}/>
      <input type={'radio'} value="3" checked={this.state.value==="3"} onChange={this.handleChange.bind(this)}/>
    </div>
  }
}

class Task6 extends React.Component{
  constructor(){
    super();
    this.state={value: '', texts: []};
  }

  handleChangeValue(event){
    this.setState({value: event.target.value});
  }

  addItem(){
    this.state.texts.push(this.state.value);
    this.setState({texts: this.state.texts});
  }

  render(){
    const list = this.state.texts.map((item, index)=>{return <p key={index}>{item}</p>});

    return <div>
      <p>Task 6</p>
      <textarea onChange={this.handleChangeValue.bind(this)}/>
      <div>
      <button onClick={this.addItem.bind(this)}>Add</button>
      </div>
      <div>
        {list}
      </div>
    </div>
  }
}

class Task7 extends React.Component{
  constructor(){
    super();
    this.state={color: ''};
  }

  handleChangeColor(event){
    this.setState({color: event.target.value});
  }

  render(){
    return <div>
      <p>Task 7</p>
      <p style={{color: this.state.color}}>This text has {this.state.color} color!</p>

      <select onChange={this.handleChangeColor.bind(this)}>
        <option>green</option>
        <option>yellow</option>
        <option>red</option>
        <option>blue</option>
      </select>
    </div>
  }
}

class Task8 extends React.Component{
  constructor(){
    super();
    this.state={checked: false};
  }

  handleChange(){
    this.setState({checked: !this.state.checked});
  }

  render(){
    return <div>
      <p>Task 8</p>
      <p>{this.state.checked ? 'позначено' : 'не позначено'}</p>
      <input type={'checkbox'} checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
    </div>
  }
}

class Task9 extends React.Component{
  constructor(){
    super();
    this.state={value: ''};
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return <div>
      <p>Task 9</p>
      <p>{this.state.value}</p>
      <select onChange={this.handleChange.bind(this)}>
        <option>Page 1</option>
        <option>Page 2</option>
        <option>Page 3</option>
      </select>
    </div>
  }
}

class Task10 extends React.Component{
  constructor(){
    super();
    this.state={text: '', items: []};
  }

  handleChangeText(event){
    this.setState({text: event.target.value});
  }

  addItem(){
    this.state.items.push(this.state.text);
    this.setState({items: this.state.items});
  }

  render(){
    const list = this.state.items.map((item, index)=>{return <option key={index} value={index}>{item}</option>})

    return <div>
      <p>Task 10</p>
      <input type={'text'} onChange={this.handleChangeText.bind(this)}/>
      <div>
      <button onClick={this.addItem.bind(this)}>Add</button>
      </div>
      <div>
      <select>
        {list}
      </select>
      </div>
    </div>
  }
}

class Task11 extends React.Component{
  constructor(){
    super();
    this.state={isDisabled: true};
  }

  handleChange(){
    this.setState({isDisabled: !this.state.isDisabled});
  }

  render(){
    return <div>
      <p>Task 11</p>
      <input type={'checkbox'} checked={this.state.isDisabled} onChange={this.handleChange.bind(this)}/>
      <input type={'text'} disabled={this.state.isDisabled}/>
    </div>
  }
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Task12 extends React.Component {
  state = {
    date: new Date(),
  };

  handleDateChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const newDate = new Date(prevState.date);
      if (name === 'day') {
        newDate.setDate(value);
      } else if (name === 'month') {
        newDate.setMonth(value - 1);
      } else if (name === 'year') {
        newDate.setFullYear(value);
      }
      return { date: newDate };
    });
  };

  getDayOfWeek = () => {
    const dayIndex = this.state.date.getDay();
    return daysOfWeek[dayIndex];
  };

  render() {
    return (
      <div>
        <select name="day" value={this.state.date.getDate()} onChange={this.handleDateChange}>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select name="month" value={this.state.date.getMonth() + 1} onChange={this.handleDateChange}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {new Date(2000, month - 1, 1).toLocaleString('en-US', { month: 'long' })}
            </option>
          ))}
        </select>
        <select name="year" value={this.state.date.getFullYear()} onChange={this.handleDateChange}>
          {Array.from({ length: 10 }, (_, i) => i + new Date().getFullYear()).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <p>The selected day of the week is: {this.getDayOfWeek()}</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task1/>
    <Task2/>
    <Task3/>
    <Task4/>
    <Task5/>
    <Task6/>
    <Task7/>
    <Task8/>
    <Task9/>
    <Task10/>
    <Task11/>
    <Task12/>
  </React.StrictMode>
);