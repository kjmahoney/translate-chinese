import React from 'react';

import './css/switch.css';

export class Switch extends React.Component {
  render() {
    return(
      <div className="c-switch">
        <p className="o-text">From <span className="c-translate__text--language">{this.props.inputLanguage}</span> to <span className="c-translate__text--language">{this.props.outputLanguage}</span></p>
        <input className="c-switch__btn" type="button" onClick={this.props.switchFunction} value="⇄"></input>
      </div>
    )
  }
}
