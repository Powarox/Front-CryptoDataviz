import {createStore} from 'vuex'

import data from './data'
import api from './api'

export const store = createStore({
    debug : true,
    modules: {
        api,
        data
      },
 })
