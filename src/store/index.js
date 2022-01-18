import {createStore} from 'vuex';

import airtable from './airtable';
import coinGecko from './coinGecko';

export const store = createStore({
    debug : true,
    modules: {
        airtable,
        coinGecko,
      },
 })
