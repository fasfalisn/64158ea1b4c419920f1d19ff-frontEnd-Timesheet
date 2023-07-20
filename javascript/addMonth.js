let apiDayApi = new TempApi.DayApi();import TempApi from '../src/index';let apiMonthApi = new TempApi.MonthApi();let month = new TempApi.Month();document.getElementById('ikhu2').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};let arrayi5m2k = [];
document.getElementById("ikqdn").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("i3e2u")
  arrayi5m2k.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULilq66();
};

function refreshULilq66() {
let e=``;
for (let y=0; y<arrayi5m2k.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayi5m2k[y].value}'><p style="display: inline-block">${arrayi5m2k[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("ilq66").innerHTML = e;
}

document.getElementById("ilq66").addEventListener("click", event => {
  event.preventDefault();
  arrayi5m2k = arrayi5m2k.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULilq66();
});
function initializearrayi5m2k(data) {
  arrayi5m2k = data.map(item => ({
    value: item._id,
    liValue: item['dayId']
  }));
}
document.addEventListener('alignmonthDay', function(e) {
  const advanceSelect = document.getElementById('i3e2u');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.options].forEach((optionElement) => {
    if (optionElement.textContent === selectedElement) {
      optionElement.selected = true;
    }
  });
});document.getElementById('i5okm').onclick = (event) => {
    event.preventDefault();
    month['monthName'] = document.querySelector("[annotationname = 'monthName']").value;month['monthId'] = document.querySelector("[annotationname = 'monthId']").value;month["monthDay"] = [...document.querySelector("[annotationname = 'monthDay']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiMonthApi.createmonth( month, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};window.onload = () => {apiDayApi.getAllday((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i0nbd").querySelectorAll( "[dataitem='true']" )].filter(
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
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'dayId']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dayId;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'dayId'){
        subDataElements[i].textContent = data[data.length -i -1].dayId;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignmonthDay"))
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