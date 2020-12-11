import AddItem from './addItem.js'

export default class AddItemWork extends AddItem {
    constructor() {
        super();
        this.activity = 'W';

        this.description = document.getElementById('add-item-description');
        this.placeStart = document.getElementById('add-item-place-start');
        this.cityStart = document.getElementById('add-item-city-start');
        this.countryStart = document.getElementById('add-item-country-start');
        this.isHoliday = document.getElementById('add-item-holiday');
        this.projCode = document.getElementById('add-item-proj-code');
        this.breakFrom = document.getElementById('add-item-break-from');
        this.breakTo = document.getElementById('add-item-break-to');

        this.dataRequired = [
            this.date, this.type, this.superior, this.workFrom, this.workTo, this.description,
            this.placeStart, this.cityStart, this.countryStart, this.projCode
        ];
    }

    getValues(id) {
        return {
            id: id,
            date: this.date.value,
            type: 'W',
            superior: this.superior.value,
            workFrom: this.workFrom.value,
            workTo: this.workTo.value,
            description: this.description.value,
            placeStart: this.placeStart.value,
            cityStart: this.cityStart.value,
            countryStart: this.countryStart.value,
            isHoliday: this.isHoliday.checked,
            projCode: this.projCode.value,
            breakFrom: this.breakFrom.value,
            breakTo: this.breakTo.value
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
    }
}
