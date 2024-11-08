const btnMenu = document.querySelector('.menu button');
const btnRecipes = document.querySelector('.recipes button');
const btnFind = document.querySelector('.find button');
const aRecipes = document.querySelector('.recipes a');
const divRecipes = document.querySelector('.recipes');
const main = document.querySelector('.main');

const handleMenu = () => {
  const movie = document.createElement('lite-youtube');
  const buttonX = document.createElement('button');
  const element = main.children[2];

  buttonX.textContent = 'x';

  movie.setAttribute('videoId', 'Uq1cblLiodk');
  movie.setAttribute('params', 'autoplay=0&controls=1');
  movie.classList.add('video-YouTube');
  divRecipes.style.height = '170px';
  aRecipes.appendChild(movie);

  buttonX.classList.add('buttonX');
  main.insertBefore(buttonX, element);

  if (divRecipes.style.height === '170px') {
    aRecipes.removeEventListener('click', handleMenu);
  }

  buttonX.addEventListener('click', () => {
    buttonX.remove();
    movie.remove();
    divRecipes.style.height = '64px';
    aRecipes.addEventListener('click', handleMenu);
  });
};

aRecipes.addEventListener('click', handleMenu);

// swipes

const container = document.querySelector('.container');

const sectionMenu = document.querySelector('.section__Menu');
const btnCloseMenu = document.querySelector('.close__Icon__Menu');

const sectionRecipes = document.querySelector('.section__Recipes');
const btnCloseRecipes = document.querySelector('.close__Icon__Recipes');

const sectionFindUs = document.querySelector('.section__FindUs');
const btnCloseFindUs = document.querySelector('.close__Icon__FindUs');
// Menu
btnMenu.addEventListener('click', () => {
  sectionMenu.style.display = 'flex';
  container.classList.add('active');
});

btnCloseMenu.addEventListener('click', () => {
  sectionMenu.style.display = 'none';
  container.classList.remove('active');
});
// End Menu

// Recipes
btnRecipes.addEventListener('click', () => {
  sectionRecipes.style.display = 'flex';
  container.classList.add('active');
});

btnCloseRecipes.addEventListener('click', () => {
  sectionRecipes.style.display = 'none';
  container.classList.remove('active');
});
// End Recipes

// Find
btnFind.addEventListener('click', () => {
  sectionFindUs.style.display = 'flex';
  container.classList.add('active');
});

btnCloseFindUs.addEventListener('click', () => {
  sectionFindUs.style.display = 'none';
  container.classList.remove('active');
});
// End Find

const updateWidth = () => {
  const widthUlElementMenu = document.querySelector('.redes__Menu ul');
  const widthUlElementRecipes = document.querySelector('.redes__Recipes ul');
  const widthUlElementFindUs = document.querySelector('.redes__FindUs ul');
  const viewportWidth = window.innerWidth;
  const newWidth = viewportWidth - 56;
  widthUlElementMenu.style.width = `${newWidth}px`;
  widthUlElementRecipes.style.width = `${newWidth}px`;
  widthUlElementFindUs.style.width = `${newWidth}px`;
};

window.addEventListener('resize', updateWidth);
updateWidth();
