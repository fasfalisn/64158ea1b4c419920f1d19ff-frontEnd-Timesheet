let apiMonthApi = new TempApi.MonthApi();import TempApi from '../src/index';let apiDayApi = new TempApi.DayApi();document.getElementById('ikhu2').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.addEventListener('alignmonthDay', function(e) {
  const advanceSelect = document.getElementById('icmic');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.options].forEach((optionElement) => {
    if (optionElement.textContent === selectedElement) {
      optionElement.selected = true;
    }
  });
});document.getElementById('i5okm').onclick = (event) => {
    event.preventDefault();
    let monthId = window.location.pathname.replace('/editMonth/','');let month = new TempApi.Month();month['monthName'] = document.querySelector("[annotationname = 'monthName']").value;month['monthId'] = document.querySelector("[annotationname = 'monthId']").value;month['monthDay'] = arrayiw5hk.map(item => item.value); let opts = {month};apiMonthApi.updatemonth( monthId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = monthName]').value = response.body.query.monthName ;document.querySelector('[annotationname = monthId]').value = response.body.query.monthId ;initializearrayiw5hk(response.body.query.monthDay|| []) ; }});};window.onload = () => {let monthId = window.location.pathname.replace('/editMonth/','');apiMonthApi.getmonth( monthId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = monthName]').value = response.body.query.monthName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = monthId]').value = response.body.query.monthId; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = monthDay]').setAttribute('selected-element',response.body.query.monthDay.dayId);document.dispatchEvent(new Event("alignmonthDay"));
        const insideSubdocument = document.querySelector("[annotationname = 'monthDay']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.monthDay;
    initializearrayiw5hk(tableData); 
 refreshULinoen();
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'dayId']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].dayId;
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
      if(response.body.query.monthDay._id){
        map.set(
          document.querySelector(
            "[annotationname = 'monthDay']"
          ).getAttribute("id"),
          response.body.query.monthDay
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
    }});apiDayApi.getAllday((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iw5hk").querySelectorAll( "[dataitem='true']" )].filter(
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