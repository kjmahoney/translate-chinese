import { MY_KEY } from './config';
import pinyin from 'pinyin';

export const handleTranslate = (self, inputValue) => {
  translateFetch(inputValue, self.state.inputLanguage).then((response) => {
    return response.json().then((json) => {
      let outputValue = {};
      if (json.text) {
        outputValue = json.text[0]
      }
      let pinyinValue =  pinyin(outputValue);

      if (self.state.inputLanguage === 'chinese') {
        pinyinValue =  pinyin(inputValue);
      }

      self.setState({
        output: outputValue,
        pinyin: pinyinValue,
      })
    });
  });
}

const translateFetch = (inputValue, inputLanguage) => {

  let languageUrl = '&lang=en-zh';
  if (inputLanguage === 'chinese') {
    languageUrl = '&lang=zh-en';
  }

  let APIUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trns'
    + MY_KEY
    +'&text='
    +inputValue
    +languageUrl

  let request = new Request(APIUrl);

  return fetch(request);
}
