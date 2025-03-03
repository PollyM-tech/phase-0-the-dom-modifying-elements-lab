// Write your code here!
const mainElement = document.querySelector('main#main');

// Removing the element 
if (mainElement) {
  mainElement.remove();
}
//create an <h1> element
const newHeader = document.createElement("h1");
//newHeader variable that points to the <h1> node has an id of 'victory'
newHeader.id = "victory";
//the 'newHeader' variable that points to the <h1> node with an id of 
// 'victory' has the text "YOUR-NAME is the champion"
newHeader.textContent = "Pauline is the champion"; 