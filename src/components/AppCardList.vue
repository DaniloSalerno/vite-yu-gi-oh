<script>
import AppCard from './AppCard.vue';
import AppLoader from './AppLoader.vue';

import { state } from '../state.js';


export default {
    name: 'AppCardList',

    data() {
        return {
            state
        };
    },
    created() {
        state.fetchDataCard();
    },
    components: {
        AppCard,
        AppLoader
    }
}
</script>

<template>
    <div class="card_list">

        <div class="found">
            Found {{ state.cards.length }} cards
        </div>

        <AppLoader v-if="!state.status"></AppLoader>
        <div v-else class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
            <AppCard></AppCard>
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