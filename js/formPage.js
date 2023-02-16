let allFormItems = document.querySelectorAll('.form-item');
document.querySelector("#toggle-required").addEventListener("click", (event) => {
  if(event.target.checked == true){
    convertAndMap(allFormItems, (item) => {
      item.required = true;
    })
  }
  else {
    convertAndMap(allFormItems, (item) => {
      item.required = false;
    })
  }
});

function convertAndMap(array, callback) {
  return Array.from(array).map(callback);
}

