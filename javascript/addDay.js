let apiDayApi = new TempApi.DayApi();import TempApi from '../src/index';let day = new TempApi.Day();document.getElementById('i7o3l').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('ila66').onclick = (event) => {
    event.preventDefault();
    day['dayId'] = document.querySelector("[annotationname = 'dayId']").value;day['dayDate'] = document.querySelector("[annotationname = 'dayDate']").value.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');day['dayHours'] = document.querySelector("[annotationname = 'dayHours']").value;apiDayApi.createday( day, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};window.onload = () => {};