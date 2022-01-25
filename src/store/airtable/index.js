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
                let data = {};
                for(let res in response) {
                    data[response[res].id] = {
                        'Name': response[res].fields['Name'],
                        'Amounts': response[res].fields['Amounts'],
                        'Coins': response[res].fields['Coins'],
                        'MarketPrice': response[res].fields['Market Price'],
                        'MarketValue': response[res].fields['Market Value'],
                        'ProfitsUsd': response[res].fields['Profits $'],
                        'ProfitsPer': response[res].fields['Profits %'],
                        'App': response[res].fields['App'],
                        'PriceName': response[res].fields['Price Name'],
                        'BuyPrice': response[res].fields['Buy Price']
                    }
                }
                console.log(data);
                commit('UPDATEDATA', data);
            },
            function done(err) {
                if(err) { console.error(err); return; }
            });
        },

        createTransactionBuy({commit, state}, info){
            airtableBase('Transaction Buy').create([{
                "fields": {
                    "Name": info.coinName,
                    "Amounts": info.amounts,
                    "Coins": info.quantity,
                    "Platform": info.platform,
                    "Coins ID": info.id,
                }
            }],
            function(err, records) {
                if(err) { console.error(err); return; }
                records.forEach(function (record) { console.log(record.getId()); });
            });
            airtableBase('Wallet').update([{
                "id": info.id,
                "fields": {
                    "Amounts": state.data[info.id].Amounts + info.amounts,
                    "Coins": state.data[info.id].Coins + info.quantity ,
                }
            }],
            function(err, records) {
                if(err) { console.error(err); return; }
                records.forEach(function (record) { console.log(record.getId()); });
            });
            commit('UPDATEFIELD', info);
        },

        createTransactionSell({commit, state}, info) {
            console.log(info);
            airtableBase('Transaction Sell').create([{
                "fields": {
                    "Name": info.coinName,
                    "Amounts": info.amounts,
                    "Coins": info.quantity,
                    "Coins ID": info.id,
                    "Platform": info.platform,
                    "Stable Coin": info.stableCoin,
                    "Stable ID": info.stableID,
                }
            }],
            function(err, records) {
                if(err) { console.error(err); return; }
                records.forEach(function (record) { console.log(record.getId()); });
            });
            airtableBase('Wallet').update([
                {
                    "id": info.id,
                    "fields": {
                        "Amounts": state.data[info.id].Amounts - info.amounts,
                        "Coins": state.data[info.id].Coins - info.quantity ,
                    },
                },
                {
                    "id": info.stableID,
                    "fields": {
                        "Amounts": state.data[info.stableID].Amounts + info.amounts,
                        "Coins": state.data[info.stableID].Coins + info.amounts ,
                    },
                },
            ],
            function(err, records) {
                if(err) { console.error(err); return; }
                records.forEach(function (record) { console.log(record.getId()); });
            });
            commit('UPDATEFIELD2', info);
        },
    },
    mutations: {
        UPDATEDATA(state, data) {
            state.data = data;
            state.loadData = true;
        },
        UPDATEFIELD(state, info) {
            console.log('Update Field');
            state.data[info.id].Amounts += info['amounts'];
            state.data[info.id].Coins += info['quantity'];
        },
        UPDATEFIELD2(state, info) {
            console.log('Update Field 2');
            state.data[info.id].Amounts -= info['amounts'];
            state.data[info.id].Coins -= info['quantity'];
            state.data[info.stableID].Amounts += info['amounts'];
            state.data[info.stableID].Coins += info['quantity'];
        },
    }
}
