<template lang="html">
    <div id="feedback">
            <transition name="fade" class="feedback">
                <div v-if="change">
                    <p><i class="fas fa-times"></i> {{ this.getMessage }}</p>
                </div>
            </transition>
        <div v-if="change">
            {{ check() }}
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "Feedback",
        methods: {
            ...mapActions(['addMessage', 'addFeedback', 'delFeedback']),
            del(){
                this.delFeedback;
            },
            check() {
                setTimeout(() => {
                    this.delFeedback();
                }, 1000);
            }
        },
        computed: {
            ...mapGetters(['getFeedback', 'getMessage', 'getLoadData', 'getLoadPrice']),
            change() {
                return this.getFeedback;
            },
            loadData() {
                return this.getLoadData;
            },
            loadPrice() {
                return this.getLoadPrice;
            }
        }
    }
</script>

<style lang="css" scoped>
    .feedback {
        width: fit-content;
        padding: 15px 10px;
        position: fixed;
        top: 12%;
        right: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--main-white-color);
        background: var(--main-dark-blue-color);
        border-radius: 10px;
        font-weight: bold;
        font-family: sans-serif;
        transition: 0.7s;
        cursor: pointer;
    }

    .feedback i {
        color: var(--main-first-color);
        padding: 0 10px;
    }

    .fade-enter-active, {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-leave-active  {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: translateX(100px);
    }

</style>
