<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some html</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background="'violet'">Color this background</p>
                <p v-highlight:background.delayed="'violet'">Color this background</p>
                <p v-local-highlight:background.delayed="'violet'">Color this background</p>
                <p v-highlight:color="'green'">Color this text</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    let delay = 0;
                    if ( binding.modifiers['delayed'] ) {
                        delay = 3000;
                    }
                    setTimeout(() => {
                        // el.style.backgroundColor = 'green';
                        // el.style.backgroundColor = binding.value;
                        if( binding.arg === 'background' ) {
                            el.style.backgroundColor = binding.value;
                        } else {
                            el.style.color = binding.value;
                        }
                    }, delay);
                }
            }
        }
    }
</script>

<style>

</style>
