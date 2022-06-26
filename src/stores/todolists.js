import {useLocalstorage} from '../composables/localstorage.js';

export const { value: todolists } = useLocalstorage('todolists', [{
  label: `À faire`,
  tags: 'Importance'
}]);