<template lang="html">
    <div id="overview">
        <button @click="test()">load</button>

        <WalletList :data="this.data" v-if="loading"/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import WalletList from '../components/WalletList.vue'

    export default {
        name: 'Overview',
        components: {
            WalletList,
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
            data() {
                return this.getData;
            },
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
</style>
