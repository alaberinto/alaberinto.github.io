var section = document.querySelector("section");
document.body.classList.add('js-loading');
section.addEventListener("load", removeLoadingClass);
function removeLoadingClass() {
  document.body.classList.remove('js-loading');
}
