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
        HelloWorld
      }
    }
</script>

<style>
    :root {
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
      /* text-align: center; */
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

    .nav .login {
        display: flex;
        justify-content: flex-end;
        justify-items: center;
        align-items: center;
    }

    .nav .login .sign {
        margin: 0 5px;
        padding: 15px 20px;
        border-radius: 10px;
        border: 3px solid var(--main-red-color);
        transition: 0.7s;
        cursor: pointer;
    }

    #up {
        color: var(--main-white-color);
        background: var(--main-dark-blue-color);
    }

    #up:hover {
        color: var(--main-red-color);
        background: var(--main-white-color);

    }

    #in:hover {
        color: var(--main-white-color);
    }

    /* --- Main --- */
    .main {
        min-height: 500px;
        background: var(--main-body-color);
    }
</style>
