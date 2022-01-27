<template lang="html">
    <div id="transactionList">
        <section class="listViews">
            <h2>Mes Actifs</h2>
            <div class="rows">
                <h3>Nom</h3>
                <h3>Prix</h3>
                <h3>Avoirs</h3>
                <h3>Valeur</h3>
                <h3>Profits/Pertes</h3>
            </div>
            <div class="rows" v-for="(row, id) in this.data" v-bind:key="row.Name">
                {{ id }}
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

        },
    }
</script>

<style lang="css" scoped>
    #transactionList {

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
</style>
