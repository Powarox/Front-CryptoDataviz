import CoinGecko from 'coingecko-api';

export default {
    state() {
        return {
            price: {},
            loadPrice: false,
        }
    },
    getters: {
        getPrice(state) {
            return state.price;
        },
        getLoadPrice(state) {
            return state.loadPrice;
        },
    },
    actions: {
        fetchPrice({commit}){
            const CoinGeckoClient = new CoinGecko();
            let func = async() => {
                let data = await CoinGeckoClient.simple.price({
                    ids: ['swissborg', 'the-graph', 'ripple', 'polkadot', 'chiliz', 'matic-network', 'mimo-parallel-governance-token', 'enjincoin', 'Uniswap', 'republic-protocol', 'utrust', 'kyber-network', 'chainlink', 'audius', 'binancecoin', 'aave', 'compound-governance-token', 'qtum', 'lisk', 'tron', 'cosmos', 'eos', 'icon', 'ethereum-classic', 'cardano', 'kava', 'stellar', 'vechain', 'bittorrent-2', 'ankr', 'zilliqa', 'pancakeswap-token', 'theta-token', 'bitcoin'],
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
            state.loadPrice = true;
        },
    }
}
