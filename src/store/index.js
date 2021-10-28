import {createStore, createLogger} from 'vuex'
import userModule from './modules/user'

export default createStore({
    plugins: [createLogger()],
    modules: {
        user: userModule,
    }
});
