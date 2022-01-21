<template lang="html">
    <div id="overview">
        <button @click="test()">load</button>

        <section class="views" v-if="loading">
            {{ findWallet() }}
            <h2>Mes Actifs</h2>
            <div class="rows">
                <h3>Name</h3>
                <h3>Amounts</h3>
                <h3>Coins</h3>
                <h3>Market Price</h3>
                <h3>Market Value</h3>
                <h3>Profits $</h3>
                <h3>Profits %</h3>
                <h3>App</h3>
            </div>
            <div class="rows" v-for="(row, id) in this.data" v-bind:key="row.Name" @click="popUpTansaction(id, row.Name)">
                <div class="cryptoName">
                    <img :src="getImgUrl(row.Name)" alt="">
                    <h3>{{ row.Name }}</h3>
                </div>
                <h3>{{ row.Amounts.toLocaleString('fr-FR') }} $</h3>
                <h3>{{ row.Coins.toLocaleString('fr-FR') }}</h3>
                <h3>{{ row.MarketPrice.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</h3>
                <h3>{{ row.MarketValue.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</h3>
                <h3 v-if="row.ProfitsUsd < 0 ">
                    <span id="red">{{ row.ProfitsUsd.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</span>
                </h3>
                <h3 v-else>
                    <span id="green">{{ row.ProfitsUsd.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</span>
                </h3>
                <h3 v-if="row.ProfitsUsd < 0 ">
                    <span id="red">{{ row.ProfitsPer.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} %</span>
                </h3>
                <h3 v-else>
                    <span id="green">{{ row.ProfitsPer.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} %</span>
                </h3>
                <h3>{{ row.App }}</h3>
            </div>
        </section>

        <TransactionCard :id="id" :coinName="coinName" :show-component="showComponent"/>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import TransactionCard from '../components/TransactionCard.vue';

    export default {
        name: 'Overview',
        components: {
            TransactionCard,
        },
        data() {
            return {
                data: {},
                price: {},

                id: '',
                coinName: '',
                showComponent: false,
            }
        },
        updated() {
            this.findWallet();
        },
        methods: {
            ...mapActions([
                'fetchDataBase', 'fetchPrice', 'updateDataBaseField', 'addMarketPrice'
            ]),
            ...mapGetters([
                'getData', 'getPrice',
            ]),

            popUpTansaction(id, name) {
                this.id = id;
                this.coinName = name;
                this.showComponent = true;
            },

            findWallet() {
                // this.updateDataBaseField();
                this.data = this.getData();
                this.price = this.getPrice();
                for(let rows in this.data){
                    if(this.price.data[this.data[rows].PriceName] !== undefined){
                        this.data[rows].MarketPrice = this.price.data[this.data[rows].PriceName].usd;
                    }
                //     this.data[rows].MarketValue = this.data[rows].MarketPrice * this.data[rows].Coins;
                //     this.data[rows].ProfitsUsd = this.data[rows].MarketValue - this.data[rows].Amounts;
                //     this.data[rows].ProfitsPer = (this.data[rows].ProfitsPer)+1;
                }
            },

            getImgUrl(pic) {
                return require('../assets/crypto/'+pic+'.png')
            },
        },
        computed: {
            ...mapGetters([
                'getLoadData', 'getLoadPrice',
            ]),
            loading() {
                return this.getLoadData && this.getLoadPrice;
            },
        }
    }
</script>

<style lang="css" scoped>
    #overview {
        padding: 30px;
        display: grid;
        grid-template-columns: 1fr;
    }

    #red {
        color: var(--main-red-color);
    }

    #green {
        color: var(--main-first-color);
    }

    span {
        color: red;
    }

    .views {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;
    }

    .views .rows {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        align-items: center;
        justify-items: center;
        cursor: pointer;
    }

    .views .rows .cryptoName {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
    }

    .views .rows img {
        width: 65%;
    }
</style>
