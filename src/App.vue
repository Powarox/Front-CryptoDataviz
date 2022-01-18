<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
    <div id="app">
        <nav class="navigation">
            <section class="nav">
                <router-link to="/" id="logo">
                    <img src="./assets/logo.png" alt="Logo">
                    <p>CryptoWallet</p>
                </router-link>
                <router-link to="/"><i class="fas fa-wallet"></i> Wallet</router-link>
                <router-link to="/Overview"><i class="far fa-chart-bar"></i> Overview</router-link>
                <router-link to="/Overview"><i class="fas fa-chart-pie"></i> Analytics</router-link>
                <router-link to="/Overview"><i class="fas fa-exchange-alt"></i> Transaction</router-link>
                <router-link to="/Overview"><i class="fas fa-history"></i> History</router-link>
            </section>
            <section class="connexion" @click="addFeed()">
                <router-link to=""><i class="fas fa-wallet"></i> Connect Wallet</router-link>
            </section>
        </nav>

        <main class="main">
            <Feedback @click="delFeed()"/>
            <router-view/>
        </main>

        <footer class="footer">
            <Footer/>
        </footer>
    </div>
</template>

<script>
    // import Airtable from './api/Airtable.vue';
    // import CoinGecko from './api/CoinGecko.vue';
    import Footer from './components/Footer.vue';
    import Feedback from './components/Feedback.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'App',
        // mixins: [Airtable],
        components: {
            Footer, Feedback,
        },
        // beforeMount() {
        //     this.fetchDataBase();
        //     this.updatePrice();
        // },
        methods: {
            ...mapActions([
                'updatePrice',
            ]),
            ...mapGetters([
                'fetchPrice',
            ]),
            ...mapActions('airtable', [
                'fetchDataBase', 'addMessage', 'addFeedback', 'delFeedback',
            ]),
            ...mapGetters('airtable', [
                'getData', 'getPrice', 'getFeedback', 'getMessage', 'getLoading'
            ]),

            addFeed(){
                this.addMessage('En cours de developpement...');
                this.addFeedback();
            },
            delFeed(){
                this.delFeedback();
            },
        }
    }
</script>

<style>
    :root {
        --main-first-color: #41B883;
        --main-second-color: #35495E;

        --main-red-color: #FB565E;
        --main-blue-color: #348AF4;
        --main-grey-color: #333;
        --main-white-color: #FFF;
        --main-green-color: #499F68;
        --main-yellow-color: #FFCF60;

        --main-dark-blue-color: #2c3e50;
        --main-body-color: #E2FAE9;
        /* #E2FAE9 */
        /* #E2FAE2 */
        /* #ADF1CF */
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: var(--main-dark-blue-color);
        margin: 0;
    }

    body { margin: 0; }

    .navigation {
        height: 100vh;
        margin: 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: var(--main-first-color);
        font-weight: bold;
        position: fixed;
    }

    .navigation i {
        margin: 0 5px;
    }

    .navigation a {
        margin: 0 10px;
        padding: 10px 15px;
        text-decoration: none;
        color: #333;
        transition: 0.5s;
    }

    .navigation a:hover {
        background: var(--main-white-color);
        border-radius: 10px;
    }

    .navigation .nav {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .navigation .nav #logo {
        display: flex;
        justify-items: center;
        align-items: center;
        color: var(--main-white-color);
        background: var(--main-second-color);
        border: 3px solid var(--main-second-color);
        border-radius: 10px;
    }

    .navigation .nav #logo:hover {
        color: var(--main-second-color);
        background: var(--main-white-color);
        border: 3px solid var(--main-first-color);
    }

    .navigation .nav #logo img {
        width: 30px;
    }

    .navigation .nav #logo p {
        margin: 0;
        margin-left: 10px;
    }

    .navigation .connexion {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }

    .navigation .connexion a {
        margin: 0 5px;
        padding: 15px;
        border-radius: 10px;
        color: var(--main-second-color);
        background: var(--main-white-color);
        transition: 0.7s;
        cursor: pointer;
    }

    .navigation .connexion a:hover {
        color: var(--main-white-color);
        background: var(--main-second-color);
    }


    .main {
        margin-left: 210px;
        background: var(--main-body-color);
    }

    .footer {
        display: none;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
