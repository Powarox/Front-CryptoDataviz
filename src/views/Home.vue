<template lang="html">
    <div id="home">
        <button @click="test()">test</button>
    </div>
</template>

<script>
    // import axios from "axios";
    // import Airtable from "airtable";
    // import CoinGecko from 'coingecko-api';

    export default {
        name: 'Home',
        data() {
            return {
                data: {},
                loading: true,
                errored: false,
            }
        },
        methods: {
            test(){
                // const CoinGeckoClient = new CoinGecko();
                // let func = async() => {
                //     let data = await CoinGeckoClient.simple.price({
                //         ids: ['swissborg', 'the-graph', 'ripple', 'polkadot', 'chiliz', 'matic-network', 'mimo-parallel-governance-token', 'enjincoin', 'Uniswap', 'republic-protocol', 'utrust', 'kyber-network', 'chainlink', 'audiocoin', 'binancecoin', 'aave', 'compound-usdt', 'qtum', 'lisk', 'tron', 'cosmos', 'eos', 'icon', 'ethereum-classic', 'cardano', 'kava', 'stellar', 'vechain', 'bittorrent-2', 'ankr', 'zilliqa', 'pancakeswap-token', 'theta-token'],
                //         vs_currencies: ['usd'],
                //     });
                //     console.log(data);
                // };
                // func();
            }
        },
    }
</script>

<style lang="css" scoped>
    #home {
        padding: 30px;
    }
</style>
