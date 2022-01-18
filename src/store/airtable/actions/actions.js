import airtableBase from "@/api/Airtable";

export function fetchDataBase({commit}) {
    airtableBase('Wallet').select({
        view: "Grid view"
    }).eachPage(response => {
        let data = [];
        for(let res in response) {
            data[res] = {
                'Name': response[res].fields['Name'],
                'Amounts': response[res].fields['Amounts'],
                'Coins': response[res].fields['Coins'],
                'MarketPrice': response[res].fields['Market Price'],
                'MarketValue': response[res].fields['Market Value'],
                'ProfitsUsd': response[res].fields['Profits $'],
                'ProfitsPer': response[res].fields['Profits %'],
                'App': response[res].fields['App'][0],
                'id': response[res].fields['id'],
            }
        }
        commit('UPDATEDATA', data);
    },
    function done(err) {
        if(err) { console.error(err); return; }
    });
}

// --- Feedback ---
export function addMessage({commit}, mess) {
    commit('ADDMESSAGE', mess);
}

export function addLoading({commit}) {
    commit('ADDLOADING');
}

export function delLoading({commit}) {
    commit('DELLOADING');
}

export function addFeedback({commit}) {
    commit('ADDFEEDBACK');
}

export function delFeedback({commit}) {
    commit('DELFEEDBACK');
}
