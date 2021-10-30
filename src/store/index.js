import {createStore, createLogger} from 'vuex'
import userModule from './modules/user'
import alertModule from './modules/alert'

export default createStore({
    plugins: [createLogger()],
    modules: {
        user: userModule,
        alert: alertModule
    }
});
