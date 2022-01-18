import airtableBase from "@/api/Airtable";

export default {
    state() {
        return {
            data: {},
            loadData: false,
        };
    },
    getters: {
        getData(state) {
            return state.data;
        },
        getLoadData(state) {
            return state.loadData;
        },
    },
    actions: {
        fetchDataBase({commit}) {
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
                        'PriceName': response[res].fields['Price Name'],
                        'Identifiant': response[res].id,
                    }
                }
                commit('UPDATEDATA', data);
            },
            function done(err) {
                if(err) { console.error(err); return; }
            });
        },

    },
    mutations: {
        UPDATEDATA(state, data) {
            state.data = data;
            state.loadData = true;
        }
    }
}
