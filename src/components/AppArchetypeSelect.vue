<script>

import { state } from '../state.js';


export default {
    name: 'AppArchetypeSelect',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="py-4">
        <select class="form-select" aria-label="Default select example" name="archetype" id="archetype"
            @change="$emit('searchByArchetype')" v-model="this.state.archetypeName">
            <option placeholder="Select Archetype" disabled>Select Archetype</option>
            <option value="Alien">Alien</option>
            <option value="Noble Knight">Noble Knight</option>
            <option value="Melodious">Melodious</option>
            <option value="Archfiend">Archfiend</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
#archetype {
    width: 150px;
}
</style>