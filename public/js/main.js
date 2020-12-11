import UI from './ui.js';
import Data from './data.js';
import AddItemWork from './addItemWork.js'
import AddItemTravel from './addItemTravel.js'
import AddItemAbsence from './addItemAbsence.js'

// -----------------
// --- SELECTORS ---
// -----------------
const selectMonth = document.getElementById('select-month');
const selectYear = document.getElementById('select-year');
const aside = document.querySelector('.aside');
const addItemAbsence = document.getElementById('add-item-absence');
const addBtn = document.getElementById('add-btn');
const updateBtn = document.getElementById('update-btn');
const cancelBtn = document.getElementById('cancel-btn');
const selectDate = document.getElementById('select-date');
const notiQuestion = document.querySelector('.noti-question');
const addItemType = document.getElementById('add-item-type');
const spinner = document.getElementById('spinner');

let records_work = [];
let records_absence = [];
let records_travel = [];

let absence = [];

let elemID = '';

// ---------------
// EVENT LISTENERS
// ---------------
window.addEventListener('DOMContentLoaded', async () => {
    // get actual day, month, year
    const date = new Date();
    // month [1-12]
    const actualMonth = date.getMonth() + 1;
    const actualYear = date.getFullYear();
    const actualDay = date.getDate();

    spinner.className = 'show';

    records_work = await Data.getRecordsActualMonth(actualYear, actualMonth, 'work');
    records_absence = await Data.getRecordsActualMonth(actualYear, actualMonth, 'absence');
    records_travel = await Data.getRecordsActualMonth(actualYear, actualMonth, 'travel');

    const superior = await Data.getFieldValues('superior');
    const country = await Data.getFieldValues('country');
    const projCode = await Data.getFieldValues('proj_code');
    absence = await Data.getFieldValues('absence');
    const transport = await Data.getFieldValues('transport');
    const regPlate = await Data.getFieldValues('reg_plate');
    
    const addItemSuperior = document.getElementById('add-item-superior');
    const addItemCountryStart = document.getElementById('add-item-country-start');
    const addItemCountryStop = document.getElementById('add-item-country-stop');
    const addItemProjCode = document.getElementById('add-item-proj-code');
    const addItemAbsence = document.getElementById('add-item-absence');
    const addItemTransport = document.getElementById('add-item-transport');
    const addItemRegPlate = document.getElementById('add-item-reg-plate');

    UI.updateSelectionFields(addItemSuperior, superior);
    UI.updateSelectionFields(addItemCountryStart, country);
    UI.updateSelectionFields(addItemCountryStop, country);
    UI.updateSelectionFields(addItemProjCode, projCode);
    UI.updateSelectionFields(addItemAbsence, absence);
    UI.updateSelectionFields(addItemTransport, transport);
    UI.updateSelectionFields(addItemRegPlate, regPlate);

    localStorage.setItem('records_work', JSON.stringify(records_work));
    localStorage.setItem('records_absence', JSON.stringify(records_absence));
    localStorage.setItem('records_travel', JSON.stringify(records_travel));

    // adjust the actual month
    selectMonth.children[actualMonth - 1].selected = true;

    // adjust the actual year
    for (let i = 0; i < selectYear.children.length; i++) {
        if (selectYear.children[i].value == actualYear) {
            selectYear.children[i].selected = true;
        }
    }

    // adjust month grid
    document.body.insertBefore(UI.adjustMonthGrid(actualYear, actualMonth, actualDay), aside);

    // add activity to grid
    records_work.forEach(record => {
        UI.addActivity(record);
    });

    // add activity to grid
    records_absence.forEach(record => {
        UI.addActivity(record);
    });

    // add activity to grid
    records_travel.forEach(record => {
        UI.addActivity(record);
    });

    spinner.className = spinner.className.replace('show', '');
});

