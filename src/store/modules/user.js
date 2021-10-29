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
