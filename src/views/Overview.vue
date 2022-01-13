<template lang="html">
    <div id="overview">
        <button @click="findWallet()">load</button>

        <section class="views">
            <h2>Mes Actifs</h2>
            <div class="filter">
                <h3>Name</h3>
                <h3>Amounts</h3>
                <h3>Coins</h3>
                <h3>Current Price</h3>
                <h3>Market Value</h3>
                <h3>Profits $</h3>
                <h3>Profits %</h3>
                <h3>App</h3>
            </div>
            <div class="rows"  v-for="row in this.data" v-bind:key="row.Name">
                <h3>{{ row.Name }}</h3>
                <h3>{{ row.Amounts }}</h3>
                <h3>{{ row.Coins }}</h3>
                <h3>{{ row.CurrentPrice }}</h3>
                <h3>{{ row.MarketValue }}</h3>
                <h3>{{ row.Profits.toLocaleString('fr-FR') }}</h3>
                <h3>{{ row.ROI }}</h3>
                <h3>{{ row.Apps }}</h3>
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

            findWallet(){
                this.data = this.getData();
                console.log(this.data);
            }
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
    }

    .views .filter {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        align-items: center;
        justify-items: center;
    }

    .views .rows {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        align-items: center;
        justify-items: center;
    }
</style>
