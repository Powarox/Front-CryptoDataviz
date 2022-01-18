import state from './actions/state'
import * as actions from './actions/actions'
import * as getters from './actions/getters'
import * as mutations from './actions/mutations'

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}
