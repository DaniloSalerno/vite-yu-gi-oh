<script>
import AppArchetypeSelect from './AppArchetypeSelect.vue';
import AppCardList from './AppCardList.vue';

export default {
    name: 'AppMain',
    components: {
        AppArchetypeSelect,
        AppCardList
    }
}
</script>

<template>
    <main>
        <div class="container">

            <AppArchetypeSelect />
            <AppCardList />

        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $yu-gi_warning;
}
</style>