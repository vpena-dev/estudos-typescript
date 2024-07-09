//  Comentários utilizando a extensão Better Comments para melhorar a legibilidade
//  das descrições dos exercícios.

//? Exercício 1 - Correção de função com TS 1:
//
//? • Corrija erros da função:

// function normalizarTexto(texto) {
//     return texto.trims().toLowercase()
// }

//* RESOLUÇÃO
/*
function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase()
}

console.log(normalizarTexto('  DeSigN'))
*/

//? Exercício 2 - Correção de função com TS 2:
//

//? • Utilize o seguinte codigo no body do index.html:

/*
    <h1>Bônus de 100 - 20% no total:</h1>
    <label>Total</label>
    <input type="number" />
    <p></p>
*/

//? • Conserte as seguintes funções com TypeScript

// const input = document.querySelector('input');

// const total = localStorage.getItem('total');
// input.value = total;
// calcularGanho(input.value);

// function calcularGanho(value) {
//   const p = document.querySelector('p');
//   p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
// }

// function totalMudou() {
//   const value = Number(input.value);
//   localStorage.setItem('total', value);
//   calcularGanho(value);
// }

// input.addEventListener('keyup', totalMudou);

//* RESOLUÇÃO

/*
const input = document.querySelector('input');

const total = localStorage.getItem('total');
if (input && total) {
  input.addEventListener('keyup', totalMudou);
  input.value = total;
  calcularGanho(Number(input.value));
}

function totalMudou() {
  if (input) {
    localStorage.setItem('total', input.value);
    calcularGanho(Number(input.value));
  }
}

function calcularGanho(value: number) {
  const p = document.querySelector('p');
  if (p) p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
*/

//? Exercício 3 - Union Types:
//

//? • Crie uma função chamada toNumber
//? • A função pode receber number | string
//? • Se a função receber um número, retorne um número
//? • Se a função receber uma string, retorne um número
//? • Se ela receber algo diferente, retorne um erro.
//?     (throw "value deve ser um número ou uma string")

//* RESOLUÇÃO

/*
function toNumber(value: number | string) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value);
  } else {
    throw 'value deve ser um number | string';
  }
}
*/

//? Exercício 4 - Types e Interfaces:
//

//? • Defina a interface da API: https://api.origamid.dev/json/notebook.json
//?   e mostre alguns dados na tela.

//* RESOLUÇÃO

/*
async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Data {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

fetchProduct();

function showProduct(data: Data) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Montador: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}
*/

//? Exercício 5 - Arrays
//

//? • Defina a interface da API: https://api.origamid.dev/json/cursos.json
//?   e mostre alguns dados na tela
//
//? • Existem apenas dois níveis de cursos, Iniciante (iniciante)
//?   e Avançado (avancado). Se for para iniciante pinte o título de azul,
//?   para avançado pinte de vermelho.

//* RESOLUÇÃO

/*
async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: 'iniciante' | 'avancado';
}

fetchCursos();

function mostrarCursos(cursos: Array<Curso>) {
  cursos.forEach((curso: Curso) => {
    document.body.innerHTML += `
      <div>
        <h2 style="color: ${curso.nivel === 'iniciante' ? 'blue' : 'red'}">${
      curso.nome
    }</h2>
        <p>Carga horária: ${curso.horas}</p>
        <p>Quantidade de aulas: ${curso.aulas}</p>
        <p>Gratuito? ${curso.gratuito ? 'Sim' : 'Não'}</p>
        <p>Tags: ${curso.tags.join(', ')}
      </div>
        `;
  });
}
*/

//? Exercício 6 - Instanceof
//
//? 1 - Selecione o link utilizando o método getElementById.
//? 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.

//* RESOLUÇÃO

/*
const a = document.getElementById('origamid');

if (a instanceof HTMLAnchorElement) {
  console.log(`Antes ${a.href}`);
  a.href = a.href.replace('http://', 'https://');
  console.log(`Depois ${a.href}`);
}
*/

//? Exercicio 7 - Interfaces do DOM
//
//? 1 - Selecione os elementos com a classe link.
//? 2 - Crie uma função que deve ser executada para cada elemento.
//? 3 - Modificar através da função o estilo da color e border.

/* OBS: Coloque no seu html:

<a class="link" href="/">Home</a>
<a class="link" href="/produtos">Produtos</a>
<button class="link">Login</button>
*/

//* RESOLUÇÃO

/*
const links = document.querySelectorAll('.link');

function mudarCorEBorda(element: HTMLElement) {
  element.style.color = 'red';
  element.style.border = '2px solid yellow';
}

links.forEach((link) => {
  console.dir(link);
  if (link instanceof HTMLElement) {
    mudarCorEBorda(link);
  }
});
*/

//? Exercício 8 - Eventos e Callbacks
//
/* OBS: Coloque no seu html:
<header id="header">
  <a id="logo" href="">Logo</a>
  <nav id="nav">
    <button
      aria-label="Abrir Menu"
      aria-expanded="false"
      aria-haspopup="true"
      aria-controls="menu"
      id="btn-mobile"
    >
      Menu
      <span id="hamburger"></span>
    </button>
    <ul id="menu" role="menu">
      <li><a href="/">Sobre</a></li>
      <li><a href="/">Produtos</a></li>
      <li><a href="/">Portfólio</a></li>
      <li><a href="/">Contato</a></li>
    </ul>
  </nav>
</header>
*/

