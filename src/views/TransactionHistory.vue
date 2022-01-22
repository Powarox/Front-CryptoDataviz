<template lang="html">
    <div id="transactionHistory">
        <h2>Historique des transactions</h2>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'TransactionHistory',
        components: {
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
