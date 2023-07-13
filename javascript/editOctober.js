let apiOctoberApi = new TempApi.OctoberApi();import TempApi from '../src/index';let apiUserApi = new TempApi.UserApi();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.getElementById('i7a49e').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.addEventListener('alignemployeeOct', function(e) {
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
    let octoberId = window.location.pathname.replace('/editOctober/','');let october = new TempApi.October();october['employeeOct'] = document.querySelector("[annotationname = 'employeeOct']").value;october['octDay1'] = document.querySelector("[annotationname = 'octDay1']").value;october['octDay2'] = document.querySelector("[annotationname = 'octDay2']").value;october['octDay3'] = document.querySelector("[annotationname = 'octDay3']").value;october['octDay4'] = document.querySelector("[annotationname = 'octDay4']").value;october['octDay5'] = document.querySelector("[annotationname = 'octDay5']").value;october['octDay6'] = document.querySelector("[annotationname = 'octDay6']").value;october['octDay7'] = document.querySelector("[annotationname = 'octDay7']").value;october['octDay8'] = document.querySelector("[annotationname = 'octDay8']").value;october['octDay9'] = document.querySelector("[annotationname = 'octDay9']").value;october['octDay10'] = document.querySelector("[annotationname = 'octDay10']").value;october['octDay11'] = document.querySelector("[annotationname = 'octDay11']").value;october['octDay12'] = document.querySelector("[annotationname = 'octDay12']").value;october['octDay13'] = document.querySelector("[annotationname = 'octDay13']").value;october['octDay14'] = document.querySelector("[annotationname = 'octDay14']").value;october['octDay15'] = document.querySelector("[annotationname = 'octDay15']").value;october['octDay16'] = document.querySelector("[annotationname = 'octDay16']").value;october['octDay17'] = document.querySelector("[annotationname = 'octDay17']").value;october['octDay18'] = document.querySelector("[annotationname = 'octDay18']").value;october['octDay20'] = document.querySelector("[annotationname = 'octDay20']").value;october['octDay21'] = document.querySelector("[annotationname = 'octDay21']").value;october['octDay22'] = document.querySelector("[annotationname = 'octDay22']").value; let opts = {october};apiOctoberApi.updateoctober( octoberId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = employeeOct]').value = response.body.query.employeeOct ;document.querySelector('[annotationname = octDay1]').value = response.body.query.octDay1 ;document.querySelector('[annotationname = octDay2]').value = response.body.query.octDay2 ;document.querySelector('[annotationname = octDay3]').value = response.body.query.octDay3 ;document.querySelector('[annotationname = octDay4]').value = response.body.query.octDay4 ;document.querySelector('[annotationname = octDay5]').value = response.body.query.octDay5 ;document.querySelector('[annotationname = octDay6]').value = response.body.query.octDay6 ;document.querySelector('[annotationname = octDay7]').value = response.body.query.octDay7 ;document.querySelector('[annotationname = octDay8]').value = response.body.query.octDay8 ;document.querySelector('[annotationname = octDay9]').value = response.body.query.octDay9 ;document.querySelector('[annotationname = octDay10]').value = response.body.query.octDay10 ;document.querySelector('[annotationname = octDay11]').value = response.body.query.octDay11 ;document.querySelector('[annotationname = octDay12]').value = response.body.query.octDay12 ;document.querySelector('[annotationname = octDay13]').value = response.body.query.octDay13 ;document.querySelector('[annotationname = octDay14]').value = response.body.query.octDay14 ;document.querySelector('[annotationname = octDay15]').value = response.body.query.octDay15 ;document.querySelector('[annotationname = octDay16]').value = response.body.query.octDay16 ;document.querySelector('[annotationname = octDay17]').value = response.body.query.octDay17 ;document.querySelector('[annotationname = octDay18]').value = response.body.query.octDay18 ;document.querySelector('[annotationname = octDay20]').value = response.body.query.octDay20 ;document.querySelector('[annotationname = octDay21]').value = response.body.query.octDay21 ;document.querySelector('[annotationname = octDay22]').value = response.body.query.octDay22 ;{   location.href= '/October' ;}}});};window.onload = () => {let octoberId = window.location.pathname.replace('/editOctober/','');apiOctoberApi.getoctober( octoberId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = octDay1]').value = response.body.query.octDay1; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay2]').value = response.body.query.octDay2; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay3]').value = response.body.query.octDay3; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay4]').value = response.body.query.octDay4; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay5]').value = response.body.query.octDay5; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay6]').value = response.body.query.octDay6; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay7]').value = response.body.query.octDay7; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay8]').value = response.body.query.octDay8; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay9]').value = response.body.query.octDay9; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay10]').value = response.body.query.octDay10; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay11]').value = response.body.query.octDay11; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay12]').value = response.body.query.octDay12; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay13]').value = response.body.query.octDay13; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay14]').value = response.body.query.octDay14; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay15]').value = response.body.query.octDay15; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay16]').value = response.body.query.octDay16; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay17]').value = response.body.query.octDay17; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay18]').value = response.body.query.octDay18; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay20]').value = response.body.query.octDay20; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay21]').value = response.body.query.octDay21; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = octDay22]').value = response.body.query.octDay22; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = employeeOct]').setAttribute('selected-element',response.body.query.employeeOct.userName);document.dispatchEvent(new Event("alignemployeeOct"));
        const insideSubdocument = document.querySelector("[annotationname = 'employeeOct']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.employeeOct.userName;}} catch (e) {console.log(e);};
        }
      if(response.body.query.employeeOct._id){
        map.set(
          document.querySelector(
            "[annotationname = 'employeeOct']"
          ).getAttribute("id"),
          response.body.query.employeeOct
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
    }});apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iz4vf").querySelectorAll( "[dataitem='true']" )].filter(
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