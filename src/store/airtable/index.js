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
        updateDataBaseField({commit}) {
            airtableBase('Wallet').update([
                {
                    "id": "recaFYnnYfo4oXulG",
                    "fields": {
                        "Name": "CHSB",
                        "Amounts": 465,
                        "Coins": 775.2,
                        "App": [
                            "SwissBorg"
                        ],
                        "Market Value": 0,
                        "Market Price": 0,
                        "Profits $": 0,
                        "Profits %": 0,
                        "id": "swissborg"
                    }
                }
            ],
            function(err, records) {
                if(err) { console.error(err); return; }
                records.forEach(function(record) {
                    console.log(record.get('App'));
                });
            });
            commit('UPDATEFIELD');
        }
    },
    mutations: {
        UPDATEDATA(state, data) {
            state.data = data;
            state.loadData = true;
        },
        UPDATEFIELD(state) {
            console.log(state.data);
        },
    }
}
