import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TranslateBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 'yes',
    };

    this.handleTranslate = this.handleTranslate.bind(this);
  }

  handleTranslate(e) {
    console.log(this);
    e.preventDefault();
    const inputValue = document.getElementById('input').value;

    this.setState({
      output: inputValue,
    })
  }

  render() {
    return (
      <div>
      <h1>Hello, {this.props.name}</h1>
      <form>
        <input id='input' type="text" name="inputTranslate" placeholder="Enter Word Here"></input>
        <p id='output'>{this.state.output}</p>
        <input type="submit" value="Submit" onClick={this.handleTranslate}></input>
      </form>
      </div>
    )
  }
}

ReactDOM.render(
  <TranslateBox name="kevin" />,
    document.getElementById('root')
)
