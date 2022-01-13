<script>
    import Airtable from "airtable";
    import { mapActions } from 'vuex';

    export default {
        name: 'Airtable',
        data() {
            return {
                data: {},
            }
        },
        methods: {
            ...mapActions([
                'updateData', 'addMessage', 'addFeedback', 'addLoading', 'delLoading'
            ]),
            updateStore(){
                this.delLoading();
                this.addMessage('Load Success ✔');
                this.addFeedback();
                this.updateData(this.data);
            },
        },
        mounted() {
            const base = new Airtable({apiKey: 'keyninpGxob6oPycb'}).base('appuxrEpFcUYHpYGu');
            base('Wallet').select({
                maxRecords: 3,
                view: "Grid view"
            }).eachPage(response => {
                console.log(response);
                response.forEach(line => {
                    console.log(line.fields);
                })
                // records.forEach(function(record) {
                //     console.log('Retrieved', record.get('Name'));
                // });
                // fetchNextPage();
                this.updateStore();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        }
    }
</script>
