let apiMonthApi = new TempApi.MonthApi();import TempApi from '../src/index';let apiWorkpackageApi = new TempApi.WorkpackageApi();let workpackage = new TempApi.Workpackage();document.getElementById('i7hxt').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};let arrayi35wt = [];
document.getElementById("ijjq6").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("ibjlx")
  arrayi35wt.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULiezek();
};

function refreshULiezek() {
let e=``;
for (let y=0; y<arrayi35wt.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayi35wt[y].value}'><p style="display: inline-block">${arrayi35wt[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("iezek").innerHTML = e;
}

document.getElementById("iezek").addEventListener("click", event => {
  event.preventDefault();
  arrayi35wt = arrayi35wt.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULiezek();
});
function initializearrayi35wt(data) {
  arrayi35wt = data.map(item => ({
    value: item._id,
    liValue: item['monthId']
  }));
}
document.addEventListener('alignworkpackageMonth', function(e) {
  const advanceSelect = document.getElementById('ibjlx');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.options].forEach((optionElement) => {
    if (optionElement.textContent === selectedElement) {
      optionElement.selected = true;
    }
  });
});document.getElementById('ip61k').onclick = (event) => {
    event.preventDefault();
    workpackage['workpackageId'] = document.querySelector("[annotationname = 'workpackageId']").value;workpackage['workpackageName'] = document.querySelector("[annotationname = 'workpackageName']").value;workpackage["workpackageMonth"] = [...document.querySelector("[annotationname = 'workpackageMonth']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiWorkpackageApi.createworkpackage( workpackage, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};window.onload = () => {apiMonthApi.getAllmonth((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i6dki").querySelectorAll( "[dataitem='true']" )].filter(
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
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'monthId']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].monthId;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'monthId'){
        subDataElements[i].textContent = data[data.length -i -1].monthId;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignworkpackageMonth"))
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