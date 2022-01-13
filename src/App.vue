<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

    <div id="app">
        <div class="nav">
            <div class="page">
                <router-link to="/" id="logo">
                    <img src="./assets/logo.png" alt="Logo">
                    <p>CryptoWallet</p>
                </router-link>
                <router-link to="/">Home</router-link>
            </div>
        </div>

        <Feedback @click="delFeed()"/>

        <div class="main">
            <router-view/>
            <img alt="Vue logo" src="./assets/logo.png">
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Footer from './components/Footer.vue';
    import Feedback from './components/Feedback.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'App',
        components: {
            Footer, Feedback,
        },
        methods: {
            ...mapActions([
                'addMessage', 'addFeedback', 'delFeedback',
            ]),
            ...mapGetters([
                'getFeedback', 'getMessage',
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
        /* #35495E;
        #41B883; */

        --main-red-color: #E56B6F;
        --main-blue-color: #348AF4;
        --main-grey-color: #333;
        --main-white-color: #FFF;
        --main-green-color: #499F68;
        --main-yellow-color: #FFCF60;

        --main-dark-blue-color: #2c3e50;
        --main-body-color: #FAE2E3;

        --home-red-color: #FB565E;
        --home-grey-color: #6D6969;
        --home-white-color: #FFFAF8;
        --home-shadow-color: #6D6969;
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
        background: var(--main-red-color);
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
        border-bottom: 3px solid var(--main-red-color);
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
        border: 3px solid var(--main-red-color);
    }

    .nav #logo:hover {
        border: 3px solid var(--main-green-color);
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
