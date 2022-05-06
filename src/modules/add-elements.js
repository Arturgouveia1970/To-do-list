export default function addElem(elem, classes, parent)  {

  const createdElem = document.createElement(elem);
  const newElement =  document.querySelector('.todo-list-container');
  if (classes !== undefined) {
    classes.forEach((cl) => createdElem.classList.add(cl));
    newElement.appendChild(createdElem);
  }
  return createdElem;
}
  