import {addMessages, getLocaleFromNavigator, init} from 'svelte-i18n';

import en from '../assets/translations/en.json';
import ko from '../assets/translations/ko.json';

addMessages('en', en);
addMessages('ko', ko);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
