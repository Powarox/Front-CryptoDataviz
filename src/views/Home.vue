<template lang="html">
    <div id="home">
        content
    </div>
</template>

<script>
    // import axios from "axios";
    import Airtable from "airtable";

    export default {
        name: 'Home',
        data() {
            return {
                data: {},
                loading: true,
                errored: false,
            }
        },
        methods: {

        },
        mounted() {
            const base = new Airtable({apiKey: 'keyninpGxob6oPycb'}).base('appuxrEpFcUYHpYGu');
            base('Wallet').select({
                // Selecting the first 3 records in Grid view:
                maxRecords: 3,
                view: "Grid view"
            }).eachPage(response => {
                console.log(response);
                // records.forEach(function(record) {
                //     console.log('Retrieved', record.get('Name'));
                // });
                // fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });

            // axios
            //     .get('')
            //     .then(response => {
            //         console.log(response.data.records);
            //     })
            //     .catch(error => {
            //         console.log(error)
            //         this.errored = true
            //     })
            //     .finally(() => this.loading = false)
        }
    }
</script>

<style lang="css" scoped>
    #home {
        padding: 30px;
    }
</style>
