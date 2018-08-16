import React from 'react';

export const Switch = (props, switchLanguages) => {

  return(
    <div className="c-switch">
      <p className="o-text">From <span className="c-translate__text--language">{props.inputLanguage}</span> to <span className="c-translate__text--language">{props.outputLanguage}</span></p>
      <input className="c-switch__btn" type="button" onClick={props.switchLanguages} value="⇄"></input>
    </div>
  )
}
