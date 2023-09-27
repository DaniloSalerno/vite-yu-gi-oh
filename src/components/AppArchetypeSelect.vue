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
            <option value="" disabled hidden>Select Archetype</option>
            <option v-for="archetype in state.archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name
            }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
#archetype {
    width: 250px;
}
</style>