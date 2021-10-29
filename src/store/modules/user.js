export default {
    namespaced: true,
    state() {
        return {
            form: [],
        }
    },
    mutations: {
        setForm(state, data) {
           const idx = state.form.findIndex(i => i.fieldGroup.id === data.value.fieldGroup.id)
            if(idx !== -1){
                state.form[idx] = data.value;
            } else {
                state.form.push(data.value)
            }
        },
    },
    getters: {
        getForm(state) {
            return state.form;
        },
    }
}
