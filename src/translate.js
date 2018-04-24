import { MY_KEY } from './config';

export const translate = (inputValue, inputLanguage) => {

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
