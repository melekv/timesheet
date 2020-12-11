export default class Data {
    static async getRecordsActualMonth(year, month, type) {
        let response = await fetch(`/data/${type}/${year}-${month}`).catch(Data.handleErr);
        let data = await response.json();
        return data;
    }

    static handleErr(err) {
        console.log(err);
        let resp = new Response(JSON.stringify({
            code: 400,
            msg: 'error'
        }));
        return resp;
    }

    static async getFieldValues(fieldName) {
        let response = await fetch(`/fields/${fieldName}`);
        let data = await response.json();
        return data;
    }

    static async storeDB(fields) {
        const response = await fetch(`/data/${fields.type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fields)
        });
    
        const data = await response.json();
        return data;
    }

    static async updateDB(fields) {
        const response = await fetch(`/data/${fields.type}/${fields.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fields)
        });
    
        const data = await response.json();
        return data;
    }

    static async deleteRecord(type, id) {
        let response = await fetch(`/data/delete/${type}/${id}`, {method: 'DELETE'});

        let resp = await response.json();
        return resp;
    }
}