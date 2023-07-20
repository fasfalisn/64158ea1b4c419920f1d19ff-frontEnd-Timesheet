let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let apiUserApi = new TempApi.UserApi();let user = new TempApi.User();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};let arrayicv27 = [];
document.getElementById("i5lxf").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("ia6hl")
  arrayicv27.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULifxn9();
};

function refreshULifxn9() {
let e=``;
for (let y=0; y<arrayicv27.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayicv27[y].value}'><p style="display: inline-block">${arrayicv27[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("ifxn9").innerHTML = e;
}

document.getElementById("ifxn9").addEventListener("click", event => {
  event.preventDefault();
  arrayicv27 = arrayicv27.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULifxn9();
});
function initializearrayicv27(data) {
  arrayicv27 = data.map(item => ({
    value: item._id,
    liValue: item['projectId']
  }));
}
document.addEventListener('alignuserProject', function(e) {
  const advanceSelect = document.getElementById('ia6hl');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.options].forEach((optionElement) => {
    if (optionElement.textContent === selectedElement) {
      optionElement.selected = true;
    }
  });
});document.getElementById('i3j96').onclick = (event) => {
    event.preventDefault();
    user['userName'] = document.querySelector("[annotationname = 'userName']").value;user['userSurname'] = document.querySelector("[annotationname = 'userSurname']").value;user["userProject"] = [...document.querySelector("[annotationname = 'userProject']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiUserApi.createuser( user, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/Home' ;}}});};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i5cia").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();
    if( data.length > subDataElements.length){
      for(let i = 0; data.length > subDataElements.length; i++){
        let parentNode = subDataElements[0].parentNode;
        let child = subDataElements[0].cloneNode(true)
        parentNode.appendChild(child);
        subDataElements.push(child);
      }
    }
    data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectId']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].projectId;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'projectId'){
        subDataElements[i].textContent = data[data.length -i -1].projectId;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignuserProject"))
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};