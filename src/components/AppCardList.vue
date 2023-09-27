<script>
import AppCard from './AppCard.vue';
import AppLoader from './AppLoader.vue';
import AppFoundCardsCounter from './AppFoundCardsCounter.vue';
import { state } from '../state.js';


export default {
    name: 'AppCardList',

    data() {
        return {
            state
        };
    },
    created() {
        state.fetchDataCard(this.state.url);
    },
    components: {
        AppCard,
        AppLoader,
        AppFoundCardsCounter
    }
}
</script>

<template>
    <div class="card_list">

        <AppFoundCardsCounter />


        <AppLoader v-if="!state.status"></AppLoader>
        <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            <AppCard :card="card" v-for="card in state.cards"></AppCard>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.card_list {
    background-color: white;
    padding: 3rem;

    .found {
        background-color: $yu-gi_dark;
        color: white;
        padding: 1rem;
    }
}
</style>