let apiDecemberApi = new TempApi.DecemberApi();import TempApi from '../src/index';document.getElementById('iuj19x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Home' ;}};document.getElementById('iqzm0i').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/November' ;}};document.getElementById('i7tvgu').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addDecember' ;}};document.getElementById('i94d6j').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/October' ;}};document.getElementById('irt5g').onclick = (event) => {
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
     location.href= '/editDecember/' + transitionId;}};document.getElementById('icfbehd').onclick = (event) => {
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
            .contains(document.getElementById("icfbehd")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editDecember/' + transitionId;}};document.getElementById('iy712qh').onclick = (event) => {
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
            .contains(document.getElementById("iy712qh")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editDecember/' + transitionId;}};window.onload = () => {apiDecemberApi.getAlldecember((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i3iw").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay1']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay1;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay1'){
        subDataElements[i].textContent = data[data.length -i -1].decDay1;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay2']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay2;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay2'){
        subDataElements[i].textContent = data[data.length -i -1].decDay2;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay3']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay3;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay3'){
        subDataElements[i].textContent = data[data.length -i -1].decDay3;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay4']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay4;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay4'){
        subDataElements[i].textContent = data[data.length -i -1].decDay4;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay5']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay5;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay5'){
        subDataElements[i].textContent = data[data.length -i -1].decDay5;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay6']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay6;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay6'){
        subDataElements[i].textContent = data[data.length -i -1].decDay6;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay7']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay7;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay7'){
        subDataElements[i].textContent = data[data.length -i -1].decDay7;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay8']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay8;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay8'){
        subDataElements[i].textContent = data[data.length -i -1].decDay8;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay9']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay9;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay9'){
        subDataElements[i].textContent = data[data.length -i -1].decDay9;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay10']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay10;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay10'){
        subDataElements[i].textContent = data[data.length -i -1].decDay10;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay11']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay11;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay11'){
        subDataElements[i].textContent = data[data.length -i -1].decDay11;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay12']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay12;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay12'){
        subDataElements[i].textContent = data[data.length -i -1].decDay12;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay13']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay13;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay13'){
        subDataElements[i].textContent = data[data.length -i -1].decDay13;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay14']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay14;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay14'){
        subDataElements[i].textContent = data[data.length -i -1].decDay14;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay15']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay15;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay15'){
        subDataElements[i].textContent = data[data.length -i -1].decDay15;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay16']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay16;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay16'){
        subDataElements[i].textContent = data[data.length -i -1].decDay16;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay17']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay17;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay17'){
        subDataElements[i].textContent = data[data.length -i -1].decDay17;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay18']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay18;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay18'){
        subDataElements[i].textContent = data[data.length -i -1].decDay18;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay19']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay19;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay19'){
        subDataElements[i].textContent = data[data.length -i -1].decDay19;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay20']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay20;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay20'){
        subDataElements[i].textContent = data[data.length -i -1].decDay20;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'decDay21']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].decDay21;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'decDay21'){
        subDataElements[i].textContent = data[data.length -i -1].decDay21;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'employeeDec']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].employeeDec.userName;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].employeeDec._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'employeeDec']"
          ).getAttribute("id"),
          data[data.length-i-1].employeeDec
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