let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let apiMonthApi = new TempApi.MonthApi();document.getElementById('i7hxt').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.addEventListener('alignworkpackageMonth', function(e) {
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
    let workpackageId = window.location.pathname.replace('/editWorkpackage/','');let workpackage = new TempApi.Workpackage();workpackage['workpackageId'] = document.querySelector("[annotationname = 'workpackageId']").value;workpackage['workpackageName'] = document.querySelector("[annotationname = 'workpackageName']").value;workpackage['workpackageMonth'] = arrayi35wt.map(item => item.value); let opts = {workpackage};apiWorkpackageApi.updateworkpackage( workpackageId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = workpackageId]').value = response.body.query.workpackageId ;document.querySelector('[annotationname = workpackageName]').value = response.body.query.workpackageName ;initializearrayi35wt(response.body.query.workpackageMonth|| []) ; }});};window.onload = () => {let workpackageId = window.location.pathname.replace('/editWorkpackage/','');apiWorkpackageApi.getworkpackage( workpackageId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = workpackageId]').value = response.body.query.workpackageId; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = workpackageName]').value = response.body.query.workpackageName; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = workpackageMonth]').setAttribute('selected-element',response.body.query.workpackageMonth.monthId);document.dispatchEvent(new Event("alignworkpackageMonth"));
        const insideSubdocument = document.querySelector("[annotationname = 'workpackageMonth']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.workpackageMonth;
    initializearrayi35wt(tableData); 
 refreshULiezek();
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'monthId']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].monthId;
      }
    }
    catch(e) {console.log(e);};
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(response.body.query.workpackageMonth._id){
        map.set(
          document.querySelector(
            "[annotationname = 'workpackageMonth']"
          ).getAttribute("id"),
          response.body.query.workpackageMonth
        );
      }
     } catch (e) { console.log(e) };
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
    }});apiMonthApi.getAllmonth((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i35wt").querySelectorAll( "[dataitem='true']" )].filter(
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