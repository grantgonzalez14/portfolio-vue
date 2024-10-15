<template>
    <div class="card">
        <div class="card-image">
            <slot name="image"></slot>
        </div>
        <div class="card-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
    .card {
        display: flex;
        width: 11.875rem;
        height: 11.25rem;
        position: relative;
        transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
        border-radius: 11px;
        overflow: hidden;
        z-index: 100;
    }

    .card-content {
        display: flex;
        position: absolute;
        gap: .5em;
        flex-direction: column;
        background-color: whitesmoke;
        height: 100%;
        width: 100%;
        top: 100%;
        border-radius: 11px;
        transition: all 0.05s ease;
    }

    @media only screen and (max-width: 425px) {
        .card {
            height: 375px;
            width: 300px;
        }

        .card:hover .card-content,
        .card:hover .card-button,
        .card:active .card-content,
        .card:active .card-button {
            transform: translateY(-375px);
        }
    }
</style>