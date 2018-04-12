<template lang='pug'>
.vue-apply-juku
    h2.title.has-text-centered 〜 お申し込み 〜

    .columns.is-multiline.box
        .entry-guide.column.is-half
            p 月刊イトナブ塾は毎月第四日曜に開催しております。
            p （都合により一部変更する場合があります）
            p 場所：イトナブ石巻
            p 時間：13:00〜15:00
            p 持ち物：特になし
            p （講習で使うパソコンなどはこちらで準備してあります）
            p 参加申し込みは以下の申し込みボタンよりおこなってください。
            .apply-button.has-text-centered
                a.button.is-primary.is-medium(href='https://docs.google.com/forms/d/1i76rydaJnVF1IkilRCyV4vhLXU1VISUZgQpEfLpYsDM/prefill')
                    b-icon(icon='open-in-new')
                    span.text 参加申込み
        .juku-scene.column.is-half
            img(:src='imgs["juku-scene"]')

        .box.technomaki.column.is-half.has-text-centered
            p 講習風景や次回予告などは
            p こちらのブログに掲載されます！
            a(href='http://technomaki.jp/')
                img(:src='imgs["technomaki"]')

        .line.column.is-half.columns.has-text-centered.is-size-5
            .column
                img(:src='imgs["line-logo"]')
                p 始めました！
                p 参加申し込みもできます！
            .column
                img(:src='imgs["line-qr"]')
                p @qcc2983u
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
        'technomaki': require('@/resources/img/logo/technomaki.png'),
        'line-logo': require('@/resources/img/logo/line.png'),
        'line-qr': require('@/resources/img/illust/qr.jpg')
    }
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-apply-juku
    .entry-guide
        p:not(:last-child)
            margin-bottom: .75rem

    .juku-scene > img
        border-radius: 10px

    .line, .technomaki
        max-width: 400px
        border-radius: 30px
        margin: 1rem auto

    .technomaki
        img
            padding-top: 2rem
            max-width: 60%
        p
            padding-bottom: 0.4rem

    .line
        background-color: #2cbf13
        color: #ffffff

        img
            max-width: 60%

        .column > p:not(:last-child), .column > img
            margin: .75rem 0
</style>
