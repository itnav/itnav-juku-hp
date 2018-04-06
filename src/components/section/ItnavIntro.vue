<template lang='pug'>
.vue-itnav-intro
    h2.title.has-text-centered 〜 イトナブとは 〜
    img.margin-bottom(:src='imgs["hackathon"]')

    .about.box.has-text-centered
        p イトナブとは「IT」×「遊ぶ」×「学ぶ」×「営む」×「イノベーション」の造語です。
        p 石巻の次世代を担う若者を対象にソフトウェア開発やグラフィックデザインを学ぶ拠点と機会を提供し、
        p 石巻から世界に挑戦できる環境づくりをしています。
        a.more.button.is-primary
            b-icon(icon='open-in-new')
            span.text more
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
        margin-left: auto
        margin-right: auto
        max-width: 800px

        p:not(:last-child)
            margin-bottom: 0.75em

        a.more
            padding-left: 1em
            padding-right: 1em

            span.icon
                margin-right: 0.5em

            span.text
                $spacing: 0.25em
                letter-spacing: $spacing
                margin-right: -$spacing
</style>
