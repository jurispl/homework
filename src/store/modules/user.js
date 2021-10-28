export default {
    namespaced: true,
    state() {
        return {
            firstName: null,
            lastName: null,
            user: {
                firstName: null,
                lastName: null,
                email: null,
                membership: 'regular',
                phones: [],
                sam: true,
            },
            showData: true,
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
            news: [],
            form: {},
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
        },
        setField(state, data) {
            console.log('this.formData', data.type, data.value);
            state.user[data.type] = data.value;
        },
        togglerSam(state) {
            state.showData = !state.showData;
        },
        addNews(state, data) {
            console.log(data.news)
            state.news = [...data.news];
            // state.news.push({label: data.label, value: data.value})
        },
        setForm(state, data){
            state.form = {...data.value}
        },
    },
    getters: {
        getForm(state) {
            return state.form;
        },
        firstNameM(state) {
            return state.firstName;
        },
        lastNameM(state) {
            return state.lastName;
        },
        user(state) {
            return state.user;
        },
        showData(state) {
            return state.showData;
        },
        phonesFields(state) {
            return state.phonesFields;
        },
        selectedPhones(state) {
            return state.phonesFields.filter(elm => elm.isSelected);
        }
    }
}
