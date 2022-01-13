<template lang="html">
    <div id="footer">
        <Feedback @click="delFeed()"/>

        <footer>
            <section class="content">
                <div class="navigation">
                    <h3>Nagivation</h3>
                    <div class="line"></div>
                    <div>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Overview</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Pricing</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">News</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">About Us</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">FAQ</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Carrers</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Press</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Documentation</a>
                    </div>
                </div>

                <div class="contact">
                    <h3>Contact information</h3>
                    <div class="line"></div>
                    <p><i class="fas fa-map-marker-alt"></i> Unicaen Campus 2 Côte de nacre. Boulevard Maréchal Juin 14032 Caen Cedex 5</p>
                    <p><i class="far fa-envelope"></i> <a href="https://mail.google.com/" target="_blank">21711412@etu.unicaen.fr</a></p>

                    <p><i class="far fa-envelope"></i> <a href="https://mail.google.com/" target="_blank">21606393@etu.unicaen.fr</a></p>
                </div>

                <div class="newsletter">
                    <h3>Newsletter</h3>
                    <div class="line"></div>
                    <div class="form">
                        <input type="text" name="" placeholder="Your email">
                        <button @click="addFeed()">Subscribe</button>
                    </div>
                    <p>Connect : </p>
                    <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank"><i class="ball fab fa-instagram"></i></a>
                    <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank"><i class="ball fab fa-linkedin"></i></a>
                    <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank"><i class="ball fab fa-github"></i></a>
                </div>
            </section>
            <section class="bottom">
                <p>© Copyright 2020-2022. All Rights Reserverd</p>
            </section>
        </footer>
    </div>
</template>

<script>
    import Feedback from './Feedback.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Footer',
        components: {
            Feedback,
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

<style lang="css" scoped>
    #footer {
        color: var(--main-white-color);
        background: var(--main-grey-color) /* var(--main-dark-blue-color); */
    }

    a {
        color: var(--main-red-color);
        text-decoration: none;
    }

    li {
         list-style-type: none;
    }

    footer .content {
        margin: 0 5%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .line {
        width: 70px;
        height: 5px;
        background: var(--main-red-color);
        margin-bottom: 30px;
    }

    .navigation {
        padding: 20px;
    }

    .navigation div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .navigation a {
        margin: 5px 10px;
    }

    .contact {
        padding: 20px;
    }

    .newsletter {
        padding: 20px;
    }

    .newsletter .form {
        display: grid;
        grid-template-columns: 4fr 2fr;
    }

    .newsletter input {
        height: 30px;
        border: 0.5px solid var(--main-white-color);
        border-radius: 5px;
    }

    .newsletter button {
        height: 35px;
        margin: 0 10px;
        border: 1px solid var(--main-red-color);
        border-radius: 5px;
        color: var(--main-white-color);
        background: var(--main-red-color);
        font-weight: bold;
        transition: 0.5s;
        cursor: pointer;
    }

    .newsletter i {
        margin: 0 5px;
        padding: 10px;
        border: 2px solid var(--main-red-color);
        border-radius: 50%;
        color: var(--main-white-color);
        background: var(--main-red-color);
        font-weight: bold;
        font-size: 25px;
        transition: 0.5s;
    }

    .newsletter button:hover {
        background: var(--main-green-color);
        border: 1px solid var(--main-green-color);
    }

    .newsletter i:hover {
        background: var(--main-green-color);
        border: 2px solid var(--main-green-color);
    }


    footer .bottom {
        margin-top: 20px;
        padding: 30px;
        text-align: center;
        border-top: 1px solid var(--main-white-color);
    }

    .bottom p {
        margin: 0;
    }

    @media (max-width: 925px){
        footer .content {
            margin: 0 1%;
        }
    }

    @media (max-width: 850px){
        .navigation, .contact, .newsletter{
            padding: 20px 10px;
        }
    }

    @media (max-width: 785px){
        footer .content {
            margin: 0 15%;
            grid-template-columns: 1fr;
        }

        .contact {
            margin: 20px 0;
        }
    }

    @media (max-width: 470px){
        footer .content {
            margin: 0 10%;
        }
    }

    @media (max-width: 370px){
        footer .content {
            margin: 0 5%;
        }
    }
</style>
