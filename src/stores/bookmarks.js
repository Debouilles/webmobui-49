import {useLocalstorage} from '../composables/localstorage.js';

export const { value: bookmarks } = useLocalstorage('bookmarks', [{
  label: `Favoris d'exemple`,
  url: 'https://example.com'
}]);