/* OBS: Coloque no seu style.css
body,
ul {
  margin: 0px;
  padding: 0px;
}

a {
  color: black;
  text-decoration: none;
  font-family: sans-serif;
}

a:hover {
  background: rgba(0, 0, 0, 0.05);
}

#logo {
  font-size: 1.5rem;
  font-weight: bold;
}

#header {
  box-sizing: border-box;
  height: 70px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e7e7e7;
}

#menu {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}

#menu a {
  display: block;
  padding: 0.5rem;
}

#btn-mobile {
  display: none;
}

@media (max-width: 600px) {
  #menu {
    display: block;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background: #e7e7e7;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
  #nav.active #menu {
    height: calc(100vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }
  #menu a {
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  }
  #btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
  #hamburger {
    border-top: 2px solid;
    width: 20px;
  }
  #hamburger::after,
  #hamburger::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
  #nav.active #hamburger {
    border-top-color: transparent;
  }
  #nav.active #hamburger::before {
    transform: rotate(135deg);
  }
  #nav.active #hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}


*/

//? Estado dos elementos

//? menu inativo:
//? class="" em nav
//? aria-expanded="false" em button
//? aria-label="Abrir Menu" em button

//? menu ativo:
//? class="active" em nav
//? aria-expanded="true" em button
//? aria-label="Fechar Menu" em button

//* RESOLUÇÃO

/*
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event: PointerEvent) {
  const nav = document.getElementById('nav');
  const button = event.currentTarget;

  nav?.classList.toggle('active');

  if (button instanceof HTMLElement && nav) {
    if (nav.classList.contains('active')) {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir Menu');
    } else {
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Fechar Menu');
    }
  }
}

btnMobile?.addEventListener('pointerdown', toggleMenu);
*/

//? Exercício 9 - Function Overload
//
//? Crie uma função que arredonda um valor passado para cima.
//? A função pode receber string ou number.
//? A função deve retornar o mesmo tipo que ela receber.

//* RESOLUÇÃO

/*
function arredondarParaCima(valor: string): string;
function arredondarParaCima(valor: number): number;
function arredondarParaCima(valor: string | number): string | number {
  if (typeof valor === 'string') {
    return Math.ceil(Number(valor)).toString();
  } else {
    return Math.ceil(valor);
  }
}

console.log(arredondarParaCima(99.8));
*/

//? Exercício 10 - User Type Guard
//
//? 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
//? 2 - Defina a interface da API
//? 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
//? 4 - Use Type Guards para garantir a Type Safety do código
//? 5 - Preencha os dados da API na tela.

//* RESOLUÇÃO

/*
async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}

interface Curso {
  nome: string;
  horas: number;
  tags: Array<string>;
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'horas' in value &&
    'tags' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach((curso) => {
      document.body.innerHTML += `
          <h2>${curso.nome}</h2>
          <p>Carga horária: ${curso.horas}h</p>
          <p>Tags: ${curso.tags.join(', ')}</p>
        `;
    });
  }
}

fetchCursos();
*/

//? Exercício 11 - Reforçando conhecimentos até aqui
//
//? 1 - Crie uma interface UserData para o formulário abaixo
//? 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
//? 3 - Adicione um evento de keyup ao formulário
//? 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
//? 5 - Salve UserData no localStorage
//? 6 - Crie uma User Type Guard, para verificar se o valor de localStorage
//?     é compatível com UserData
//? 7 - Ao refresh da página, preencha os valores de localStorage
//?     (caso seja UserData) no formulário e em window.UserData

//* RESOLUÇÃO

/*
interface UserData {
  nome?: string;
  email?: string;
  cpf?: number;
}

interface Window {
  UserData: any;
}

window.UserData = {};

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === 'object' &&
    ('nome' in obj || 'email' in obj || 'cpf' in obj)
  ) {
    return true;
  } else {
    return false;
  }
}

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function loadLocalStorage() {
  const localUserData = localStorage.getItem('UserData');
  if (localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);
    if (isUserData(UserData)) {
      Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.UserData[key] = value;
        }
      });
    }
  }
}

loadLocalStorage();

function typedForm({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    window.localStorage.setItem('UserData', JSON.stringify(window.UserData));
  }
}

const form = document.querySelector<HTMLFormElement>('#form');
form?.addEventListener('keyup', typedForm);
*/

//? Exercício 12 - Truples
//
//? 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
//? 2 - Defina o tipo/interface de cada venda (tuple)
//? 3 - Some o total das vendas e mostre na tela

//* RESOLUÇÃO

/*
async function fetchVendas() {
  const response = await fetch('https://api.origamid.dev/json/vendas.json');
  const json = await response.json();
  mostrarVendas(json);
}

type Venda = [string, number, Date, ProductDetails];

interface ProductDetails {
  marca: string;
  cor: string;
}

function mostrarVendas(vendas: Venda[]) {
  let total1 = 0;
  for (let i = 0; i < vendas.length; i++) {
    total1 += vendas[i][1];
  }

  const total2 = vendas.reduce((total, venda) => {
    return total + venda[1];
  }, 0);

  document.body.innerHTML += `
    <p>TOTAL 1: R$ ${total1}</p>
  `;

  document.body.innerHTML += `
    <p>TOTAL 2: R$ ${total2}</p>
  `;
}

fetchVendas();
*/

//* CHECK INTERFACE GENERICO

/*
function checkInterface<Interface>(
  obj: unknown,
  ...keys: Array<keyof Interface>
): obj is Interface {
  if (
    obj &&
    typeof obj === 'object' &&
    keys.filter((key) => key in obj).length === keys.length
  ) {
    return true;
  } else {
    return false;
  }
}
*/
