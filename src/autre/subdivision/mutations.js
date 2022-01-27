
export function updateData(state, data) {
    state.data = data;
    state.loadData = true;
}

export function updateDataSell(state, data) {
    state.dataSell = data;
}

export function updateBuyTransaction(state, info) {
    state.data[info.id].Amounts += info['amounts'];
    state.data[info.id].Coins += info['quantity'];
}

export function updateSellTransaction(state, info) {
    state.data[info.id].Amounts -= info['amounts'];
    state.data[info.id].Coins -= info['quantity'];
    state.data[info.stableID].Amounts += info['amounts'];
    state.data[info.stableID].Coins += info['quantity'];
}
