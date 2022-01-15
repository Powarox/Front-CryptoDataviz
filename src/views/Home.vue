<template lang="html">
    <div id="home">
        <button @click="test()">test</button>
    </div>
</template>

<script>
    // import axios from "axios";
    // import Airtable from "airtable";
    // import CoinGecko from 'coingecko-api';
    // import coinGeckoRequest from '../api/CoinGecko.js';

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
                // console.log(coinGeckoRequest());
            }
        },
    }
</script>

<style lang="css" scoped>
    #home {
        padding: 30px;
    }
</style>
