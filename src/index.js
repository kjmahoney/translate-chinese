import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './switch.css';
import { handleTranslate } from './translate';
import { Output }  from './output';
import { Switch }  from './switch';

class TranslateBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      pinyin: '',
      inputLanguage: 'english',
      outputLanguage: 'chinese',
      timeout: '',
    };
    this.handleSwitchClick = this.handleSwitchClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    const inputValue = document.getElementById('input').value;
    //timeout so function doesnt fire on every key stroke
    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => {
      handleTranslate(this, inputValue);
    }, 1000)
  }

  handleSwitchClick() {
    this.setState({
      output: '',
      pinyin: '',
      inputLanguage: this.state.outputLanguage,
      outputLanguage: this.state.inputLanguage,
    })
  }

  render() {
    return (
      <div className="c-translate">
        <h1 className="c-translate__hed">🇺🇸 Translate 🇨🇳</h1>
        <Switch inputLanguage={this.state.inputLanguage} outputLanguage={this.state.outputLanguage} switchFunction={this.handleSwitchClick} />

        <form className="c-translate__form">
          <input className="c-translate__input c-translate__form-item" id='input' type="text" name="inputTranslate" placeholder="Type your word here!" onChange={this.handleInputChange}></input>
        </form>
        <Output pinyin={this.state.pinyin} output={this.state.output} outputLanguage={this.state.outputLanguage} />
      </div>
    )
  }
}

ReactDOM.render(
  <TranslateBox />,
    document.getElementById('root')
)
