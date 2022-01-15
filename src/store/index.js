import {createStore} from 'vuex';

import api from './api';
import data from './data';

export const store = createStore({
    debug : true,
    modules: {
        api,
        data
      },
 })
