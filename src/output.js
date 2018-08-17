import React from 'react';

import { Speak }  from './speak';

export const Output = (props) => {
  return(
    <div className="c-output">
      <div>
        <div className="c-output__outputs">
          <p className="o-text">{props.outputLanguage}</p>
          <Speak output={props.output} outputLanguage={props.outputLanguage} />
        </div>
        <p className="c-output__text">{props.output}</p>
      </div>
      <div>
        <p className="o-text">Pinyin</p>
        <p className="c-output__text">{props.pinyin}</p>
      </div>
    </div>
  )
}
