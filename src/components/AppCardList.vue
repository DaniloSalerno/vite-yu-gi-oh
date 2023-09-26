<script>
import AppCard from './AppCard.vue';
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
        AppCard
    }
}
</script>

<template>
    <div class="card_list">

        <div class="found">
            Found {{ state.cards.length }} cards
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
            <AppCard />
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