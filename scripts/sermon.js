function search() {
  const queryValue = document.querySelector('.query').value;
  const sermon = document.querySelectorAll('.sermons');
  sermon.forEach((item) => {
    const sermons = item.innerHTML || item.textContent;
    console.log(sermons);
    if (sermons.toLowerCase().includes(queryValue.toLowerCase())) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
document.querySelector('.query').addEventListener('input', search);
const filter = document.querySelectorAll('button');
console.log(filter);
// let target = '';

const filterSermon = (e) => {
  const target = e.target;
  const sermon = document.querySelectorAll('.sermons');
  sermon.forEach((sermons) => {
    if (
      sermons.dataset.name === target.dataset.name ||
      target.dataset.name === 'all'
    ) {
      sermons.style.display = '';
    } else {
      sermons.style.display = 'none';
    }
  });
};
filter.forEach((filte) => filte.addEventListener('click', filterSermon));
