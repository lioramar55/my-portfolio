'usestrict';

var gProjs = [
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    title: 'Minesweeper Game',
    desc: 'A minesweepr game with extra features that i built using vanilla JS',
    imgUrl: 'minesweeper.PNG',
    publishedAt: 1448693940000,
    labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 'my-pacman',
    name: 'Pacman',
    title: 'Pacman Game',
    desc: 'A pacman game using vanilla JS',
    imgUrl: 'pacman.PNG',
    publishedAt: 1448693940000,
    labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 'todo-app',
    name: 'To-do App',
    title: 'A Simple To-do App',
    desc: 'A simple to-do app game using vanilla JS',
    imgUrl: 'todo-app.PNG',
    publishedAt: 1448693940000,
    labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 'books-crud',
    name: 'Book Shop CRUDL',
    title: 'Simple Book Shop',
    desc: 'A book shop implementing CRUD,  using vanilla JS',
    imgUrl: 'books-crud.PNG',
    publishedAt: 1448693940000,
    labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 'login-dashboard',
    name: 'Login-Dashboard',
    title: 'A simple login dashboard',
    desc: 'A simple login dashboard using vanilla JS.\n When trying it try loging into a user with (username: puki, password:1234) and then with username:admin , password: 1234',
    imgUrl: 'login-dashboard.PNG',
    publishedAt: 1448693940000,
    labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 'study-projects/touch-nums/index.html',
    name: 'Touch-Nums',
    title: 'Touch Nums Game',
    desc: 'Try to complete each level to test your reflex speed and measure your time.',
    imgUrl: 'touch-nums.PNG',
    publishedAt: 1448693940000,
    labels: ['Matrixes', 'keyboard events'],
  },
];

function getProjsForDisplay() {
  return gProjs;
}

function getProjByName(name) {
  return gProjs.find((proj) => name === proj.name);
}
