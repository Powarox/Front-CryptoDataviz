
export default {
    state() {
        return {
            feedback: false,
            loading: false,
            message: '',
            data: {},
        }
    },

    getters: {
        getData(state) {
            return state.data;
        },
        getFeedback(state) {
            return state.feedback;
        },
        getMessage(state) {
            return state.message;
        },
        getLoading(state) {
            return state.loading;
        },
    },

    actions: {
        updateData({commit}, data){
            commit('UPDATEDATA', data);
        },
        addMessage({commit}, mess){
            commit('ADDMESSAGE', mess);
        },
        addLoading({commit}){
            commit('ADDLOADING');
        },
        delLoading({commit}){
            commit('DELLOADING');
        },
        addFeedback({commit}){
            commit('ADDFEEDBACK');
        },
        delFeedback({commit}){
            commit('DELFEEDBACK');
        },
    },

    mutations: {
        UPDATEDATA(state, data) {
            state.data = data;
        },
        ADDMESSAGE(state, mess) {
            state.message = mess;
        },
        ADDLOADING(state) {
            state.loading = false;
        },
        DELLOADING(state) {
            state.loading = true;
        },
        ADDFEEDBACK(state) {
            state.feedback = true;
        },
        DELFEEDBACK(state){
            state.feedback = false;
        }
    }
}
