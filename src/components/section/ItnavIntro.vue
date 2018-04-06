<template lang='pug'>
.vue-itnav-intro
    h2.title.has-text-centered 〜 イトナブとは 〜

    img(:src='imgs["hackathon"]')

    section.section.about.box.has-text-centered
        p イトナブとは「IT」×「遊ぶ」×「学ぶ」×「営む」×「イノベーション」の造語です。
        p 石巻の次世代を担う若者を対象にソフトウェア開発やグラフィックデザインを学ぶ拠点と機会を提供し、
        p 石巻から世界に挑戦できる環境づくりをしています。
        button.button.is-rounded.is-primary more
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class ItnavIntro extends Vue {
    protected imgs: Imgs = {
        hackathon: require('@/resources/img/photo/itnav.jpg')
    }
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-itnav-intro
    .about
        margin-top: 3rem
        margin-bottom: 3rem
        max-width: 80%

        p:not(:last-child)
            margin-bottom: 0.75rem
</style>
