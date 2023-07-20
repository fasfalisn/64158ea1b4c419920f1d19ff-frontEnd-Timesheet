let apiNovemberApi = new TempApi.NovemberApi();import TempApi from '../src/index';document.getElementById('iuj19x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Home' ;}};document.getElementById('iqzm0i').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/October' ;}};document.getElementById('i7tvgu').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addNovember' ;}};document.getElementById('i94d6j').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/December' ;}};document.getElementById('irt5g').onclick = (event) => {
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
     location.href= '/editNovember/' + transitionId;}};document.getElementById('imi2rwn').onclick = (event) => {
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
            .contains(document.getElementById("imi2rwn")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editNovember/' + transitionId;}};document.getElementById('izfv4jr').onclick = (event) => {
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
            .contains(document.getElementById("izfv4jr")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editNovember/' + transitionId;}};window.onload = () => {apiNovemberApi.getAllnovember((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i3iw").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay1']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay1;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay1'){
        subDataElements[i].textContent = data[data.length -i -1].novDay1;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay2']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay2;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay2'){
        subDataElements[i].textContent = data[data.length -i -1].novDay2;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay3']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay3;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay3'){
        subDataElements[i].textContent = data[data.length -i -1].novDay3;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay4']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay4;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay4'){
        subDataElements[i].textContent = data[data.length -i -1].novDay4;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay5']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay5;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay5'){
        subDataElements[i].textContent = data[data.length -i -1].novDay5;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay6']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay6;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay6'){
        subDataElements[i].textContent = data[data.length -i -1].novDay6;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay7']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay7;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay7'){
        subDataElements[i].textContent = data[data.length -i -1].novDay7;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay8']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay8;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay8'){
        subDataElements[i].textContent = data[data.length -i -1].novDay8;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay9']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay9;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay9'){
        subDataElements[i].textContent = data[data.length -i -1].novDay9;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay10']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay10;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay10'){
        subDataElements[i].textContent = data[data.length -i -1].novDay10;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay11']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay11;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay11'){
        subDataElements[i].textContent = data[data.length -i -1].novDay11;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay12']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay12;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay12'){
        subDataElements[i].textContent = data[data.length -i -1].novDay12;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay13']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay13;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay13'){
        subDataElements[i].textContent = data[data.length -i -1].novDay13;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay14']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay14;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay14'){
        subDataElements[i].textContent = data[data.length -i -1].novDay14;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay15']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay15;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay15'){
        subDataElements[i].textContent = data[data.length -i -1].novDay15;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay16']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay16;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay16'){
        subDataElements[i].textContent = data[data.length -i -1].novDay16;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay17']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay17;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay17'){
        subDataElements[i].textContent = data[data.length -i -1].novDay17;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay18']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay18;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay18'){
        subDataElements[i].textContent = data[data.length -i -1].novDay18;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay19']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay19;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay19'){
        subDataElements[i].textContent = data[data.length -i -1].novDay19;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay20']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay20;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay20'){
        subDataElements[i].textContent = data[data.length -i -1].novDay20;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay21']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay21;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay21'){
        subDataElements[i].textContent = data[data.length -i -1].novDay21;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'novDay22']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].novDay22;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'novDay22'){
        subDataElements[i].textContent = data[data.length -i -1].novDay22;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'employeeNov']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].employeeNov.userName;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].employeeNov._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'employeeNov']"
          ).getAttribute("id"),
          data[data.length-i-1].employeeNov
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