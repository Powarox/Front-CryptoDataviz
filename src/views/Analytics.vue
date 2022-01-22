<template lang="html">
    <div id="analytics">
        <h2>Analytics</h2>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Analytics',
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
    #analytics {
        padding: 30px;
    }
</style>
