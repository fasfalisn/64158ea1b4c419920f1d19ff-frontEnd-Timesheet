let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';let apiDecemberApi = new TempApi.DecemberApi();let december = new TempApi.December();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.getElementById('itc6q').onclick = (event) => {
    event.preventDefault();
    december['decDay1'] = document.querySelector("[annotationname = 'decDay1']").value;december['decDay2'] = document.querySelector("[annotationname = 'decDay2']").value;december['decDay3'] = document.querySelector("[annotationname = 'decDay3']").value;december['decDay4'] = document.querySelector("[annotationname = 'decDay4']").value;december['decDay5'] = document.querySelector("[annotationname = 'decDay5']").value;december['decDay6'] = document.querySelector("[annotationname = 'decDay6']").value;december['decDay7'] = document.querySelector("[annotationname = 'decDay7']").value;december['decDay8'] = document.querySelector("[annotationname = 'decDay8']").value;december['decDay9'] = document.querySelector("[annotationname = 'decDay9']").value;december['decDay10'] = document.querySelector("[annotationname = 'decDay10']").value;december['decDay11'] = document.querySelector("[annotationname = 'decDay11']").value;december['decDay12'] = document.querySelector("[annotationname = 'decDay12']").value;december['decDay13'] = document.querySelector("[annotationname = 'decDay13']").value;december['decDay14'] = document.querySelector("[annotationname = 'decDay14']").value;december['decDay15'] = document.querySelector("[annotationname = 'decDay15']").value;december['decDay16'] = document.querySelector("[annotationname = 'decDay16']").value;december['decDay17'] = document.querySelector("[annotationname = 'decDay17']").value;december['decDay18'] = document.querySelector("[annotationname = 'decDay18']").value;december['decDay19'] = document.querySelector("[annotationname = 'decDay19']").value;december['decDay20'] = document.querySelector("[annotationname = 'decDay20']").value;december['decDay21'] = document.querySelector("[annotationname = 'decDay21']").value;december['employeeDec'] = document.querySelector("[annotationname = 'employeeDec']").value;apiDecemberApi.createdecember( december, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/December' ;}}});};window.onload = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iz4vf").querySelectorAll( "[dataitem='true']" )].filter(
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
      document.dispatchEvent(new Event("alignemployeeDec"))
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