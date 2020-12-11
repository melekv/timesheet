import AddItem from './addItem.js'

export default class AddItemAbsence extends AddItem {
    constructor() {
        super();
        this.activity = 'A';

        this.absence = document.getElementById('add-item-absence');

        this.dataRequired = [
            this.date, this.type, this.superior, this.workFrom, this.workTo, this.absence
        ];
    }

    getValues(id) {
        return {
            id: id,
            date: this.date.value,
            type: 'A',
            superior: this.superior.value,
            absence: this.absence.value,
            workFrom: this.workFrom.value,
            workTo: this.workTo.value
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

        fieldObj.absence.value = record.absence;
    }
}
