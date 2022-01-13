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
                for(let res in response) {
                    this.data[res] = response[res].fields;
                }
                this.updateStore();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        }
    }
</script>
