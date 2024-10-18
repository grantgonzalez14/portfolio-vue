<template>
    <div class="container">
        <div class="skill-box">
            <span class="title">
                <slot name="title" class="title"></slot>
            </span>

            <div class="skill-bar">
                <span :style="{width: props.skillWidth}" class="skill-per">
                    <span class="tooltip">
                        <slot name="tooltip"></slot>
                    </span>
                </span>
            </div>
        </div>
    </div>
    <div class="skill-description">
        <h2>Description</h2>
        <slot name="skillDescription"></slot>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps<{
        skillWidth: string;
    }>();

    const skillBarWidth = ref(props.skillWidth);
</script>

<style lang="scss" scoped>
    .container {
        position: relative;
        background: #282828;
        padding: 10px 20px;
    }

    .container .skill-box {
        width: 100%;
        margin: 25px 0;
    }

    .skill-box .title {
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: rgb(226, 226, 226);
    }

    .skill-box .skill-bar {
        height: 8px;
        width: 100%;
        border-radius: 6px;
        margin-top: 6px;
        background: rgba(236, 236, 236, 0.1);
    }

    .skill-bar .skill-per {
        position: relative;
        display: block;
        height: 100%;
        width: v-bind(skillBarWidth);
        border-radius: 6px;
        background: rgb(226, 226, 226);
        animation: progress 0.4s ease-in-out forwards;
        opacity: 0;
        animation-delay: 0.1s;
    }

    .skill-description {
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        gap: 1rem;
    }

    @keyframes progress {
        0% {
            width: 0;
            opacity: 1;
        }

        100% {
            opacity: 1;
        }
    }

    .skill-per .tooltip {
        position: absolute;
        right: -14px;
        top: -28px;
        font-size: 9px;
        font-weight: 500;
        color: rgb(0, 0, 0);
        font-weight: bold;
        padding: 2px 6px;
        border-radius: 3px;
        background: rgb(226, 226, 226);
        z-index: 1;
    }

    .tooltip::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        height: 10px;
        width: 10px;
        z-index: -1;
        background-color: rgb(226, 226, 226);
        transform: translateX(-50%) rotate(45deg);
    }
</style>