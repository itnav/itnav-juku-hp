<template lang='pug'>
.vue-index(:style='{"background-image": `url("${imgs[\"back\"]}")`}')
    .reactive-title {{ reactiveTitle() }}
    common-navbar.is-light(:is-fixed='true' :brand-img='imgs["logo"]'
        :brand-click='brandClick' :menus='menus')

    section.hero
        .hero-body.has-text-centered
            h1: img.logo(alt='月刊イトナブ塾' :src='imgs["logo"]')

    .main
        section.section.full: .vue-slideshow: img(:src='imgs["photo1"]')

        section.section.mid(ref='juku-intro'): juku-intro
        section.section.mid(ref='staff-intro'): staff-intro
        section.section.full(ref='itnav-intro'): itnav-intro
        section.section.mid(ref='itnav-access'): itnav-access
        section.section(ref='itnav-schedule'): itnav-schedule
        section.section(ref='apply-juku')
            h2.has-text-centered 〜 お申し込み 〜

    footer.footer
        .content.columns.has-text-centered.is-multiline.has-text-white
            .column.is-4: img(:src='imgs["itnav"]')
            .column.is-8.columns.is-multiline
                .column.is-half: p 一般社団法人イトナブ石巻
                .column.is-half.icon-text
                    b-icon(icon='phone')
                    p 0225-90-4282
                .column.is-half: p 〒986-0822 宮城県石巻市中央2-10-21 サトミビル1F
                .column.is-half.icon-text
                    b-icon(icon='email')
                    p info@itnav.jp
            .column.is-12.icon-text.copyright
                b-icon(icon='copyright')
                p 2018 itnavJuku
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import ScrollUtil from '@/scripts/util/ScrollUtil';
import RootVue from '@/components/base/RootVue';
import CommonNavbar from '@/components/common/CommonNavbar.vue';
import { NavbarMenuItem } from '@/scripts/model/part/CommonNavbar';
import JukuIntro from '@/components/section/JukuIntro.vue'
import StaffIntro from '@/components/section/StaffIntro.vue';
import ItnavIntro from '@/components/section/ItnavIntro.vue';
import ItnavAccess from '@/components/section/ItnavAccess.vue';
import ItnavSchedule from '@/components/section/ItnavSchedule.vue';

import Buefy from 'buefy';

Vue.use(Buefy);

/**
 * Vue Component
 */
@Component
export default class Index extends RootVue {
    public title = '月刊イトナブ塾';
    public subtitle = 'HP';
    protected imgs = {
        'back': require('@/resources/img/illust/background.jpg'),
        'logo': require('@/resources/img/logo/logo.png'),
        'itnav': require('@/resources/img/logo/itnav-logo.png'),
        'photo1': require('@/resources/img/photo/photo1.jpg')
    };

    protected menus = [
        { pack:'fa', icon: 'question', text: 'イトナブ塾とは', onClick: () => {
            ScrollUtil.animate((this.$refs['juku-intro'] as HTMLElement).offsetTop);
        } },
        { pack:'fa', icon: 'user', text: '講師', onClick: () => {
            ScrollUtil.animate((this.$refs['staff-intro'] as HTMLElement).offsetTop);
        } },
        { pack:'fa', icon: 'id-card', text: 'イトナブとは', onClick: () => {
            ScrollUtil.animate((this.$refs['itnav-intro'] as HTMLElement).offsetTop);
        } },
        { pack:'fa', icon: 'map-signs', text: 'アクセス', onClick: () => {
            ScrollUtil.animate((this.$refs['itnav-access'] as HTMLElement).offsetTop);
        } },
        { pack:'fa', icon: 'calendar', text: 'スケジュール', onClick: () => {
            ScrollUtil.animate((this.$refs['itnav-schedule'] as HTMLElement).offsetTop);
        } },
        { pack:'fa', icon: 'paper-plane', text: 'お申し込み', onClick: () => {
            ScrollUtil.animate((this.$refs['apply-juku'] as HTMLElement).offsetTop);
        } }
    ] as NavbarMenuItem[];

    protected brandClick = () => {
        ScrollUtil.animate(0);
    }

    protected beforeCreate(): void {
        // Inner Vue 登録
        VueUtil.registerComponents([CommonNavbar, JukuIntro, StaffIntro, ItnavIntro, ItnavAccess, ItnavSchedule]);
    }
}
</script>

<style lang='sass'>
@import 'all'

.vue-index
    width: 100%
    overflow-x: hidden
    animation: bgscroll 30s linear infinite

    h1
        & > img.logo
            width: 100%
            height: auto
            animation: bounce 1s

    section
        max-width: 800px
        margin-left: auto
        margin-right: auto

        &.full
            max-width: 100%
            padding-left: 0
            padding-right: 0

        &.mid
            max-width: 1100px

    footer.footer
        padding-bottom: 1rem

        .icon-text
            display: flex
            justify-content: center

    @keyframes bgscroll
        0%
            background-position: 0 0
        100%
            background-position: 1920px 1083px

    @keyframes bounce
        0%
            transform: scale(0)
        50%
            transform: scale(1.3)
        100%
            transform: scale(1)
</style>
