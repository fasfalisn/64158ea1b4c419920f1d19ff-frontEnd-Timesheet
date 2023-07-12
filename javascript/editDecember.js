let apiDecemberApi = new TempApi.DecemberApi();import TempApi from '../src/index';let apiUserApi = new TempApi.UserApi();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.getElementById('itc6q').onclick = (event) => {
    event.preventDefault();
    let decemberId = window.location.pathname.replace('/editDecember/','');let december = new TempApi.December();december['decDay1'] = document.querySelector("[annotationname = 'decDay1']").value;december['decDay2'] = document.querySelector("[annotationname = 'decDay2']").value;december['decDay3'] = document.querySelector("[annotationname = 'decDay3']").value;december['decDay4'] = document.querySelector("[annotationname = 'decDay4']").value;december['decDay5'] = document.querySelector("[annotationname = 'decDay5']").value;december['decDay6'] = document.querySelector("[annotationname = 'decDay6']").value;december['decDay7'] = document.querySelector("[annotationname = 'decDay7']").value;december['decDay8'] = document.querySelector("[annotationname = 'decDay8']").value;december['decDay9'] = document.querySelector("[annotationname = 'decDay9']").value;december['decDay10'] = document.querySelector("[annotationname = 'decDay10']").value;december['decDay11'] = document.querySelector("[annotationname = 'decDay11']").value;december['decDay12'] = document.querySelector("[annotationname = 'decDay12']").value;december['decDay13'] = document.querySelector("[annotationname = 'decDay13']").value;december['decDay14'] = document.querySelector("[annotationname = 'decDay14']").value;december['decDay15'] = document.querySelector("[annotationname = 'decDay15']").value;december['decDay16'] = document.querySelector("[annotationname = 'decDay16']").value;december['decDay17'] = document.querySelector("[annotationname = 'decDay17']").value;december['decDay18'] = document.querySelector("[annotationname = 'decDay18']").value;december['decDay19'] = document.querySelector("[annotationname = 'decDay19']").value;december['decDay20'] = document.querySelector("[annotationname = 'decDay20']").value;december['decDay21'] = document.querySelector("[annotationname = 'decDay21']").value;december['employeeDec'] = document.querySelector("[annotationname = 'employeeDec']").value; let opts = {december};apiDecemberApi.updatedecember( decemberId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = decDay1]').value = response.body.query.decDay1 ;document.querySelector('[annotationname = decDay2]').value = response.body.query.decDay2 ;document.querySelector('[annotationname = decDay3]').value = response.body.query.decDay3 ;document.querySelector('[annotationname = decDay4]').value = response.body.query.decDay4 ;document.querySelector('[annotationname = decDay5]').value = response.body.query.decDay5 ;document.querySelector('[annotationname = decDay6]').value = response.body.query.decDay6 ;document.querySelector('[annotationname = decDay7]').value = response.body.query.decDay7 ;document.querySelector('[annotationname = decDay8]').value = response.body.query.decDay8 ;document.querySelector('[annotationname = decDay9]').value = response.body.query.decDay9 ;document.querySelector('[annotationname = decDay10]').value = response.body.query.decDay10 ;document.querySelector('[annotationname = decDay11]').value = response.body.query.decDay11 ;document.querySelector('[annotationname = decDay12]').value = response.body.query.decDay12 ;document.querySelector('[annotationname = decDay13]').value = response.body.query.decDay13 ;document.querySelector('[annotationname = decDay14]').value = response.body.query.decDay14 ;document.querySelector('[annotationname = decDay15]').value = response.body.query.decDay15 ;document.querySelector('[annotationname = decDay16]').value = response.body.query.decDay16 ;document.querySelector('[annotationname = decDay17]').value = response.body.query.decDay17 ;document.querySelector('[annotationname = decDay18]').value = response.body.query.decDay18 ;document.querySelector('[annotationname = decDay19]').value = response.body.query.decDay19 ;document.querySelector('[annotationname = decDay20]').value = response.body.query.decDay20 ;document.querySelector('[annotationname = decDay21]').value = response.body.query.decDay21 ;document.querySelector('[annotationname = employeeDec]').value = response.body.query.employeeDec ;{   location.href= '/December' ;}}});};window.onload = () => {let decemberId = window.location.pathname.replace('/editDecember/','');apiDecemberApi.getdecember( decemberId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = decDay1]').value = response.body.query.decDay1; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay2]').value = response.body.query.decDay2; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay3]').value = response.body.query.decDay3; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay4]').value = response.body.query.decDay4; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay5]').value = response.body.query.decDay5; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay6]').value = response.body.query.decDay6; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay7]').value = response.body.query.decDay7; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay8]').value = response.body.query.decDay8; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay9]').value = response.body.query.decDay9; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay10]').value = response.body.query.decDay10; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay11]').value = response.body.query.decDay11; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay12]').value = response.body.query.decDay12; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay13]').value = response.body.query.decDay13; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay14]').value = response.body.query.decDay14; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay15]').value = response.body.query.decDay15; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay16]').value = response.body.query.decDay16; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay17]').value = response.body.query.decDay17; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay18]').value = response.body.query.decDay18; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay19]').value = response.body.query.decDay19; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay20]').value = response.body.query.decDay20; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = decDay21]').value = response.body.query.decDay21; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = employeeDec]').setAttribute('selected-element',response.body.query.employeeDec.userName);document.dispatchEvent(new Event("alignemployeeDec"));
        const insideSubdocument = document.querySelector("[annotationname = 'employeeDec']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.employeeDec.userName;}} catch (e) {console.log(e);};
        }
      if(response.body.query.employeeDec._id){
        map.set(
          document.querySelector(
            "[annotationname = 'employeeDec']"
          ).getAttribute("id"),
          response.body.query.employeeDec
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