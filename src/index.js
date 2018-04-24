import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { translate } from './translate';
import { Output }  from './output';
import pinyin from 'pinyin';

class TranslateBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      pinyin: '',
      inputLanguage: 'english',
      outputLanguage: 'chinese',
    };
    this.handleTranslate = this.handleTranslate.bind(this);
    this.switchLanguages = this.switchLanguages.bind(this);
  }

  handleTranslate(e) {
    e.preventDefault();

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
    });;
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
        <p>From <span className="c-translate__text--language">{this.state.inputLanguage}</span> to <span className="c-translate__text--language">{this.state.outputLanguage}</span></p>
        <form className="c-translate__form">
          <input className="c-translate__input c-translate__form-item" id='input' type="text" name="inputTranslate" placeholder="Type your word here!"></input>
          <input className="c-translate__btn c-translate__btn--switch c-translate__form-item" type="button" onClick={this.switchLanguages} value="Switch Language"></input>
          <input className="c-translate__btn c-translate__btn--submit c-translate__form-item" type="submit" value="Submit" onClick={this.handleTranslate}></input>
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
