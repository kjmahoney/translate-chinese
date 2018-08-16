import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './switch.css';
import { translate } from './translate';
import { Output }  from './output';
import { Switch }  from './switch';
import pinyin from 'pinyin';

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
    this.handleTranslate = this.handleTranslate.bind(this);
    this.switchLanguages = this.switchLanguages.bind(this);
  }

  handleTranslate(e) {
    e.preventDefault();
    //timeout so function doesnt fire on every key stroke
    clearTimeout(this.timeout);

    this.timeout = setTimeout( () => {
      let inputValue = document.getElementById('input').value;

      let self = this;
      translate(inputValue, this.state.inputLanguage).then((response) => {
        return response.json().then((json) => {

          let outputValue = json.text[0]

          let pinyinValue =  pinyin(outputValue);

          if (this.state.inputLanguage == 'chinese') {
            pinyinValue =  pinyin(inputValue);
          }

          self.setState({
            output: outputValue,
            pinyin: pinyinValue,
          })
        });
      });
    }, 1000)
  }

  switchLanguages() {
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
        <h1 className="c-translate__hed">Translate</h1>
        <Switch inputLanguage={this.state.inputLanguage} outputLanguage={this.state.outputLanguage} switchLanguages={this.switchLanguages} />
        <form className="c-translate__form">
          <input className="c-translate__input c-translate__form-item" id='input' type="text" name="inputTranslate" placeholder="Type your word here!" onChange={this.handleTranslate}></input>
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
