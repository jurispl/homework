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
    },
}
