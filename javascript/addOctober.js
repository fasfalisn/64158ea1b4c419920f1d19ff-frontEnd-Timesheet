let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';let apiOctoberApi = new TempApi.OctoberApi();let october = new TempApi.October();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.getElementById('i7a49e').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.addEventListener('alignemployeeOct', function(e) {
  const advanceSelect = document.getElementById('i4wbm');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('itc6q').onclick = (event) => {
    event.preventDefault();
    october['employeeOct'] = document.querySelector("[annotationname = 'employeeOct']").value;october['octDay1'] = document.querySelector("[annotationname = 'octDay1']").value;october['octDay2'] = document.querySelector("[annotationname = 'octDay2']").value;october['octDay3'] = document.querySelector("[annotationname = 'octDay3']").value;october['octDay4'] = document.querySelector("[annotationname = 'octDay4']").value;october['octDay5'] = document.querySelector("[annotationname = 'octDay5']").value;october['octDay6'] = document.querySelector("[annotationname = 'octDay6']").value;october['octDay7'] = document.querySelector("[annotationname = 'octDay7']").value;october['octDay8'] = document.querySelector("[annotationname = 'octDay8']").value;october['octDay9'] = document.querySelector("[annotationname = 'octDay9']").value;october['octDay10'] = document.querySelector("[annotationname = 'octDay10']").value;october['octDay11'] = document.querySelector("[annotationname = 'octDay11']").value;october['octDay12'] = document.querySelector("[annotationname = 'octDay12']").value;october['octDay13'] = document.querySelector("[annotationname = 'octDay13']").value;october['octDay14'] = document.querySelector("[annotationname = 'octDay14']").value;october['octDay15'] = document.querySelector("[annotationname = 'octDay15']").value;october['octDay16'] = document.querySelector("[annotationname = 'octDay16']").value;october['octDay17'] = document.querySelector("[annotationname = 'octDay17']").value;october['octDay18'] = document.querySelector("[annotationname = 'octDay18']").value;october['octDay20'] = document.querySelector("[annotationname = 'octDay20']").value;october['octDay21'] = document.querySelector("[annotationname = 'octDay21']").value;october['octDay22'] = document.querySelector("[annotationname = 'octDay22']").value;apiOctoberApi.createoctober( october, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/October' ;}}});};window.onload = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iz4vf").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();
    if( data.length > subDataElements.length){
      for(let i = 0; i <=  data.length - subDataElements.length; i++){
        let parentNode = subDataElements[0].parentNode;
        let child = parentNode.childNodes[0].cloneNode(true);
        parentNode.appendChild(child);
        subDataElements.push(child);
      }
    }
    data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'userName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].userName;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'userName'){
        subDataElements[i].textContent = data[data.length -i -1].userName;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignemployeeOct"))
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