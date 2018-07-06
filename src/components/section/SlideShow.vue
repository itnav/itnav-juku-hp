<template lang='pug'>
.vue-slide-show
    img.full-image(:src='imgs["photo1"]')
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class SlideShow extends Vue {
    protected imgs = {
        'photo1': require('@/resources/img/photo/photo1.jpg')
    } as Imgs;
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-slide-show
</style>
