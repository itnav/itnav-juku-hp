<template lang='pug'>
.vue-instructor-introduction
    h2.title.has-text-centered 〜講師紹介〜
    .columns.is-multiline
        .column.is-4(v-for='text in InstructorEntries')
            img(:src='text.img')
            p {{ text.nickname }}
            p {{ text.name }}
            p {{ text.position }}
            p {{ text.description }}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

type InstructorEntries = {
    img: Imgs;
    nickname: string;
    name: string;
    position: string;
    description: string;
}

/**
 * Vue Component
 */
@Component
export default class InstructorIntroduction extends Vue {
    protected InstructorEntries = [
        {
            img: require('@/resources/img/tama.png'),
            nickname:'たま',
            name:'千葉 沙織',
            position:'イトナブ石巻スタッフ',
            description:'ScratchやOzobotなどを使って小学生向けワークショップを行ったりしているScratchお姉さん'
        },
        {
            img: require('@/resources/img/uk.png'),
            nickname:'UK',
            name:'加藤 奨人',
            position:'イトナブ石巻スタッフ',
            description:'イベント企画・運営マネージャーワークショップの内容を考えたり営業なども行っている。Scratchお兄さん'
        },
        {
            img: require('@/resources/img/yottu.png'),
            nickname:'よっつ',
            name:'金光 宏',
            position:'イトナブ石巻スタッフ',
            description:'学生たちにプログラミングを教えたりWeb記事の作成、写真撮影などを行っている。'
        },
        {
            img: require('@/resources/img/hinode.png'),
            nickname:'日の出',
            name:'武山 将己',
            position:'イトナブ石巻スタッフ',
            description:'主に学生たちにプログラミングを教えるワークショップを開催したり、学校に出張授業に行っている。たまにイラストレーター'
        }
    ] as InstructorEntries[];
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-instructor-introduction
</style>
