export default {
    props: {
        getGroupFields: {
            type: Object
        },
    },
    computed: {
        field() {
            const fields = {};
            this.temporaryForm.fields.forEach(field => {
                fields[field.id] = field;
            });
            return fields;
        },
    },
    methods: {
        updateField(id, value) {
            this.field[id].value = value;
        },
    },
    created() {
        if (Object.keys(this.getGroupFields).length) {
            this.temporaryForm = {...this.getGroupFields}
        }
    },
}
