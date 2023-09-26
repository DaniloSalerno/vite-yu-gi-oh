<script>
export default {
    name: 'AppArchetypeSelect'
}
</script>

<template>
    <div class="py-4">
        <select class="form-select" aria-label="Default select example" name="archetype" id="archetype">
            <option value="1" selected>Alien</option>
            <option value="2">Noble Knight</option>
            <option value="3">Tainted Treasure</option>
            <option value="4">Melodious</option>
            <option value="5">Archfiend</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
#archetype {
    width: 150px;
}
</style>