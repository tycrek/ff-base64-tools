
const Encode = () => document.querySelector('#encode');
const Decode = () => document.querySelector('#decode');

Encode().addEventListener('keyup', (_) => Decode().value = btoa(Encode().value));
Decode().addEventListener('keyup', (_) => Encode().value = atob(Decode().value));
