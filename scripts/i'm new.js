let element = document.querySelector('.answer');
let content1 = document.querySelector('#answer1');
let content2 = document.querySelector('#answer2');
let content3 = document.querySelector('#answer3');
let content4 = document.querySelector('#answer4');
const displayer4 = document.querySelector('#question4');
const displayer3 = document.querySelector('#question3');
const displayer2 = document.querySelector('#question2');
const displayer1 = document.querySelector('#question1');
const questionBoard = document.querySelector('.question-board');
const background = document.querySelector('.header-container');
const form = document.querySelector('form');
const name = document.querySelector('#name');
const number = document.querySelector('#number');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
let i = 0;
function showContent(content, displayer) {
  i++;
  if (Math.floor(i) % 2 !== 0) {
    content.className = 'new-paragraph-style ';
    displayer.className = 'new-heading-style';
    questionBoard.style.marginBottom = '40px';
  } else {
    content.className = 'answer';
    questionBoard.style.marginBottom = '20px';
  }
  console.log(i);
}
// form setup
function sendEmail() {
  const bodyMessage = `full name: ${name.value} <br>  phone: ${number.value}<br> email: ${email.value}<br> message: ${message.value} `;
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'rccgtscikd@gmail.com',
    Password: '99360DB71F53F5C74B86628A2F50349E4A7B',
    To: 'adebanjodavid2007@gmail.com',
    From: 'adebanjodavid2007@gmail.com',
    Subject: `MESSAGE FROM ${email.value}`,
    Body: bodyMessage,
  }).then((message) => {
    if (message == 'OK') {
      Swal.fire({
        title: 'Success!',
        text: 'Message Submited!',
        icon: 'success',
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Message Not Submited',
        icon: 'error',
      });
    }
  });
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendEmail();
  form.reset;
});
console.log(form.innerHTML);
