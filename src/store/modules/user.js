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
            },


        }
    },
    mutations: {
        setFirstName(state, data) {
            state.user.firstName = data.value;
        },
        setLastName(state, data) {
            state.user.lastName = data.value;
        },
        setEmail(state, data) {
            state.user.email = data.value;
        },
        setMembership(state, data) {
            state.user.membership = data.value;
        },
        addPhone(state, data) {
            state.user.phones.push(data)
        },
        deletePhones(state) {
            state.user.phones = [];
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        phonesList(state) {
            return state.user.phones;
        }
    }
}
