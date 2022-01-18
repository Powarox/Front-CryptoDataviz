import airtableBase from "@/api/Airtable";

export default {
    state() {
        return {
            data: {},
        };
    },
    getters: {
        getData(state) {
            return state.data;
        }
    },
    actions: {
        fetchDataBase({commit}) {
            console.log('get data from Airtable');
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
    },
    mutations: {
        UPDATEDATA(state, data) {
            state.data = data;
        }
    }
}
