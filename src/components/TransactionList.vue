<template lang="html">
    <div id="transactionList">
        <section class="listViews">
            <h2>Mes Actifs</h2>
            <div class="rows">
                <h3>Nom</h3>
                <h3>Date</h3>
                <h3>Amount / Coin</h3>
                <h3>Stable / SellPrice</h3>
                <h3>Plateform</h3>
            </div>
            <div class="rows" v-for="row in this.data" v-bind:key="row.Date">
                <div class="rowName">
                    <img :src="getImgUrl(row.Name)" alt="">
                    <h3>{{ row.Name }}</h3>
                </div>
                <div class="items">
                    <h3> {{ new Date(row.Date).toLocaleDateString('fr-FR') }} </h3>
                </div>
                <div class="items">
                    <h3>{{ row.Amounts.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</h3>
                    <span>{{ row.StableCoin }}</span>
                </div>
                <div class="items">
                    <h3>{{ row.SellPrice.toLocaleString('fr-FR', {maximumFractionDigits: 2}) }} $</h3>
                    <span>{{ row.Coins.toLocaleString('fr-FR', {maximumFractionDigits: 3}) }} {{ row.Name }}</span>
                </div>
                <div class="items">
                    <h3> {{ row.Platform }} </h3>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'TransactionList',
        props: ['data'],
        data() {
            return {

            }
        },
        methods: {
            getImgUrl(pic) {
                return require('../assets/crypto/'+pic+'.png')
            },
        },
    }
</script>

<style lang="css" scoped>
    #transactionList {

    }

    img {
        width: 50%;
        max-width: 80px;
    }

    span {
        color: #888;
        font-weight: bold;
        font-size: 13px;
    }

    .listViews {
        display: grid;
        grid-template-columns: 1fr;
    }

    .listViews .rows {
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        justify-items: center;
        border-bottom: 1px solid #888;
        border-radius: 10px;
        transition: 0.2s;
        cursor: pointer;
    }

    .listViews .rows:hover {
        background: #CCC;
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
</style>
