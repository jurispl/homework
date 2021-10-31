export default {
    computed: {
        group() {
            const group = {};
            const form = JSON.parse(JSON.stringify(this.getForm));

            form.forEach(elm => {
                group[elm.fieldGroup.id] = elm;
            });
            return group;
        },
    },
    methods: {
        fromStore(id) {
            if (this.group[id]) {
                return this.group[id];
            } else {
                return {};
            }
        },
        formValidation(refGroup) {
            let isValid = true;
            refGroup.fields.forEach(field => {
                if (field.required && (field.value === null || field.value.length === 0)) {
                    field.classState = 'error';
                    isValid = false;
                } else if (field.required) {
                    field.classState = '';
                }
            });
            return isValid;
        },
    },
}
