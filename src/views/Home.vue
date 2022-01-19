<template lang="html">
    <div id="home">
        <button @click="test()">test</button>
        <button @click="test2()">test2</button>
    </div>
    <TransactionCard/>
</template>

<script>
    // import axios from "axios";
    // import Airtable from "airtable";
    // import CoinGecko from 'coingecko-api';
    // import coinGeckoRequest from '../api/CoinGecko.js';
    import { mapActions, mapGetters } from 'vuex';
    import TransactionCard from '../components/TransactionCard.vue';

    export default {
        name: 'Home',
        components: {
            TransactionCard,
        },
        data() {
            return {
                data: {},
                loading: true,
                errored: false,
            }
        },
        methods: {
            ...mapActions([
                'updateData', 'updatePrice', 'addMessage', 'addFeedback', 'delFeedback',
            ]),
            ...mapGetters([
                'getData', 'getPrice', 'getFeedback', 'getMessage',
            ]),
            test(){
                this.updatePrice();
            },
            test2(){
                let d = this.getPrice();
                console.log(d);
            }
        },
    }
</script>

<style lang="css" scoped>
    #home {
        padding: 30px;
    }
</style>
