<template lang="html">
    <div id="transactionCard" v-if="showComponent && notClose">
        <h1 @click="test()">Ajouter une transaction</h1>

        <div class="actions">
            <h3 class="item" :class="{active: buy_section}" @click="switchAction('buy_section')">Acheter</h3>
            <h3 class="item" :class="{active: sell_section}" @click="switchAction('sell_section')">Vendre</h3>
            <h3 class="item" :class="{active: exchange_section}" @click="switchAction('exchange_section')">Transférer</h3>
        </div>

        <div class="buySection" v-if="buy_section">
            <select v-model="buy_transaction['platform']">
                <option disabled value="">Plateforme</option>
                <option value="SwissBorg">SwissBorg</option>
                <option value="Binance">Binance</option>
                <option value="Kraken">Kraken</option>
                <option value="Exodus">Exodus</option>
            </select>

            <div class="transaction">
                <div class="quantite">
                    <label for="inp1">Quantité</label>
                    <input id="inp1" type="number" v-model="buy_transaction['quantity']" placeholder="CHSB">
                </div>

                <div class="montant">
                    <label for="inp2">Montant</label>
                    <input id="inp2" type="number" v-model="buy_transaction['amounts']" placeholder="USD">
                </div>
            </div>

            <button @click="transactionBuy()">Ajouter</button>
        </div>

        <div class="sellSection" v-if="sell_section">
            <div class="transaction">
                <div class="quantite">
                    <label for="inp1">Quantité</label>
                    <input id="inp1" type="text" name="" value="" placeholder="CHSB">
                </div>

                <div class="montant">
                    <label for="inp2">Montant</label>
                    <input id="inp2" type="curren" name="" value="" placeholder="USD">
                </div>
            </div>

            <button @click="transactionSell()">Ajouter</button>
        </div>

        <div class="exchangeSection" v-if="exchange_section">
            <select id="pet-select">
                <option disabled value="">Plateforme</option>
                <option value="SwissBorg">SwissBorg</option>
                <option value="Binance">Binance</option>
                <option value="Kraken">Kraken</option>
                <option value="Exodus">Exodus</option>
            </select>
            <select id="pet-select">
                <option disabled value="">Plateforme</option>
                <option value="SwissBorg">SwissBorg</option>
                <option value="Binance">Binance</option>
                <option value="Kraken">Kraken</option>
                <option value="Exodus">Exodus</option>
            </select>
            <div class="transaction">
                <div class="quantite">
                    <label for="inp1">Quantité</label>
                    <input id="inp1" type="text" name="" value="" placeholder="CHSB">
                </div>

                <div class="montant">
                    <label for="inp2">Montant</label>
                    <input id="inp2" type="curren" name="" value="" placeholder="USD">
                </div>
            </div>

            <button @click="transactionExchange()">Ajouter</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'TransactionCard',
        props: ['id', 'coinName', 'showComponent'],
        data() {
            return {
                buy_section: true,
                sell_section: false,
                exchange_section: false,

                notClose: true,

                buy_transaction: { 'id': this.id, 'coinName': this.coinName, 'amounts': 0, 'quantity': 0, 'platform': ''},
                sell_transaction: {},
                exchange_transaction: {},
            }
        },
        methods: {
            ...mapActions([
                'fetchDataBase', 'fetchPrice', 'createTransactionBuy', 'addMessage', 'addFeedback', 'delFeedback'
            ]),

            test(){
                this.notClose = false;
            },

            switchAction(action){
                if(action === 'buy_section'){
                    this.buy_section = true;
                    this.sell_section = false;
                    this.exchange_section = false;

                } else if(action === 'sell_section') {
                    this.buy_section = false;
                    this.sell_section = true;
                    this.exchange_section = false;
                } else {
                    this.buy_section = false;
                    this.sell_section = false;
                    this.exchange_section = true;
                }
            },

            transactionBuy(){
                this.buy_transaction['id'] = this.id;
                this.buy_transaction['coinName'] = this.coinName;
                if(this.buy_transaction['amount'] !== 0 && this.buy_transaction['quantity'] !== 0 && this.buy_transaction['platform'] !== '') {
                    this.createTransactionBuy(this.buy_transaction);
                }
                else {
                    this.addMessage('Champs manquant pour la transaction');
                    this.addFeedback();
                }
            },

            transactionSell(){
                console.log('Sell Transaction');
            },

            transactionExchange(){
                console.log('Exchange Transaction');
            },
        }
    }
</script>

<style lang="css" scoped>
    #transactionCard {
        padding: 20px;
        position: fixed;
        top: 30%;
        left: 40%;
        color: var(--main-white-color);
        background: var(--main-second-color);
        border-radius: 15px;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 25px;
    }

    h1, h3 {
        margin: 0;
    }

    h1 {
        font-size: 20px;
    }

    .close_pop {
        display: none;
    }

    .actions {
        display: flex;
        justify-content: space-around;
        background: #888;
        border-radius: 10px;
    }

    .actions .item {
        width: 100%;
        padding: 10px;
        text-align: center;
        border-radius: 5px;
        font-size: 15px;
        transition: 0.3s;
        cursor: pointer;
    }

    .actions .item:hover {
        background: #555;
    }

    .actions .active {
        background: #555;
    }

    .buySection, .sellSection, .exchangeSection {
        display: grid;
        grid-gap: 25px;
    }

    .transaction {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    .transaction label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    .quantite, .montant {
        display: grid;
    }

    select {
        height: 30px;
        color: var(--main-white-color);
        background: var(--main-second-color);
        /* border: 2px solid var(--main-grey-color); */
        border-radius: 5px;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
    }

    select:focus {
        outline: none;
        color: var(--main-white-color);
        background: var(--main-second-color);
        /* border: 2px solid var(--main-grey-color); */
    }

    input {
        height: 30px;
        width: 150px;
        color: var(--main-white-color);
        background: var(--main-second-color);
        border: 2px solid var(--main-white-color);
        border-radius: 5px;
        font-size: 17px;
    }

    input:focus {
        outline: none;
        border: 2px solid var(--main-first-color);
        box-shadow: 0 0 5px var(--main-first-color);
    }

    button {
        padding: 10px;
        color: var(--main-white-color);
        background: var(--main-first-color);
        border: 1px solid var(--main-first-color);
        border-radius: 10px;
        font-weight: bold;
        font-size: 18px;
        transition: 0.3s;
        cursor: pointer;
    }

    button:hover {
        color: var(--main-first-color);
        background: var(--main-white-color);
        border: 1px solid var(--main-white-color);
    }
</style>
