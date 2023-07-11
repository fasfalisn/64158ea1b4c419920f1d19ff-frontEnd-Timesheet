let apiSeptemberApi = new TempApi.SeptemberApi();import TempApi from '../src/index';document.getElementById('iuj19x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Home' ;}};document.getElementById('iqzm0i').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/August' ;}};document.getElementById('irt5g').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("irt5g")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editSeptember/' + transitionId;}};window.onload = () => {apiSeptemberApi.getAllseptember((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i3iw").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay1']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay1;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay1'){
        subDataElements[i].textContent = data[data.length -i -1].septDay1;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay2']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay2;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay2'){
        subDataElements[i].textContent = data[data.length -i -1].septDay2;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay3']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay3;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay3'){
        subDataElements[i].textContent = data[data.length -i -1].septDay3;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay4']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay4;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay4'){
        subDataElements[i].textContent = data[data.length -i -1].septDay4;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay5']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay5;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay5'){
        subDataElements[i].textContent = data[data.length -i -1].septDay5;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay6']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay6;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay6'){
        subDataElements[i].textContent = data[data.length -i -1].septDay6;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay7']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay7;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay7'){
        subDataElements[i].textContent = data[data.length -i -1].septDay7;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay8']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay8;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay8'){
        subDataElements[i].textContent = data[data.length -i -1].septDay8;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay9']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay9;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay9'){
        subDataElements[i].textContent = data[data.length -i -1].septDay9;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay10']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay10;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay10'){
        subDataElements[i].textContent = data[data.length -i -1].septDay10;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay11']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay11;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay11'){
        subDataElements[i].textContent = data[data.length -i -1].septDay11;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay12']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay12;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay12'){
        subDataElements[i].textContent = data[data.length -i -1].septDay12;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay13']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay13;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay13'){
        subDataElements[i].textContent = data[data.length -i -1].septDay13;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay14']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay14;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay14'){
        subDataElements[i].textContent = data[data.length -i -1].septDay14;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay15']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay15;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay15'){
        subDataElements[i].textContent = data[data.length -i -1].septDay15;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay16']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay16;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay16'){
        subDataElements[i].textContent = data[data.length -i -1].septDay16;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay17']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay17;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay17'){
        subDataElements[i].textContent = data[data.length -i -1].septDay17;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay18']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay18;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay18'){
        subDataElements[i].textContent = data[data.length -i -1].septDay18;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay19']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay19;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay19'){
        subDataElements[i].textContent = data[data.length -i -1].septDay19;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay20']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay20;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay20'){
        subDataElements[i].textContent = data[data.length -i -1].septDay20;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'septDay21']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].septDay21;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'septDay21'){
        subDataElements[i].textContent = data[data.length -i -1].septDay21;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'employeeSept']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].employeeSept.userName;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].employeeSept._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'employeeSept']"
          ).getAttribute("id"),
          data[data.length-i-1].employeeSept
        );
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
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