<script>
    import CoinGecko from 'coingecko-api';
    import { mapActions } from 'vuex';

    export default {
        name: 'Airtable',
        data() {
            return {
                price: {},
            }
        },
        methods: {
            ...mapActions([
                'updateData', 'updatePrice', 'addMessage', 'addFeedback', 'addLoading', 'delLoading'
            ]),
            updateStore(){
                this.delLoading();
                this.addMessage('Load Success ✔');
                this.addFeedback();
                this.updatePrice(this.price);
            },
        },
        mounted() {
            const CoinGeckoClient = new CoinGecko();
            let func = async() => {
                let data = await CoinGeckoClient.simple.price({
                    ids: ['swissborg', 'the-graph', 'ripple', 'polkadot', 'chiliz', 'matic-network', 'mimo-parallel-governance-token', 'enjincoin', 'Uniswap', 'republic-protocol', 'utrust', 'kyber-network', 'chainlink', 'audiocoin', 'binancecoin', 'aave', 'compound-usdt', 'qtum', 'lisk', 'tron', 'cosmos', 'eos', 'icon', 'ethereum-classic', 'cardano', 'kava', 'stellar', 'vechain', 'bittorrent-2', 'ankr', 'zilliqa', 'pancakeswap-token', 'theta-token'],
                    vs_currencies: ['usd'],
                });
                this.price = data;
                this.updateStore();
            };
            func();
        }
    }
</script>
