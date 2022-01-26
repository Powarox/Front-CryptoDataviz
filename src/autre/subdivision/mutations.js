
export function UPDATEDATA(state, data) {
    state.data = data;
    state.loadData = true;
}

export function UPDATEFIELD(state, info) {
    state.data[info.id].Amounts += info['amounts'];
    state.data[info.id].Coins += info['quantity'];
}

export function UPDATEFIELD2(state, info) {
    state.data[info.id].Amounts -= info['amounts'];
    state.data[info.id].Coins -= info['quantity'];
    state.data[info.stableID].Amounts += info['amounts'];
    state.data[info.stableID].Coins += info['quantity'];
}
