<template>
    <div>
        <div>
            <slot name="title"></slot>
            <span>
                <slot name="subtitle">This a default subtitle</slot>
            </span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px #4c4c4c;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color: red;
    }
</style>