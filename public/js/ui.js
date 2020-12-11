import AddItemWork from "./addItemWork.js";
import AddItemTravel from "./addItemTravel.js";
import AddItemAbsence from "./addItemAbsence.js";

export default class UI {
    /**
     * adjust month grid, add activities, if present
     * 
     * @param {*} year the year, like 2020
     * @param {*} month the month, [1-12]
     * @param {*} day day of month [1-31]
     * 
     * @return the container div / main
     */
    static adjustMonthGrid(year, month, day) {
        const date = new Date(year, month-1, 1);
        const monthNow = new Date().getMonth();
        const container = document.createElement('main');
        let addStyle = '';

        container.classList.add('container-grid');
        
        // grid header
        container.innerHTML = `
            <div class="item weekday-header">PONIEDZIAŁEK</div>
            <div class="item weekday-header">WTOREK</div>
            <div class="item weekday-header">ŚRODA</div>
            <div class="item weekday-header">CZWARTEK</div>
            <div class="item weekday-header">PIĄTEK</div>
            <div class="item weekday-header weekend-sat">SOBOTA</div>
            <div class="item weekday-header weekend-sun">NIEDZIELA</div>
        `;
        
        // weekday of selected / actual month
        // change output to range [1-7]
        let firstDayWeekDay = date.getDay();
        firstDayWeekDay = firstDayWeekDay === 0 ? firstDayWeekDay + 7 : firstDayWeekDay;
    
        // get number of days in a month
        const daysInMonth = new Date(year, month ,0).getDate();
        
        for (let i = -(firstDayWeekDay-1); i < daysInMonth; i++) {
            const div = document.createElement('div');
            div.classList.add('item');

            // mark saturday
            if (new Date(year, month-1, i+1).getDay() === 6) {
                div.classList.add('weekend-sat');
            }
            // mark sunday
            if (new Date(year, month-1, i+1).getDay() === 0) {
                div.classList.add('weekend-sun');
            }

            addStyle = (i + 1 === day && month == monthNow + 1) ? ' style="background-color: rgb(0, 200, 255)"' : ''
            div.innerHTML = i >= 0 ? `
                <div class="item-info" data-day=${i + 1}>
                    <p${addStyle}>${i + 1}</p>
                    <p class="workTime">00:00</p>
                </div>
            ` : '';
            
            container.appendChild(div);
        }
        return container;
    }

    static adjustTime(prevTime, timeFrom, timeTo) {
        // split string to array [hh, mm]
        prevTime = prevTime.split(':');
        timeFrom = timeFrom.split(':');
        timeTo = timeTo.split(':');

        // ms values
        const dateFrom = new Date(0, 0, 1, timeFrom[0], timeFrom[1], 0);
        const dateTo = new Date(0, 0, 1, timeTo[0], timeTo[1], 0);

        const seconds = (dateTo - dateFrom) / 1000;
        let minutes = seconds / 60;
        let hours = Math.floor(minutes / 60);

        // get rest of minutes
        minutes = minutes % 60;

        let totalHrs = parseInt(prevTime[0]) + hours;
        let totalMin = parseInt(prevTime[1]) + minutes;

        // format time
        totalMin = totalMin < 10 ? `0${totalMin}` : totalMin;
        totalHrs = totalHrs < 10 ? `0${totalHrs}` : totalHrs;

        return `${totalHrs}:${totalMin}`;
    }

    static adjustSumWork(sum, addValue) {
        // sum      120:00
        // addValue 8:00
        sum = sum.split(':');
        addValue = addValue.split(':');

        let hours = 0;
        let minutes = parseInt(sum[1]) + parseInt(addValue[1]);

        if (minutes >= 60) {
            minutes = minutes - 60;
            hours += 1;
        }

        hours = parseInt(sum[0]) + parseInt(addValue[0]) + hours;

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${hours}:${minutes}`;
    }

    static addActivity(record) {
        // get day of record
        const recordDay = parseInt(record.date.substr(-2, 2));
        const theDay = document.querySelectorAll(`[data-day="${recordDay}"]`);
        const sumWorkTime = document.getElementById('sum-work-time');

        theDay.forEach(day => {
            const newActivity = document.createElement('div');
            newActivity.classList.add('item-type');
            newActivity.classList.add('d-flex');
            newActivity.classList.add('justify-content-between');
            newActivity.dataset.id = `${record.type}-${record.id}`;

            if (record.type === 'W') {
                newActivity.classList.add('type-work');
                newActivity.innerHTML = `
                    <div style="font-weight: 700;">Praca</div>
                    <div class="control-btn">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div class="item-tooltip">
                        <p>${record.superior}</p>
                        <p>${record.proj_code}</p>
                        <p>${record.work_from.substr(0, 5)} - ${record.work_to.substr(0, 5)}</p>
                    </div>
                `;
            }
            if (record.type === 'T') {
                newActivity.classList.add('type-travel');
                newActivity.innerHTML = `
                    <div style="font-weight: 700;">Podróż</div>
                    <div class="control-btn">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div class="item-tooltip">
                        <p>${record.superior}</p>
                        <p>${record.proj_code}</p>
                        <p>${record.work_from.substr(0, 5)} - ${record.work_to.substr(0, 5)}</p>
                        <p>${record.transport}</p>
                    </div>
                `;
            }
            if (record.type === 'A') {
                newActivity.classList.add('type-absence');
                newActivity.innerHTML = `
                    <div style="font-weight: 700;">Nieobecność</div>
                    <div class="control-btn">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div class="item-tooltip">
                        <p>${record.superior}</p>
                        <p>${record.absence}</p>
                        <p>${record.work_from.substr(0, 5)} - ${record.work_to.substr(0, 5)}</p>
                    </div>
                `;
            }

            // adjust time in day segment
            day.children[1].innerText = this.adjustTime(day.children[1].innerText, record.work_from, record.work_to);
            sumWorkTime.innerText = this.adjustSumWork(sumWorkTime.innerText, day.children[1].innerText);

            // add created div to grid
            day.parentElement.appendChild(newActivity);
        });
    }

    /**
     * 
     * @param {string} activity 'W'...
     * @param {object} record 
     */
    static showActivityFields(activity, record = null) {
        // select activity fields
        const workFields = document.querySelectorAll('.work');
        const travelFields = document.querySelectorAll('.travel');
        const absenceFields = document.querySelectorAll('.absence');

        let fieldObj = null;

        // hide all selection fields
        workFields.forEach(field => {
            field.classList.add('hide');
        });
        travelFields.forEach(field => {
            field.classList.add('hide');
        });
        absenceFields.forEach(field => {
            field.classList.add('hide');
        });

        if (activity === 'W') {
            workFields.forEach(field => {
                field.classList.remove('hide');
            });

            fieldObj = new AddItemWork();
        }
        if (activity === 'T') {
            travelFields.forEach(field => {
                field.classList.remove('hide');
            });

            fieldObj = new AddItemTravel();
        }
        if (activity === 'A') {
            absenceFields.forEach(field => {
                field.classList.remove('hide');
            });

            fieldObj = new AddItemAbsence();
        }

        if (record !== null) {
            fieldObj.writeValuesFromRecord(fieldObj, record);
        }
    }

    static updateSelectionFields(field, fieldData) {
        fieldData.forEach(item => {
            const newOption = document.createElement('option');
            newOption.value = item.name;
            newOption.innerText = item.name;
            field.appendChild(newOption);
        });
    }
}
