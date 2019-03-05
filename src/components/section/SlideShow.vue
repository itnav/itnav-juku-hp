<template lang='pug'>
.vue-slide-show
    swiper(:options="swiperOption")
        swiper-slide 
            img(:src='imgs["photo1"]')
        swiper-slide
            img(:src='imgs["photo2"]')
        swiper-slide
            img(:src='imgs["photo3"]')
        swiper-slide
            img(:src='imgs["photo4"]')
        swiper-slide
            img(:src='imgs["photo5"]')
</template>


<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

/**
 * Vue Component
 */
@Component
export default class SlideShow extends Vue {
    protected imgs = {
        'photo1': require('@/resources/img/photo/image.jpg'),
        'photo2': require('@/resources/img/photo/image2.jpg'),
        'photo3': require('@/resources/img/photo/image3.jpg'),
        'photo4': require('@/resources/img/photo/image4.jpg'),
        'photo5': require('@/resources/img/photo/image5.jpg'),

    } as Imgs;  

    protected swiperOption = {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        loop: true,
    };
    

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
