<template>
    <div class="card flex relative w-45 h-42.5 sm:min-w-47.5 sm:min-h-45 rounded-[11px] overflow-hidden z-100">
        <div class="card-image">
            <slot name="image"></slot>
        </div>
        <div class="card-content text-black flex flex-col absolute gap-2 bg-[#F5F5F5] h-full w-full top-full rounded-[11px] transition duration-50">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
    .card {
        transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
</style>