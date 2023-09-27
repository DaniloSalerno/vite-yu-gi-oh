<script>
import { state } from '../state.js';

export default {
    name: 'AppFoundCardsCounter',
    data() {
        return {
            state
        };
    },
}
</script>

<template>
    <div class="found">
        Found {{ state.cards.length }} cards
    </div>
</template>

<style lang="scss" scoped></style>