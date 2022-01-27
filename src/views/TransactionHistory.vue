<template lang="html">
    <div id="transactionHistory">
        <h2>Historique des transactions</h2>
        <TransactionList></TransactionList>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import TransactionList from '../components/TransactionList.vue';

    export default {
        name: 'TransactionHistory',
        components: {
            TransactionList,
        },
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {
            ...mapGetters([
                'getLoadData', 'getLoadPrice', 'getData'
            ]),
        }
    }
</script>

<style lang="css" scoped>
    #transactionHistory {
        padding: 30px;
    }
</style>
