<template lang="html">
    <div id="transactionCard">
        <h1>Ajouter une transaction</h1>

        <div class="actions">
            <h3 class="item" :class="{active: buy}" @click="switchAction('buy')">Acheter</h3>
            <h3 class="item" :class="{active: sell}" @click="switchAction('sell')">Vendre</h3>
            <h3 class="item" :class="{active: exch}" @click="switchAction('exch')">Echanger</h3>
        </div>

        <select id="pet-select">
            <option value="">Plateforme</option>
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

        <div class="" v-if="sell">
            Sell wood
        </div>

        <div class="" v-if="exch">
            Exchange
        </div>

        <button type="button" name="button">Ajouter</button>
    </div>
</template>

<script>
    export default {
        name: 'TransactionCard',
        data() {
            return {
                buy: true,
                sell: false,
                exch: false,
            }
        },
        methods: {
            switchAction(action){
                if(action === 'buy'){
                    this.buy = true;
                    this.sell = false;
                    this.exch = false;

                } else if(action === 'sell') {
                    this.buy = false;
                    this.sell = true;
                    this.exch = false;
                } else {
                    this.buy = false;
                    this.sell = false;
                    this.exch = true;
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    #transactionCard {
        padding: 20px;
        position: absolute;
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

    .transaction {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    .transaction label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    .transaction input {
        height: 30px;
        width: 150px;
        color: var(--main-white-color);
        background: var(--main-second-color);
        border: 2px solid var(--main-white-color);
        border-radius: 5px;
        font-size: 17px;
    }

    .transaction input:focus {
        outline: none;
        border: 2px solid var(--main-first-color);
        box-shadow: 0 0 5px var(--main-first-color);
    }

    .quantite, .montant {
        display: grid;
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
