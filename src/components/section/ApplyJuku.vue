<template lang='pug'>
.vue-apply-juku
    h2.title.has-text-centered 〜 お申し込み 〜

    .columns.is-multiline
        .card.entry-guide.column.is-half
            p 月刊イトナブ塾は毎月第四日曜に開催しております。
            p （都合により一部変更する場合があります）
            p 場所：イトナブ石巻
            p 時間：13:00〜15:00
            p 持ち物：特になし
            p （講習で使うパソコンなどはこちらで準備してあります）
            p 参加申し込みは以下の申し込みボタンよりおこなってください。
            a.apply.button.is-primary
                b-icon(icon='open-in-new')
                span.text 参加申込み
        .column.is-half
            img(:src='imgs["juku-scene"]')

        .column.is-half
            p.has-text-centered 講習風景や次回予告などは
            p.has-text-centered こちらのブログに掲載されます！
            a.technomaki-page(href='http://technomaki.jp/')
                img(:src='imgs["technomaki"]')

</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class ApplyJuku extends Vue {
    protected imgs = {
        'juku-scene': require('@/resources/img/photo/juku-scene.jpg'),
        technomaki: require('@/resources/img/logo/technomaki.png')
    }
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-apply-juku
    .entry-guide
        p:not(:last-child)
            margin-bottom: .75rem

    .technomaki-page
        margin-left: auto
        margin-right: auto

        img
            max-width: 300px
</style>