selectDate.addEventListener('click', async (e) => {
    if (e.target.id === 'select-month' || e.target.id === 'select-year') {
        // get month number (1 - 12)
        const selectedMonth = document.getElementById('select-month').value;
        const selectedYear = document.getElementById('select-year').value;
        const containerGrid = document.querySelector('.container-grid');
        const sumWorkTime = document.getElementById('sum-work-time');
        sumWorkTime.innerText = '00:00';

        const date = new Date();
        const actualDay = date.getDate();

        records_work = await Data.getRecordsActualMonth(selectedYear, selectedMonth, 'work');
        records_absence = await Data.getRecordsActualMonth(selectedYear, selectedMonth, 'absence');
        records_travel = await Data.getRecordsActualMonth(selectedYear, selectedMonth, 'travel');

        localStorage.setItem('records_work', JSON.stringify(records_work));
        localStorage.setItem('records_absence', JSON.stringify(records_absence));
        localStorage.setItem('records_travel', JSON.stringify(records_travel));

        // remove the previous grid
        containerGrid.remove();

        // adjust month grid
        document.body.insertBefore(UI.adjustMonthGrid(selectedYear, selectedMonth, actualDay), aside);

        // add activity to grid
        records_work.forEach(record => {
            UI.addActivity(record);
        });

        // add activity to grid
        records_absence.forEach(record => {
            UI.addActivity(record);
        });

        // add activity to grid
        records_travel.forEach(record => {
            UI.addActivity(record);
        });
    }
});

document.addEventListener('click', e => {
    // click on work / travel element -> edit existing record
    if (e.target.classList.contains('fa-edit')) {

        // W-1, A-3, T-5
        elemID = e.target.parentElement.parentElement.dataset.id;
        const elemType = elemID.split('-')[0];
        const elemIdNum = elemID.split('-')[1];
        let index = 0;

        const typeStorage = {'W': 'records_work', 'T': 'records_travel', 'A': 'records_absence'};
        const type = {'W': 'Praca', 'T': 'Podróż', 'A': 'Nieobecność'};
        const records = JSON.parse(localStorage.getItem(typeStorage[elemType]));

        index = records.findIndex(record => record.id == elemIdNum);

        if (index === -1) {
            console.error('index not found');
            return;
        }

        const addItemDate = document.getElementById('add-item-date');
        addItemDate.value = records[index].date;
        addItemType.value = type[elemType];

        UI.showActivityFields(records[index].type, records[index]);
        
        addBtn.classList.add('hide');
        updateBtn.classList.remove('hide');
        aside.classList.remove('hide-aside');
    }

    // delete record
    if (e.target.classList.contains('fa-trash')) {
        
        const notiQuestion = document.querySelector('.noti-question');
        elemID = e.target.parentElement.parentElement.dataset.id;
        notiQuestion.style.top = '0';
    }

    // add new activity
    if (e.target.classList.contains('item-info')) {
        const date = document.getElementById('add-item-date');
        const actualYear = document.getElementById('select-year').value;
        let actualMonth = document.getElementById('select-month').value;
        let selectedDay = e.target.dataset.day;
        const lastDayOfMonth = new Date(actualYear, actualMonth, 0).getDate();

        actualMonth = actualMonth < 10 ? `0${actualMonth}` : actualMonth;
        selectedDay = selectedDay < 10 ? `0${selectedDay}` : selectedDay;
        
        // set min and max attributes for date
        date.setAttribute('min', `${actualYear}-${actualMonth}-01`);
        date.setAttribute('max', `${actualYear}-${actualMonth}-${lastDayOfMonth}`);
        
        date.value = `${actualYear}-${actualMonth}-${selectedDay}`;

        addBtn.classList.remove('hide');
        updateBtn.classList.add('hide');
        aside.classList.remove('hide-aside');
    }
});

document.addEventListener('mouseover', e => {
    if (e.target.classList.contains('item-type')) {
        const tooltip = e.target.querySelector('.item-tooltip');
        tooltip.classList.add('tooltip-show');
    }
});

document.addEventListener('mouseout', e => {
    if (e.target.classList.contains('item-type')) {
        const tooltip = e.target.querySelector('.item-tooltip');
        tooltip.classList.remove('tooltip-show');
    }
});

