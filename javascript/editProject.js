let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let apiWorkpackageApi = new TempApi.WorkpackageApi();document.getElementById('iuaqj').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};let arrayim9s4 = [];
document.getElementById("ilngv").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("inuel")
  arrayim9s4.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULi3efc();
};

function refreshULi3efc() {
let e=``;
for (let y=0; y<arrayim9s4.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayim9s4[y].value}'><p style="display: inline-block">${arrayim9s4[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("i3efc").innerHTML = e;
}

document.getElementById("i3efc").addEventListener("click", event => {
  event.preventDefault();
  arrayim9s4 = arrayim9s4.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULi3efc();
});
function initializearrayim9s4(data) {
  arrayim9s4 = data.map(item => ({
    value: item._id,
    liValue: item['workpackageId']
  }));
}
document.addEventListener('alignprojectWp', function(e) {
  const advanceSelect = document.getElementById('inuel');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.options].forEach((optionElement) => {
    if (optionElement.textContent === selectedElement) {
      optionElement.selected = true;
    }
  });
});document.getElementById('ix8bq').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/editProject/','');let project = new TempApi.Project();project['projectId'] = document.querySelector("[annotationname = 'projectId']").value;project['projectName'] = document.querySelector("[annotationname = 'projectName']").value;project['projectWp'] = arrayim9s4.map(item => item.value); let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectId]').value = response.body.query.projectId ;document.querySelector('[annotationname = projectName]').value = response.body.query.projectName ;initializearrayim9s4(response.body.query.projectWp|| []) ; }});};window.onload = () => {let projectId = window.location.pathname.replace('/editProject/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = projectId]').value = response.body.query.projectId; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectName]').value = response.body.query.projectName; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = projectWp]').setAttribute('selected-element',response.body.query.projectWp.workpackageId);document.dispatchEvent(new Event("alignprojectWp"));
        const insideSubdocument = document.querySelector("[annotationname = 'projectWp']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.projectWp;
      initializearrayim9s4(tableData); 
 refreshULi3efc();
        }
      if(response.body.query.projectWp._id){
        map.set(
          document.querySelector(
            "[annotationname = 'projectWp']"
          ).getAttribute("id"),
          response.body.query.projectWp
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
    }});apiWorkpackageApi.getAllworkpackage((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iy2qe").querySelectorAll( "[dataitem='true']" )].filter(
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
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'workpackageId']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].workpackageId;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'workpackageId'){
        subDataElements[i].textContent = data[data.length -i -1].workpackageId;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignprojectWp"))
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