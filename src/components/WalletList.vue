<template lang="html">
    <div id="walletList">
        <section class="listViews">
            <!-- {{ findWallet() }} -->
            <h2>Mes Actifs</h2>
            <div class="rows">
                <h3>Nom</h3>
                <h3>Prix</h3>
                <h3>Avoirs</h3>
                    <!-- <h3>Amounts</h3> -->
                    <!-- <h3>Coins</h3> -->
                <h3>Valeur</h3>
                    <!-- <h3>Market Value</h3> -->
                    <!-- <h3>Buy Price</h3> -->
                <h3>Profits/Pertes</h3>
                    <!-- <h3>Profits $</h3> -->
                    <!-- <h3>Profits %</h3> -->
                <!-- <h3>App</h3> -->
            </div>
            <div class="rows" v-for="(row, id) in this.data" v-bind:key="row.Name" @click="popUpTansaction(id, row.Name)">
                <div class="rowName">
                    <img :src="getImgUrl(row.Name)" alt="">
                    <h3>{{ row.Name }}</h3>
                </div>

                <div class="rowPrice">
                    <h3>{{ row.MarketPrice.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</h3>
                </div>

                <div class="rowAvoirs items">
                    <h3>{{ row.Amounts.toLocaleString('fr-FR') }} $</h3>
                    <span>{{ row.Coins.toLocaleString('fr-FR') }} {{ row.Name }}</span>
                </div>

                <div class="rowValue items">
                    <h3>{{ row.MarketValue.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</h3>
                    <span>Buy price $</span>
                </div>

                <div class="rowProfits items" v-if="row.ProfitsUsd > 0">
                    <h3>{{ row.ProfitsUsd.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</h3>
                    <span>{{ row.ProfitsPer.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} %</span>
                </div>

                <div class="rowLosts items" v-else>
                    <h3>{{ row.ProfitsUsd.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</h3>
                    <span>{{ row.ProfitsPer.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} %</span>
                </div>
                <!-- <h3>{{ row.App }}</h3> -->
            </div>

            <TransactionCard :id="id" :coinName="coinName" :show-component="showComponent"/>
        </section>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import TransactionCard from './TransactionCard.vue';

    export default {
        name: 'WalletList',
        props: ['data'],
        components: {
            TransactionCard,
        },
        data() {
            return {
                id: '',
                coinName: '',
                showComponent: false,
            }
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

            // findWallet() {
            //     // this.updateDataBaseField();
            //     this.data = this.getData();
            //     this.price = this.getPrice();
            //     for(let rows in this.data){
            //         if(this.price.data[this.data[rows].PriceName] !== undefined){
            //             this.data[rows].MarketPrice = this.price.data[this.data[rows].PriceName].usd;
            //         }
            //     }
            // },

            getImgUrl(pic) {
                return require('../assets/crypto/'+pic+'.png')
            },
        },
        computed: {

        }
    }
</script>

<style lang="css" scoped>

    #red {
        color: var(--main-red-color);
        color: var(--main-first-color);
    }

    h3 { margin: 0; }
    img { width: 50%; max-width: 80px;}

    span {
        color: #888;
        font-weight: bold;
        font-size: 13px;
    }

    .listViews {
        display: grid;
        grid-template-columns: 1fr;
        /* grid-gap: 10px; */
    }

    .listViews .rows {
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        justify-items: center;
        border-bottom: 1px solid #888;
        cursor: pointer;
    }

    .listViews .rows .rowName {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
    }

    .listViews .rows .items {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .listViews .rows .rowProfits span {
        color: var(--main-first-color);
        font-size: 15px;
    }

    .listViews .rows .rowLosts span {
        color: var(--main-red-color);
        font-size: 15px;

    }


    /* rowName
rowPrice
rowAvoirs
rowValue
rowProfits
rowLosts */
</style>
