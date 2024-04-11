const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('nav .contact');
const give = document.querySelector('.give');
const sermon = document.querySelector('.sermon');
const library = document.querySelector('.library');
const active = document.querySelector('.active2');
const teach = document.querySelector('.teach');
const pastor = document.querySelector('.pastor');
const gospel = document.querySelector('.gospel');
const steps = document.querySelector('.steps');
const pathName =
  document.location.pathname.split('/').pop() ||
  document.location.pathname.split('/tsc2/').pop();
console.log(pathName);
if (pathName == `about.html`) {
  home.classList.remove('active');
  about.classList.add('active');
}
if (pathName == `i'm-new.html`) {
  home.classList.remove('active');
  about.classList.add('active');
}
if (pathName == `nextstep.html`) {
  home.classList.remove('active');
  about.classList.add('active');
  steps.classList.add('active2');
  active.classList.remove('active2');
}
if (pathName == `what%20we%20teach.html`) {
  home.classList.remove('active');
  about.classList.add('active');
  teach.classList.add('active2');
  active.classList.remove('active2');
}
if (pathName == `the%20gospel.html`) {
  home.classList.remove('active');
  about.classList.add('active');
  gospel.classList.add('active2');
  active.classList.remove('active2');
}
if (pathName == `our%20pastor.html`) {
  home.classList.remove('active');
  about.classList.add('active');
  pastor.classList.add('active2');
  active.classList.remove('active2');
}
if (pathName == `contact.html`) {
  home.classList.remove('active');
  contact.classList.add('active');
}
if (pathName == `sermon.html`) {
  home.classList.remove('active');
  sermon.classList.add('active');
}
if (pathName == `give.html`) {
  home.classList.remove('active');
  give.classList.add('active');
}
if (pathName == `library.html`) {
  home.classList.remove('active');
  library.classList.add('active');
}
