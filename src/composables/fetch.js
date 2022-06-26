import { ref, unref } from 'vue';
//unref permet de vérifier si c'est un ref ou computed parce que .value ça ne marche qu'avec computed ou ref
//méthode qui regarde si ça doit prendre .value ou non et donc juste url

export function useFetch(url, fetchOnUse = true) {
  const data = ref(null);

  async function fetchJson() {
    const res = await fetch(unref(url), {
      credentials: 'include'
    });
    const json = await res.json();
    data.value = json;
  }

  if (fetchOnUse) fetchJson();
//donne en sortie une donnée réactive et une méthode qui permet d'envoyer au backend
  return { data, fetchJson };
}