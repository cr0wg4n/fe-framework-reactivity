// Copy all this code to console in any website and see the result
const box = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
div.innerText = 'Hola mundo';
div.style = 'background: #000; color: white; font-size: 100px; height: 140px; z-index: 9999; position: absolute;'
box.prepend(div);