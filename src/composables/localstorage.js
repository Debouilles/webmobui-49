import { ref, watch } from "vue";

export function useLocalstorage(key, defaultVal = null) {

  let data = localStorage.getItem(key);

  // if allready in localstorage, we parse the JSON
  if (data !== null) {
    data = JSON.parse(data);
  // or we set it at the default val and save it in the storage
  } else {
    data = defaultVal;
    localStorage.setItem(key, JSON.stringify(data));
  }

  const value = ref(data);

  // every change of the data will be saved to the storage
  //réécrire dans le localstorage dès qu'il y a un changement
  //le watcheffect ne fonctionne que sur les données réactives
  watch(value, () => {
    localStorage.setItem(key, JSON.stringify(value.value));
  }, {deep: true});
//comme si c'était : { value : value } c'est pareil quand le nom de la propriété de l'objet est identique à sa valeur
  return { value };
}