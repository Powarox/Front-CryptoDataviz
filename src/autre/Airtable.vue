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
                view: "Grid view"
            }).eachPage(response => {
                for(let res in response) {
                    this.data[res] = {
                        'Name': response[res].fields['Name'],
                        'Amounts': response[res].fields['Amounts'],
                        'Coins': response[res].fields['Coins'],
                        'MarketPrice': response[res].fields['Market Price'],
                        'MarketValue': response[res].fields['Market Value'],
                        'ProfitsUsd': response[res].fields['Profits $'],
                        'ProfitsPer': response[res].fields['Profits %'],
                        'App': response[res].fields['App'][0],
                        'id': response[res].fields['id'],
                    }
                }
                this.updateStore();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        }
    }
</script>
