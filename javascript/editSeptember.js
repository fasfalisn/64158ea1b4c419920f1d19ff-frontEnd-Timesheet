let apiSeptemberApi = new TempApi.SeptemberApi();import TempApi from '../src/index';let apiUserApi = new TempApi.UserApi();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.getElementById('itc6q').onclick = (event) => {
    event.preventDefault();
    let septemberId = window.location.pathname.replace('/editSeptember/','');let september = new TempApi.September();september['employeeSept'] = document.querySelector("[annotationname = 'employeeSept']").value;september['septDay1'] = document.querySelector("[annotationname = 'septDay1']").value;september['septDay2'] = document.querySelector("[annotationname = 'septDay2']").value;september['septDay3'] = document.querySelector("[annotationname = 'septDay3']").value;september['septDay4'] = document.querySelector("[annotationname = 'septDay4']").value;september['septDay5'] = document.querySelector("[annotationname = 'septDay5']").value;september['septDay6'] = document.querySelector("[annotationname = 'septDay6']").value;september['septDay7'] = document.querySelector("[annotationname = 'septDay7']").value;september['septDay8'] = document.querySelector("[annotationname = 'septDay8']").value;september['septDay9'] = document.querySelector("[annotationname = 'septDay9']").value;september['septDay10'] = document.querySelector("[annotationname = 'septDay10']").value;september['septDay11'] = document.querySelector("[annotationname = 'septDay11']").value;september['septDay12'] = document.querySelector("[annotationname = 'septDay12']").value;september['septDay13'] = document.querySelector("[annotationname = 'septDay13']").value;september['septDay14'] = document.querySelector("[annotationname = 'septDay14']").value;september['septDay15'] = document.querySelector("[annotationname = 'septDay15']").value;september['septDay16'] = document.querySelector("[annotationname = 'septDay16']").value;september['septDay17'] = document.querySelector("[annotationname = 'septDay17']").value;september['septDay18'] = document.querySelector("[annotationname = 'septDay18']").value;september['septDay19'] = document.querySelector("[annotationname = 'septDay19']").value;september['septDay20'] = document.querySelector("[annotationname = 'septDay20']").value;september['septDay21'] = document.querySelector("[annotationname = 'septDay21']").value; let opts = {september};apiSeptemberApi.updateseptember( septemberId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = employeeSept]').value = response.body.query.employeeSept ;document.querySelector('[annotationname = septDay1]').value = response.body.query.septDay1 ;document.querySelector('[annotationname = septDay2]').value = response.body.query.septDay2 ;document.querySelector('[annotationname = septDay3]').value = response.body.query.septDay3 ;document.querySelector('[annotationname = septDay4]').value = response.body.query.septDay4 ;document.querySelector('[annotationname = septDay5]').value = response.body.query.septDay5 ;document.querySelector('[annotationname = septDay6]').value = response.body.query.septDay6 ;document.querySelector('[annotationname = septDay7]').value = response.body.query.septDay7 ;document.querySelector('[annotationname = septDay8]').value = response.body.query.septDay8 ;document.querySelector('[annotationname = septDay9]').value = response.body.query.septDay9 ;document.querySelector('[annotationname = septDay10]').value = response.body.query.septDay10 ;document.querySelector('[annotationname = septDay11]').value = response.body.query.septDay11 ;document.querySelector('[annotationname = septDay12]').value = response.body.query.septDay12 ;document.querySelector('[annotationname = septDay13]').value = response.body.query.septDay13 ;document.querySelector('[annotationname = septDay14]').value = response.body.query.septDay14 ;document.querySelector('[annotationname = septDay15]').value = response.body.query.septDay15 ;document.querySelector('[annotationname = septDay16]').value = response.body.query.septDay16 ;document.querySelector('[annotationname = septDay17]').value = response.body.query.septDay17 ;document.querySelector('[annotationname = septDay18]').value = response.body.query.septDay18 ;document.querySelector('[annotationname = septDay19]').value = response.body.query.septDay19 ;document.querySelector('[annotationname = septDay20]').value = response.body.query.septDay20 ;document.querySelector('[annotationname = septDay21]').value = response.body.query.septDay21 ;{   location.href= '/September' ;}}});};window.onload = () => {let septemberId = window.location.pathname.replace('/editSeptember/','');apiSeptemberApi.getseptember( septemberId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = septDay1]').value = response.body.query.septDay1; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay2]').value = response.body.query.septDay2; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay3]').value = response.body.query.septDay3; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay4]').value = response.body.query.septDay4; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay5]').value = response.body.query.septDay5; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay6]').value = response.body.query.septDay6; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay7]').value = response.body.query.septDay7; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay8]').value = response.body.query.septDay8; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay9]').value = response.body.query.septDay9; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay10]').value = response.body.query.septDay10; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay11]').value = response.body.query.septDay11; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay12]').value = response.body.query.septDay12; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay13]').value = response.body.query.septDay13; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay14]').value = response.body.query.septDay14; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay15]').value = response.body.query.septDay15; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay16]').value = response.body.query.septDay16; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay17]').value = response.body.query.septDay17; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay18]').value = response.body.query.septDay18; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay19]').value = response.body.query.septDay19; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay20]').value = response.body.query.septDay20; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = septDay21]').value = response.body.query.septDay21; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = employeeSept]').setAttribute('selected-element',response.body.query.employeeSept.userName);document.dispatchEvent(new Event("alignemployeeSept"));
        const insideSubdocument = document.querySelector("[annotationname = 'employeeSept']");
        if (insideSubdocument !==null) {
           
        }
      if(response.body.query.employeeSept._id){
        map.set(
          document.querySelector(
            "[annotationname = 'employeeSept']"
          ).getAttribute("id"),
          response.body.query.employeeSept
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