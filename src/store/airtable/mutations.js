
export function UPDATEDATA(state, data) {
    state.data = data;
}

export function ADDMESSAGE(state, message) {
    state.message = message;
}

export function ADDLOADING(state) {
    state.loading = false;
}

export function DELLOADING(state) {
    state.loading = true;
}

export function ADDFEEDBACK(state) {
    state.feedback = true;
}

export function DELFEEDBACK(state) {
    state.feedback = false;
}
