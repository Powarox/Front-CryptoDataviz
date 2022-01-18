
export default {
    state() {
        return {
            feedback: false,
            message: '',
        }
    },
    getters: {
        getFeedback(state) {
            return state.feedback;
        },
        getMessage(state) {
            return state.message;
        },
    },
    actions: {
        addMessage({commit}, mess) {
            commit('ADDMESSAGE', mess);
        },
        addFeedback({commit}) {
            commit('ADDFEEDBACK');
        },
        delFeedback({commit}) {
            commit('DELFEEDBACK');
        },
    },
    mutations: {
        ADDMESSAGE(state, message) {
            state.message = message;
        },
        ADDFEEDBACK(state) {
            state.feedback = true;
        },
        DELFEEDBACK(state) {
            state.feedback = false;
        },
    }
}