// change visible fields when activity field changes
addItemType.addEventListener('change', e => {
    const activityTrans = {'Praca': 'W', 'Nieobecność': 'A', 'Podróż': 'T'};
    UI.showActivityFields(activityTrans[e.currentTarget.value]);
    document.getElementById('add-item-work-from').disabled = false;
    document.getElementById('add-item-work-to').disabled = false;
});

addItemAbsence.addEventListener('change', e => {
    const workFrom = document.getElementById('add-item-work-from');
    const workTo = document.getElementById('add-item-work-to');

    const selectedAbsence = absence.find(item => item.name === e.currentTarget.value);

    // work start = 00:00, work end = 00:00
    if (selectedAbsence.type === 'null-time') {
        workFrom.value = '00:00';
        workFrom.disabled = true;
        
        workTo.value = '00:00';
        workTo.disabled = true;
    }

    // work start = undef, work end = undef
    if (selectedAbsence.type === 'part-time') {
        workFrom.value = '';
        workFrom.disabled = false;
        
        workTo.value = '';
        workTo.disabled = false;
    }

    // work start = 08:00, work end = 16:00
    if (selectedAbsence.type === 'full-time') {
        workFrom.value = '08:00';
        workFrom.disabled = true;
        
        workTo.value = '16:00';
        workTo.disabled = true;
    }
});

// add button
addBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const type = document.getElementById('add-item-type').value;
    let fieldsObj = null;

    if (type === 'Praca') fieldsObj = new AddItemWork();
    if (type === 'Podróż') fieldsObj = new AddItemTravel();
    if (type === 'Nieobecność') fieldsObj = new AddItemAbsence();

    if (fieldsObj.requiredCheckErr()) return;
    console.log(fieldsObj.getValues(0));

    // insert data do DB
    const req = await Data.storeDB(fieldsObj.getValues(0));
    
    // close sidebar and reload page
    aside.classList.add('hide-aside');

    // show notification
    const notiInfo = document.querySelector('.noti-info');
    notiInfo.children[0].children[0].innerText = 'Rekord dodano!';

    notiInfo.style.top = '0';

    // reload page after 3s
    setTimeout(() => {
        window.location.reload();
    }, 3000);
});

// update button
updateBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    

    const type = document.getElementById('add-item-type').value;
    let fieldsObj = null;

    const elemIdNum = elemID.split('-')[1];

    if (type === 'Praca') fieldsObj = new AddItemWork();
    if (type === 'Podróż') fieldsObj = new AddItemTravel();
    if (type === 'Nieobecność') fieldsObj = new AddItemAbsence();

    if (fieldsObj.requiredCheckErr()) return;

    // insert data do DB
    const req = await Data.updateDB(fieldsObj.getValues(elemIdNum));

    // close sidebar
    aside.classList.add('hide-aside');

    // show notification
    const notiInfo = document.querySelector('.noti-info');
    notiInfo.children[0].children[0].innerText = 'Rekord zmieniono!';

    notiInfo.style.top = '0';

    // reload page after 3s
    setTimeout(() => {
        window.location.reload();
    }, 3000);
});

// cancel button - close side bar
cancelBtn.addEventListener('click', e => {
    e.preventDefault();
    aside.classList.add('hide-aside');
});

// notification handlers
notiQuestion.addEventListener('click', async (e) => {
    if (e.target.id === 'noti-btn-yes') {
        const notiInfo = document.querySelector('.noti-info');

        const elemType = elemID.substr(0, 1);
        const elemIdNum = elemID.substr(2, 1);

        const type = {'W': 'work', 'T': 'travel', 'A': 'absence'};

        // delete from db
        // 1 -> success, 0 -> fail
        const answer = await Data.deleteRecord(type[elemType], elemIdNum);

        // button -> div.d-flex -> div -> div.blur -> div.notification
        e.target.parentElement.parentElement.parentElement.parentElement.style.top = '-100%';
        notiInfo.style.top = '0';

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }

    if (e.target.id === 'noti-btn-no') {
        e.currentTarget.style.top = '-100%';
    }
});
