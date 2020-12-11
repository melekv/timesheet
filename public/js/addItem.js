export default class AddItem {
    constructor() {
        // common fields
        this.type = document.getElementById('add-item-type');
        this.date = document.getElementById('add-item-date');
        this.superior = document.getElementById('add-item-superior');
        this.workFrom = document.getElementById('add-item-work-from');
        this.workTo = document.getElementById('add-item-work-to');
    }

    requiredCheckErr() {
        this.errorRequired = false;

        this.dataRequired.forEach(item => {
            if (item.value == '') {
                item.classList.add('err-required');
                this.errorRequired = true;
            } else {
                item.classList.remove('err-required');
            }
        });

        return this.errorRequired;
    }
}
