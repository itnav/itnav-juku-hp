<template lang='pug'>
.vue-staff-intro
    h2.title.has-text-centered 〜 講師紹介 〜
    .staffs.columns.is-multiline.is-mobile
        .column.is-4(v-for='staff in staffs')
            .staff(:style='{ "background-color": staff.color }')
                .staff-body
                    img.margin-bottom(:src='staff.img')
                    h3.subtitle.has-text-centered {{ staff.nickname }}
                    p {{ staff.name }}
                    p {{ staff.position }}
                    p {{ staff.description }}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

type Staff = {
    img: Imgs;
    nickname: string;
    name: string;
    position: string;
    description: string;
    color: string;
}

/**
 * Vue Component
 * TODO: rename to StafIntro
 */
@Component
export default class StaffIntro extends Vue {
    protected staffs = [
        {
            img: require('@/resources/img/staff/tama.png'),
            nickname:'たま',
            name:'千葉 沙織',
            position:'イトナブ石巻スタッフ',
            description:'ScratchやOzobotなどを使って小学生向けワークショップを行ったりしているScratchお姉さん',
            color: '#ff42f8'
        },
        {
            img: require('@/resources/img/staff/uk.png'),
            nickname:'UK',
            name:'加藤 奨人',
            position:'イトナブ石巻スタッフ',
            description:'イベント企画・運営マネージャーワークショップの内容を考えたり営業なども行っている。Scratchお兄さん',
            color: '#f84545'
        },
        {
            img: require('@/resources/img/staff/yottu.png'),
            nickname:'よっつ',
            name:'金光 宏',
            position:'イトナブ石巻スタッフ',
            description:'学生たちにプログラミングを教えたりWeb記事の作成、写真撮影などを行っている。',
            color: '#4b42ff'
        },
        {
            img: require('@/resources/img/staff/hinode.png'),
            nickname:'日の出',
            name:'武山 将己',
            position:'イトナブ石巻スタッフ',
            description:'主に学生たちにプログラミングを教えるワークショップを開催したり、学校に出張授業に行っている。たまにイラストレーター',
            color: '#ff873f'
        }
    ] as Staff[];
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-staff-intro
    .staff
        position: relative
        width: 100%
        border-top-left-radius: 50% 26%
        border-top-right-radius: 50% 26%
        border-bottom-left-radius: 10% 5%
        border-bottom-right-radius: 10% 5%

        &:before
            content: ''
            display: block
            padding-top: 200%

        .staff-body
            position: absolute
            width: calc(100% - 16%)
            top: 4%
            left: 50%
            transform: translate(-50%, 0)

            img
                display: block
                margin-left: auto
                margin-right: auto

            h3
                color: $white

            p
                color: $white
                font-size: 0.95em

    @media screen and (max-width: $tablet)
        .staffs.columns
            .column
                width: calc(100% / 2)

    @media screen and (max-width: 560px)
        max-width: 300px
        margin-left: auto
        margin-right: auto

        .staffs.columns
            .column
                width: 100%
</style>
