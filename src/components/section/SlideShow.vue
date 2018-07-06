<template lang='pug'>
.vue-slide-show
    img.full-image(:src='imgs["photo1"]' :style='imgStyles[0]')
    img.full-image(:src='imgs["photo2"]' :style='imgStyles[1]')
    img.full-image(:src='imgs["photo3"]' :style='imgStyles[2]')
    img.full-image(:src='imgs["photo4"]' :style='imgStyles[3]')
    img.full-image(:src='imgs["photo5"]' :style='imgStyles[4]')
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class SlideShow extends Vue {
    protected imgs = {
        'photo1': require('@/resources/img/photo/image1.jpg'),
        'photo2': require('@/resources/img/photo/image2.jpg'),
        'photo3': require('@/resources/img/photo/image3.jpg'),
        'photo4': require('@/resources/img/photo/image4.jpg'),
        'photo5': require('@/resources/img/photo/image5.jpg'),
    } as Imgs;

    protected currentImgIndex = 0;
    protected get imgStyles(): any[] {
        return Object.keys(this.imgs).map((img, i) => {
            const offset = (i - this.currentImgIndex) * 100;
            return { transform: `translateX(${offset}%)` };
        });
    }

    @Watch('currentImgIndex')
    protected checkValidation(): void {
        if (this.currentImgIndex < 0) {
            this.currentImgIndex = Object.keys(this.imgs).length - 1;
        } else if (this.currentImgIndex
                > Object.keys(this.imgs).length - 1) {
            this.currentImgIndex = 0
        }
    }
}
</script>

<style lang='sass' scoped>
@import 'entry/variable'

.vue-slide-show
    position: relative

    img
        transition: all 0.5s ease-out

        &:not(:first-child)
            position: absolute
            top: 0
            left: 0
</style>
