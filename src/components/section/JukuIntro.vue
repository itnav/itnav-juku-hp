<template lang='pug'>
.vue-juku-intro
    h2.title.has-text-centered 〜 遊びから学びへ 〜

    .about.box
        p.has-text-centered 月刊イトナブ塾は、イトナブ石巻が主催している小学生向けプログラミング講習会です
        p.has-text-centered プログラミングと聞くと難しいイメージを持たれますが、
        p.has-text-centered ScratchやOzobotなど直感的に学べるツールを利用して初心者でもわかりやすい内容になっています
        p.has-text-centered 夢中になって遊んでいると、いつの間にか学びになっている
        p.has-text-centered そんなワークショップをイトナブ塾は目指しています

    .intros.columns.is-multiline.is-mobile
        .column.is-4(v-for='text in introTexts')
            .intro-item
                .intro-body.has-text-centered
                    h3.subtitle {{ text.title }}
                    p {{ text.description }}

</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

type IntroText = {
    title: string;
    description: string;
}

/**
 * Vue Component
 * TODO: rename: JukuIntro
 */
@Component
export default class JukuIntro extends Vue {
    protected introTexts = [
        {
            title: 'プログラミング的思考が身につく',
            description: 'パソコンに命令を出すとき、どういう順序でどのように命令を伝えればいいのか、 論理的に考えられる能力また、課題解決力や問題を分析する力がつきます'
        },
        {
            title: '無料＆手ぶらでOK',
            description: '月刊イトナブ塾は、全て無料で参加できます。 また、講習で使うパソコンなどもこちらで 準備しますので手ぶらで参加できます。 お試しで１回のみや、毎月参加も大歓迎です！'
        },
        {
            title: 'アフターフォローの充実',
            description: '月刊イトナブ塾を運営しているイトナブ石巻は 常に事務所を解放しており、小学生から大学生 まで幅広い年代の学生がITを学びにきています。イトナブ塾以外の日にちでもプログラミングを学ぶことができます'
        },
    ] as IntroText[];
}
</script>

<style lang='sass' scoped>
@import 'entry/variable'

.vue-juku-intro
    .about
        margin-bottom: 3rem

        p:not(:last-child)
            margin-bottom: 0.75rem

    .intros.columns
        justify-content: center
        margin-left: auto
        margin-right: auto

    .intro-item
        position: relative
        border-radius: 50%
        background-color: $primary

        &:before
            content: ''
            display: block
            padding-top: 100%

        .intro-body
            position: absolute
            width: 100%
            top: 14%
            left: 50%
            transform: translate(-50%, 0)

            h3
                color: $white
                width: 60%
                margin-left: auto
                margin-right: auto
                margin-bottom: 0.75rem

            p
                color: $white
                width: 75%
                margin-left: auto
                margin-right: auto


    @media screen and (max-width: 1024px)
        .intros.columns
            max-width: 700px
            .column
                width: calc(100% / 2)

    @media screen and (max-width: 724px)
        .intros.columns
            max-width: 340px
            .column
                width: 100%

    @media screen and (max-width: 340px)
        .intros.columns
            font-size: 3.7vw
        .intro-body
            h3
                font-size: 1.5em
</style>
