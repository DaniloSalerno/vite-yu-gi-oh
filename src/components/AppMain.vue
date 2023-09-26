<script>
import AppArchetypeSelect from './AppArchetypeSelect.vue';

export default {
    name: 'AppMain',
    components: {
        AppArchetypeSelect
    }
}
</script>

<template>
    <main>
        <div class="container">

            <AppArchetypeSelect />


        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $yu-gi_warning;
}
</style>