import {createStore} from 'vuex';

import airtable from './airtable';
import coinGecko from './coinGecko';
import feedback from './feedback';

export const store = createStore({
    debug : true,
    modules: {
        airtable,
        coinGecko,
        feedback,
      },
 })
