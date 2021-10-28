export default {
    namespaced: true,
    state() {
        return {
            user: {
                firstName: null,
                lastName: null,
                email: null,
                membership: 'regular',
                phones: [],
                sam: true,
            },
            phonesFields: [
                {
                    type: 'work',
                    label: 'Work',
                    fullLabel: 'Work Phone',
                    value: null,
                    isSelected: true,
                    sortNumber: 1,
                },
                {
                    type: 'home',
                    label: 'Home',
                    fullLabel: 'Home Phone',
                    value: null,
                    isSelected: false,
                    sortNumber: 2,
                },
                {
                    type: 'mobile',
                    label: 'Mobile',
                    fullLabel: 'Mobile Phone',
                    value: null,
                    isSelected: false,
                    sortNumber: 3,
                },
                {
                    type: 'main',
                    label: 'Main',
                    fullLabel: 'Main Phone',
                    value: null,
                    isSelected: false,
                    sortNumber: 4,
                },
                {
                    type: 'other',
                    label: 'Other',
                    fullLabel: 'Other Phone',
                    value: null,
                    isSelected: false,
                    sortNumber: 5,
                },
            ],
            form: [],
        }
    },
    mutations: {
        setMembership(state, data) {
            state.user.membership = data.value;
        },
        setForm(state, data){
            state.form = [data.value]
        },
    },
    getters: {
        getForm(state) {
            return state.form;
        },

        user(state) {
            return state.user;
        },
    }
}
