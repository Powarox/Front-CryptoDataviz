<template lang="html">
    <div id="home">
        <button @click="test()">test</button>
        <button @click="test2()">test2</button>
    </div>

    <div v-for="(row, k) in this.testd" v-bind:key="row.name" @click="compo(row.name)">
        <li> {{ k }}</li>
        <li>{{ row.name }} </li>
        <li>{{ row.amo }}</li>
    </div>

    <TransactionCard :id="id" :coinName="coinName" v-model:show-component="click"/>
</template>

<script>
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
                coinName: 'BTC',

                id: 'ejrneorfe',
                click: true,
                func: '',

                testd: {
                    'de': {
                        'name' : 'coucou',
                        'amo' : 30,
                    },
                    'dde': {
                        'name' : 'cou=cou',
                        'amo' : 30,
                    }
                }
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
            },
            compo(x){
                this.func = x;
                this.click = true;
            }
        },
    }
</script>

<style lang="css" scoped>
    #home {
        padding: 30px;
    }
</style>
