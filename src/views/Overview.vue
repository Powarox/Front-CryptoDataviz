<template lang="html">
    <div id="overview">
        <button @click="findWallet()">load</button>

        <section class="views">
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
            <div class="rows"  v-for="row in this.data" v-bind:key="row.Name">
                <div class="cryptoName">
                    <img :src="getImgUrl(row.Name)" alt="">
                    <h3>{{ row.Name }}</h3>
                </div>
                <h3>{{ row.Amounts.toLocaleString('fr-FR') }} $</h3>
                <h3>{{ row.Coins.toLocaleString('fr-FR') }}</h3>
                <h3>{{ row.MarketPrice.toLocaleString('fr-FR') }} $</h3>
                <h3>{{ row.MarketValue.toLocaleString('fr-FR') }} $</h3>
                <h3>{{ row.ProfitsUsd.toLocaleString('fr-FR') }} $</h3>
                <h3>{{ row.ProfitsPer.toLocaleString('fr-FR') }} %</h3>
                <h3>{{ row.App }}</h3>
            </div>
        </section>

        <section class="">

        </section>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Overview',
        data() {
            return {
                data: {},
                img: 'ADA.png',
                succes: false,
            }
        },
        methods: {
            ...mapActions([
                'updateData', 'addMessage', 'addFeedback', 'delFeedback',
            ]),
            ...mapGetters([
                'getData', 'getFeedback', 'getMessage',
            ]),
            findWallet() {
                this.data = this.getData();
                console.log(this.data);
                for(let rows in this.data){
                    this.data[rows].MarketValue = this.data[rows].MarketPrice * this.data[rows].Coins;
                    this.data[rows].ProfitsUsd = this.data[rows].MarketValue - this.data[rows].Amounts;
                    this.data[rows].ProfitsPer = (this.data[rows].MarketValue / this.data[rows].Amounts - 1)*100;
                }
            },
            getImgUrl(pic) {
                return require('../assets/crypto/'+pic+'.png')
            },
        },
        computed: {
        }
    }
</script>

<style lang="css" scoped>
    #overview {
        padding: 30px;
        display: grid;
        grid-template-columns: 1fr;
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
