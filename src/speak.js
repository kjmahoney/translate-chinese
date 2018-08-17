import React from 'react';

export class Speak extends React.Component {
  speak = (props) => {
    let languageCode = 'zh-cn'

    if (this.props.outputLanguage === 'english') {
      languageCode = 'en-us';
    };

    const url = `http://api.voicerss.org/?key=59994372677347c5afdc33cba65ce706&hl=${languageCode}&src=${this.props.output}`;
    const speakWindow = window.open(url, "myWindow", "width=200, height=100");
  }
  render() {
    return <input onClick={this.speak} type='button' value='🔊'></input>;
  }
}
