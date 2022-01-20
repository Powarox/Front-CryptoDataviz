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
                console.log(data);
                commit('UPDATEDATA', data);
            },
            function done(err) {
                if(err) { console.error(err); return; }
            });
        },

        addMarketPrice({commit, state}, price){
            let request = [];

            for(let rows in state.data) {
                // console.log(state.data[rows].Identifiant);
                // console.log(price.data[state.data[rows].PriceName].usd);
                request.push({
                    "id": state.data[rows].Identifiant,
                    "fields": {
                        "Market Price": price.data[state.data[rows].PriceName].usd,
                    }
                })
            }

            console.log(request);
            console.log(JSON.stringify(request));

            airtableBase('Wallet').update([

            ],
            function(err, records) {
                if(err) { console.error(err); return; }
                records.forEach(function(record) {
                    console.log(record.get('App'));
                });
            });

            commit('UPDATEFIELD');
        },

        updateDataBaseField({commit}) {
            // {"id":"recaFYnnYfo4oXulG","fields":{"Market Price":0.570981}},
            // {"id":"rec9fPy6pHvg2YXZ3","fields":{"Market Price":0.532108}},
            // {"id":"recqJ79l0wIAZTQZa","fields":{"Market Price":0.747135}},
            // {"id":"recHrFp8C44XSECXS","fields":{"Market Price":24.44}},
            // {"id":"recv0Aspy25Hy6H2g","fields":{"Market Price":0.251772}},
            // {"id":"recEqyZjqhfY9W5GI","fields":{"Market Price":2.11}},
            // {"id":"recpuh39XGbOZmSVW","fields":{"Market Price":0.135174}},
            // {"id":"recs2U4awuObfnwvr","fields":{"Market Price":2.33}},
            // {"id":"reco3crOFPrSWrMcX","fields":{"Market Price":15.69}},
            // {"id":"rechhX6AOxFNAy9BA","fields":{"Market Price":0.43065}},

            // {"id":"recc3ir4SU8DJuq9L","fields":{"Market Price":0.337683}},
            // {"id":"recOqNXzkw8UXhzaV","fields":{"Market Price":1.43}},
            // {"id":"recdfbVDEz2VMFebc","fields":{"Market Price":22.09}},
            // {"id":"recq7e42K49fcZOx4","fields":{"Market Price":0.00042398}},
            // {"id":"recDx75y2S2smTqpH","fields":{"Market Price":473.22}},
            // {"id":"recOyyTNSD38Z5Ctz","fields":{"Market Price":218.17}},
            // {"id":"recZWbxF2m1RsJQs7","fields":{"Market Price":173.42}},
            // {"id":"recTJwpIKcrfFdkt9","fields":{"Market Price":7.56}},
            // {"id":"recktJJBeDLjraBVP","fields":{"Market Price":2.11}},
            // {"id":"recKkyYohR8Lauoxi","fields":{"Market Price":0.06971}},

            // {"id":"rec0tRhyYc6zGuZ1T","fields":{"Market Price":37.39}},
            // {"id":"rec7bpv64JL751XCF","fields":{"Market Price":2.79}},
            // {"id":"recoyhQGaE4ny4yM2","fields":{"Market Price":0.950118}},
            // {"id":"recRUL3Gk8HyqlbSz","fields":{"Market Price":32.19}},
            // {"id":"rec50v3wiIKh7ds2V","fields":{"Market Price":1.41}},
            // {"id":"recCy8qofJsj5Xpu0","fields":{"Market Price":24.44}},
            // {"id":"recfrYdSrbCk0GBes","fields":{"Market Price":4.75}},
            // {"id":"recvNaxkoOzJtyApo","fields":{"Market Price":0.250492}},
            // {"id":"recKNjnjq6VHjMvwf","fields":{"Market Price":0.072818}},
            // {"id":"recJQPbUAOyCLC212","fields":{"Market Price":0.00264975}},

            // {"id":"rectr7ApPyd56KXDn","fields":{"Market Price":0.250492}},
            // {"id":"recow07y5YLA81duY","fields":{"Market Price":0.087356}},
            // {"id":"recmPk6A21yoUG0IZ","fields":{"Market Price":0.06028}},
            // {"id":"recgIw8ImX9VFn8le","fields":{"Market Price":10.82}},
            // {"id":"recbkMwwH9orQmh1c","fields":{"Market Price":4.37}},
            // {"id":"recac875BDxlutbYS","fields":{"Market Price":24.44}},
            // {"id":"recDjIYfWcxwbOwQH","fields":{"Market Price":42346}}
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
