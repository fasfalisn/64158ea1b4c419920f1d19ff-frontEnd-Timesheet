let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';let apiSeptemberApi = new TempApi.SeptemberApi();let september = new TempApi.September();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.getElementById('itc6q').onclick = (event) => {
    event.preventDefault();
    september['employeeSept'] = document.querySelector("[annotationname = 'employeeSept']").value;september['septDay1'] = document.querySelector("[annotationname = 'septDay1']").value;september['septDay2'] = document.querySelector("[annotationname = 'septDay2']").value;september['septDay3'] = document.querySelector("[annotationname = 'septDay3']").value;september['septDay4'] = document.querySelector("[annotationname = 'septDay4']").value;september['septDay5'] = document.querySelector("[annotationname = 'septDay5']").value;september['septDay6'] = document.querySelector("[annotationname = 'septDay6']").value;september['septDay7'] = document.querySelector("[annotationname = 'septDay7']").value;september['septDay8'] = document.querySelector("[annotationname = 'septDay8']").value;september['septDay9'] = document.querySelector("[annotationname = 'septDay9']").value;september['septDay10'] = document.querySelector("[annotationname = 'septDay10']").value;september['septDay11'] = document.querySelector("[annotationname = 'septDay11']").value;september['septDay12'] = document.querySelector("[annotationname = 'septDay12']").value;september['septDay13'] = document.querySelector("[annotationname = 'septDay13']").value;september['septDay14'] = document.querySelector("[annotationname = 'septDay14']").value;september['septDay15'] = document.querySelector("[annotationname = 'septDay15']").value;september['septDay16'] = document.querySelector("[annotationname = 'septDay16']").value;september['septDay17'] = document.querySelector("[annotationname = 'septDay17']").value;september['septDay18'] = document.querySelector("[annotationname = 'septDay18']").value;september['septDay19'] = document.querySelector("[annotationname = 'septDay19']").value;september['septDay20'] = document.querySelector("[annotationname = 'septDay20']").value;september['septDay21'] = document.querySelector("[annotationname = 'septDay21']").value;apiSeptemberApi.createseptember( september, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/September' ;}}});};window.onload = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iz4vf").querySelectorAll( "[dataitem='true']" )].filter(
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
      document.dispatchEvent(new Event("alignemployeeSept"))
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