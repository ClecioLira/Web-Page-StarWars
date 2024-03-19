const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
function alterarClasse() {
  if (window.innerWidth < 768) {
    div1.classList.add('row');
    div1.classList.add('row-cols-2');
    div1.classList.add('row-cols-md-2');
    div1.classList.add('g-1');
  } else {
    div1.classList.add('row');
    div1.classList.add('row-cols-4');
    div1.classList.add('row-cols-md-4');
    div1.classList.add('g-1');
  }
}
function alterarClasse2() {
  if (window.innerWidth < 768) {
    div2.classList.add('row');
    div2.classList.add('row-cols-2');
    div2.classList.add('row-cols-md-2');
    div2.classList.add('g-1');
  } else {
    div2.classList.add('row');
    div2.classList.add('row-cols-4');
    div2.classList.add('row-cols-md-4');
    div2.classList.add('g-1');
  }
}
window.addEventListener('resize', alterarClasse);
window.addEventListener('resize', alterarClasse2);
alterarClasse();
alterarClasse2();
