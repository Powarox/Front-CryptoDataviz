<template lang="html">
    <div id="overview">
        wallet
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Overview',
        data() {
            return {
                data: {},
                loading: true,
                errored: false,
            }
        },
        methods: {
            ...mapActions([
                'updateData', 'addMessage', 'addFeedback', 'delFeedback',
            ]),
            ...mapGetters([
                'getData', 'getFeedback', 'getMessage',
            ]),
        },
    }
</script>

<style lang="css" scoped>
    #overview {
        padding: 30px;
    }
</style>
