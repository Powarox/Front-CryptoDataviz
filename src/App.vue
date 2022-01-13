<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

    <div id="app">
        <div class="nav">
            <div class="page">
                <router-link to="/" id="logo">
                    <img src="./assets/logo.png" alt="Logo">
                    <p>CryptoWallet</p>
                </router-link>
                <router-link to="/">Wallet</router-link>
                <router-link to="/Overview">Overview</router-link>
                <router-link to="/">Transaction</router-link>
            </div>
        </div>

        <Feedback @click="delFeed()"/>

        <div class="main">
            <router-view/>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Airtable from './api/Airtable.vue';
    import Footer from './components/Footer.vue';
    import Feedback from './components/Feedback.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'App',
        mixins: [Airtable],
        components: {
            Footer, Feedback,
        },
        methods: {
            ...mapActions([
                'updateData', 'addMessage', 'addFeedback', 'delFeedback',
            ]),
            ...mapGetters([
                'getData', 'getFeedback', 'getMessage',
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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--main-dark-blue-color);
        margin: 0;
    }

    body {
        margin: 0;
    }

    /* --- Navigation Bar --- */
    .nav {
        margin: 0;
        padding: 10px;
        display: grid;
        grid-template-columns: 3fr 1fr;
        background: var(--main-first-color);
        font-weight: bold;
    }

    .nav .page {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .nav a {
        margin: 0 10px;
        padding: 10px 20px;
        text-decoration: none;
        color: #333;
        border-bottom: 3px solid var(--main-first-color);
        transition: 0.5s;
    }

    .nav a:hover {
        border-bottom: 3px solid white;
    }

    .nav #logo {
        display: flex;
        justify-items: center;
        align-items: center;
        background: var(--main-white-color);
        border-radius: 10px;
        border: 3px solid var(--main-first-color);
    }

    .nav #logo:hover {
        color: var(--main-white-color);
        background: var(--main-second-color);
        border: 3px solid var(--main-second-color);
    }

    .nav #logo img {
        width: 30px;
    }

    .nav #logo p {
        margin: 0;
        margin-left: 10px;
    }

    /* --- Main --- */
    .main {
        min-height: 500px;
        background: var(--main-body-color);
    }
</style>
