let apiOctoberApi = new TempApi.OctoberApi();import TempApi from '../src/index';document.getElementById('iuj19x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Home' ;}};document.getElementById('iqzm0i').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/September' ;}};document.getElementById('i7tvgu').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addOctober' ;}};document.getElementById('i94d6j').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/November' ;}};document.getElementById('irt5g').onclick = (event) => {
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
     location.href= '/editOctober/' + transitionId;}};document.getElementById('irvwu7r').onclick = (event) => {
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
            .contains(document.getElementById("irvwu7r")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editOctober/' + transitionId;}};document.getElementById('illgjcj').onclick = (event) => {
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
            .contains(document.getElementById("illgjcj")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editOctober/' + transitionId;}};window.onload = () => {apiOctoberApi.getAlloctober((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i3iw").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay1']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay1;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay1'){
        subDataElements[i].textContent = data[data.length -i -1].octDay1;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay2']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay2;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay2'){
        subDataElements[i].textContent = data[data.length -i -1].octDay2;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay3']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay3;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay3'){
        subDataElements[i].textContent = data[data.length -i -1].octDay3;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay4']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay4;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay4'){
        subDataElements[i].textContent = data[data.length -i -1].octDay4;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay5']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay5;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay5'){
        subDataElements[i].textContent = data[data.length -i -1].octDay5;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay6']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay6;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay6'){
        subDataElements[i].textContent = data[data.length -i -1].octDay6;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay7']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay7;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay7'){
        subDataElements[i].textContent = data[data.length -i -1].octDay7;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay8']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay8;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay8'){
        subDataElements[i].textContent = data[data.length -i -1].octDay8;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay9']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay9;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay9'){
        subDataElements[i].textContent = data[data.length -i -1].octDay9;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay10']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay10;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay10'){
        subDataElements[i].textContent = data[data.length -i -1].octDay10;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay11']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay11;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay11'){
        subDataElements[i].textContent = data[data.length -i -1].octDay11;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay12']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay12;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay12'){
        subDataElements[i].textContent = data[data.length -i -1].octDay12;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay13']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay13;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay13'){
        subDataElements[i].textContent = data[data.length -i -1].octDay13;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay14']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay14;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay14'){
        subDataElements[i].textContent = data[data.length -i -1].octDay14;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay15']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay15;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay15'){
        subDataElements[i].textContent = data[data.length -i -1].octDay15;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay16']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay16;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay16'){
        subDataElements[i].textContent = data[data.length -i -1].octDay16;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay17']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay17;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay17'){
        subDataElements[i].textContent = data[data.length -i -1].octDay17;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay18']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay18;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay18'){
        subDataElements[i].textContent = data[data.length -i -1].octDay18;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay20']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay20;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay20'){
        subDataElements[i].textContent = data[data.length -i -1].octDay20;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay21']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay21;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay21'){
        subDataElements[i].textContent = data[data.length -i -1].octDay21;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'octDay22']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].octDay22;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'octDay22'){
        subDataElements[i].textContent = data[data.length -i -1].octDay22;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'employeeOct']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].employeeOct.userName;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].employeeOct._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'employeeOct']"
          ).getAttribute("id"),
          data[data.length-i-1].employeeOct
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