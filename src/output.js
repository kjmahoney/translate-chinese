import React from 'react';

export const Output = (props) => {
  return(
    <div className="c-translate__container">
      <p className="c-translate__text">{props.outputLanguage}:<span className="c-translate__text c-translate__text--output">{props.output}</span></p>
      <p className="c-translate__text">Pinyin:<span className="c-translate__text c-translate__text--output">{props.pinyin}</span></p>
    </div>
  )
}
