let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';let apiNovemberApi = new TempApi.NovemberApi();let november = new TempApi.November();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.getElementById('i7a49e').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.addEventListener('alignemployeeNov', function(e) {
  const advanceSelect = document.getElementById('i4wbm');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.options].forEach((optionElement) => {
    if (optionElement.textContent === selectedElement) {
      optionElement.selected = true;
    }
  });
});document.getElementById('itc6q').onclick = (event) => {
    event.preventDefault();
    november['novDay1'] = document.querySelector("[annotationname = 'novDay1']").value;november['novDay2'] = document.querySelector("[annotationname = 'novDay2']").value;november['novDay3'] = document.querySelector("[annotationname = 'novDay3']").value;november['novDay4'] = document.querySelector("[annotationname = 'novDay4']").value;november['novDay5'] = document.querySelector("[annotationname = 'novDay5']").value;november['novDay6'] = document.querySelector("[annotationname = 'novDay6']").value;november['novDay7'] = document.querySelector("[annotationname = 'novDay7']").value;november['novDay8'] = document.querySelector("[annotationname = 'novDay8']").value;november['novDay9'] = document.querySelector("[annotationname = 'novDay9']").value;november['novDay10'] = document.querySelector("[annotationname = 'novDay10']").value;november['novDay11'] = document.querySelector("[annotationname = 'novDay11']").value;november['novDay12'] = document.querySelector("[annotationname = 'novDay12']").value;november['novDay13'] = document.querySelector("[annotationname = 'novDay13']").value;november['novDay14'] = document.querySelector("[annotationname = 'novDay14']").value;november['novDay15'] = document.querySelector("[annotationname = 'novDay15']").value;november['novDay16'] = document.querySelector("[annotationname = 'novDay16']").value;november['novDay17'] = document.querySelector("[annotationname = 'novDay17']").value;november['novDay18'] = document.querySelector("[annotationname = 'novDay18']").value;november['novDay19'] = document.querySelector("[annotationname = 'novDay19']").value;november['novDay20'] = document.querySelector("[annotationname = 'novDay20']").value;november['novDay21'] = document.querySelector("[annotationname = 'novDay21']").value;november['novDay22'] = document.querySelector("[annotationname = 'novDay22']").value;november['employeeNov'] = document.querySelector("[annotationname = 'employeeNov']").value;apiNovemberApi.createnovember( november, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/November' ;}}});};window.onload = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iz4vf").querySelectorAll( "[dataitem='true']" )].filter(
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
      document.dispatchEvent(new Event("alignemployeeNov"))
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