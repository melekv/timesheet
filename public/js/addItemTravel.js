import AddItem from './addItem.js'

export default class AddItemTravel extends AddItem {
    constructor() {
        super();
        this.activity = 'T';

        this.description = document.getElementById('add-item-description');
        this.placeStart = document.getElementById('add-item-place-start');
        this.cityStart = document.getElementById('add-item-city-start');
        this.countryStart = document.getElementById('add-item-country-start');
        this.isHoliday = document.getElementById('add-item-holiday');
        this.projCode = document.getElementById('add-item-proj-code');
        this.breakFrom = document.getElementById('add-item-break-from');
        this.breakTo = document.getElementById('add-item-break-to');

        this.placeStop = document.getElementById('add-item-place-stop');
        this.cityStop = document.getElementById('add-item-city-stop');
        this.countryStop = document.getElementById('add-item-country-stop');
        this.transport = document.getElementById('add-item-transport');
        this.regPlate = document.getElementById('add-item-reg-plate');
        this.personNum = document.getElementById('add-item-person-num');
        this.isDriver = document.getElementById('add-item-driver');
        this.driverFrom = document.getElementById('add-item-driver-from');
        this.driverTo = document.getElementById('add-item-driver-to');

        this.dataRequired = [
            this.date, this.type, this.superior, this.workFrom, this.workTo, this.description, 
            this.placeStart, this.cityStart, this.countryStart, this.projCode,
            this.placeStop, this.cityStop, this.countryStop, this.transport
        ];
    }

    getValues(id) {
        return {
            id: id,
            date: this.date.value,
            type: 'T',
            superior: this.superior.value,
            workFrom: this.workFrom.value,
            workTo: this.workTo.value,
            description: this.description.value,
            placeStart: this.placeStart.value,
            cityStart: this.cityStart.value,
            countryStart: this.countryStart.value,
            isHoliday: this.isHoliday.checked,
            projCode: this.projCode.value,
            placeStop: this.placeStop.value,
            cityStop: this.cityStop.value,
            countryStop: this.countryStop.value,
            transport: this.transport.value,
            regPlate: this.regPlate.value,
            personNum: this.personNum.value,
            isDriver: this.isDriver.checked,
            driverFrom: this.driverFrom.value,
            driverTo: this.driverTo.value
        }
    }

    /**
     * writing the values from DB to the option fields in the side panel
     * @param {object} fieldObj 
     * @param {object} record 
     */
    writeValuesFromRecord(fieldObj, record) {
        fieldObj.superior.value = record.superior;
        fieldObj.workFrom.value = record.work_from;
        fieldObj.workTo.value = record.work_to;

        fieldObj.description.value = record.description;
        fieldObj.placeStart.value = record.place_start;
        fieldObj.cityStart.value = record.city_start;
        fieldObj.countryStart.value = record.country_start;
        fieldObj.projCode.value = record.proj_code;
        fieldObj.breakFrom.value = record.break_from;
        fieldObj.breakTo.value = record.break_to;

        fieldObj.placeStop.value = record.place_stop;
        fieldObj.cityStop.value = record.city_stop;
        fieldObj.countryStop.value = record.country_stop;
        fieldObj.transport.value = record.transport;
        fieldObj.regPlate.value = record.reg_plate;
        fieldObj.personNum.value = record.person_num;
        fieldObj.isDriver.checked = record.is_driver;
        fieldObj.driverFrom.value = record.driver_from;
        fieldObj.driverTo.value = record.driver_to;
    }
}
