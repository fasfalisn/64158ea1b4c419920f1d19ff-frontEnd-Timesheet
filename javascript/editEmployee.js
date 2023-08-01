let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';let apiProjectApi = new TempApi.ProjectApi();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.getElementById('i75og').onclick = (event) => {
    event.preventDefault();
    let userId = window.location.pathname.replace('/editEmployee/','');
      if(userId === '/editEmployee' || userId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i75og")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            userId = value._id;
            parentId = key;
          }
        });
      }
    apiUserApi.deleteuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};let arrayivc4k = [];
document.getElementById("ijfkm").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("ii5hj")
  arrayivc4k.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULii52j();
};

function refreshULii52j() {
let e=``;
for (let y=0; y<arrayivc4k.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayivc4k[y].value}'><p style="display: inline-block">${arrayivc4k[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("ii52j").innerHTML = e;
}

document.getElementById("ii52j").addEventListener("click", event => {
  event.preventDefault();
  arrayivc4k = arrayivc4k.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULii52j();
});
function initializearrayivc4k(data) {
  arrayivc4k = data.map(item => ({
    value: item._id,
    liValue: item['projectId']
  }));
}
document.addEventListener('alignuserProject', function(e) {
  const advanceSelect = document.getElementById('ii5hj');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.options].forEach((optionElement) => {
    if (optionElement.textContent === selectedElement) {
      optionElement.selected = true;
    }
  });
});document.getElementById('i3j96').onclick = (event) => {
    event.preventDefault();
    let userId = window.location.pathname.replace('/editEmployee/','');let user = new TempApi.User();user['userName'] = document.querySelector("[annotationname = 'userName']").value;user['userSurname'] = document.querySelector("[annotationname = 'userSurname']").value;user['userProject'] = arrayivc4k.map(item => item.value); let opts = {user};apiUserApi.updateuser( userId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = userName]').value = response.body.query.userName ;document.querySelector('[annotationname = userSurname]').value = response.body.query.userSurname ;initializearrayivc4k(response.body.query.userProject|| []) ; {   location.href= '/Home' ;}}});};window.onload = () => {let userId = window.location.pathname.replace('/editEmployee/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = userName]').value = response.body.query.userName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = userSurname]').value = response.body.query.userSurname; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = userProject]').setAttribute('selected-element',response.body.query.userProject.projectId);document.dispatchEvent(new Event("alignuserProject"));
        const insideSubdocument = document.querySelector("[annotationname = 'userProject']");
        if (insideSubdocument !==null) {
          const tableDatauserProject = response.body.query.userProject;
      initializearrayivc4k(tableDatauserProject); 
 refreshULii52j();
        }
      if(response.body.query.userProject._id){
        map.set(
          document.querySelector(
            "[annotationname = 'userProject']"
          ).getAttribute("id"),
          response.body.query.userProject
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
    }});apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i15dx").querySelectorAll( "[dataitem='true']" )].filter(
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
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectId']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].projectId;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'projectId'){
        subDataElements[i].textContent = data[data.length -i -1].projectId;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignuserProject"))
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