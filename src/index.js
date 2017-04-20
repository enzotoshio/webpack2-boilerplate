import { sayHello } from './module'; 

const element = document.createElement('h1'); 

element.innerHTML = sayHello('World'); 
document.body.appendChild(element);

async function f2() {
  const y = await 20;

  console.log(y);
}

f2();