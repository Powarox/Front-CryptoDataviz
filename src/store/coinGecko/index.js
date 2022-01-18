import CoinGecko from 'coingecko-api';

export default {
    state() {
        return {
            price: {},
        }
    },
    getters: {
        getPrice(state) {
            return state.price;
        },
    },
    actions: {
        fetchPrice({commit}){
            const CoinGeckoClient = new CoinGecko();
            let func = async() => {
                let data = await CoinGeckoClient.simple.price({
                    ids: ['swissborg', 'the-graph', 'ripple', 'polkadot', 'chiliz', 'matic-network', 'mimo-parallel-governance-token', 'enjincoin', 'Uniswap', 'republic-protocol', 'utrust', 'kyber-network', 'chainlink', 'audiocoin', 'binancecoin', 'aave', 'compound-governance-token', 'qtum', 'lisk', 'tron', 'cosmos', 'eos', 'icon', 'ethereum-classic', 'cardano', 'kava', 'stellar', 'vechain', 'bittorrent-2', 'ankr', 'zilliqa', 'pancakeswap-token', 'theta-token'],
                    vs_currencies: ['usd'],
                });
                commit('UPDATEPRICE', data);
            };
            func();
        },
    },
    mutations: {
        UPDATEPRICE(state, price) {
            state.price = price;
        },
    }
}