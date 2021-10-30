export default {
    namespaced: true,
    state() {
        return {
            alert: {
                show: false,
                title: null,
                text: null,
                type: null,
            },
        }
    },
    mutations: {
        setAlertContent(state, data) {
            state.alert = data.value;
        }
    },
    getters: {
        getAlert(state) {
            return state.alert
        },
    }
}
