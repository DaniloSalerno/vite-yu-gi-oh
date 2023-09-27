<script>
import AppArchetypeSelect from './AppArchetypeSelect.vue';
import AppCardList from './AppCardList.vue';
import { state } from '../state.js';


export default {
    name: 'AppMain',
    emit: ['searchByArchetype'],
    components: {
        AppArchetypeSelect,
        AppCardList
    },
    data() {
        return {
            state
        }
    },
    methods: {
        searchArchetype() {
            const urlByArchetype = this.state.url + `&archetype=${this.state.archetypeName}`
            this.state.fetchDataCard(urlByArchetype)
            console.log(this.state.archetypeName, urlByArchetype);
        }
    },
    created() {

        state.fetchDataCard(this.state.url);
        state.fetchDataArchetypes(this.state.urlArchetypesList)
    }
}
</script>

<template>
    <main>
        <div class="container">

            <AppArchetypeSelect @search-by-archetype="searchArchetype" />
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