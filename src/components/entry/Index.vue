<template lang='pug'>
.vue-index(:style='{"background-image": `url("${imgs[\"back\"]}")`}')
    .reactive-title {{ reactiveTitle() }}
    common-navbar.is-light(:brand-img='imgs["logo"]' :menus='menus')

    section.hero
        .hero-body.has-text-centered
            h1: img.logo(alt='月刊イトナブ塾' :src='imgs["logo"]')

    section.full
        .vue-slideshow: img(:src='imgs["photo1"]')

    section.section
        h2.has-text-centered 〜遊びから学びへ〜
    section.section
        h2.has-text-centered 〜講師紹介〜
    section.section
        h2.has-text-centered 〜イトナブとは〜
    section.section
        h2.has-text-centered 〜アクセス〜
    section.section
        h2.has-text-centered 〜スケジュール〜
    section.section
        h2.has-text-centered 〜お申し込み〜

    footer.footer
        .content.columns.has-text-centered.is-multiline
            .column.is-4: img(:src='imgs["itnav"]')
            .column.is-8.columns.is-multiline
                .column.is-half: p 一般社団法人イトナブ石巻
                .column.is-half: p Tel : 0225-90-4282
                .column.is-half: p Tel : 〒986-0822 宮城県石巻市中央2-10-21 サトミビル1F
                .column.is-half: p Mail : info@itnav.jp
            .column.is-12: p copyrights
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import RootVue from '@/components/base/RootVue';
import CommonNavbar from '@/components/common/CommonNavbar.vue';
import { NavbarMenuItem } from '@/scripts/model/part/CommonNavbar';

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
        'back': require('@/resources/img/background.jpg'),
        'logo': require('@/resources/img/logo.png'),
        'photo1': require('@/resources/img/photo1.jpg'),
        'itnav': require('@/resources/img/itnav-logo.png')
    };

    protected menus = [
        { text: 'イトナブ塾とは', onClick: () => {
            this.$snackbar.open('home');
        } },
        { text: '講師', onClick: () => {
            this.$snackbar.open('home');
        } },
        { text: 'イトナブとは', onClick: () => {
            this.$snackbar.open('home');
        } },
        { text: 'アクセス', onClick: () => {
            this.$snackbar.open('home');
        } },
        { text: 'スケジュール', onClick: () => {
            this.$snackbar.open('home');
        } },
        { text: 'お申し込み', onClick: () => {
            this.$snackbar.open('home');
        } }
    ] as NavbarMenuItem[];

    protected beforeCreate(): void {
        // Inner Vue 登録
        VueUtil.registerComponents([CommonNavbar]);
    }
}
</script>

<style lang='sass'>
@import 'all'

.vue-index
    width: 100%
    overflow-x: hidden

    h1
        & > img.logo
            width: 100%
            height: auto

    section
        max-width: 800px
        margin-left: auto
        margin-right: auto

        &.full
            max-width: 100%

    footer.footer
        padding-bottom: 1rem
</style>
