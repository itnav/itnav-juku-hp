<template lang='pug'>
.vue-index(:style='{"background-image": `url("${imgs[\"back\"]}")`}')
    .reactive-title {{ reactiveTitle() }}
    common-navbar.is-light(:brand-img='imgs["logo"]' :menus='menus')

    section.hero
        .hero-body.has-text-centered
            h1: img.logo(:src='imgs["logo"]')

    section.full
        .vue-slideshow: img(:src='imgs["photo1"]')


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
    public title = 'イトナブ塾';
    public subtitle = 'HP';
    protected imgs = {
        'back': require('@/resources/img/background.jpg'),
        'logo': require('@/resources/img/logo.png'),
        'photo1': require('@/resources/img/photo1.jpg')
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
    height: 100%
    overflow-x: hidden

    section
        max-width: 800px
        margin-left: auto
        margin-right: auto

        &.full
            max-width: 100%

        img.logo
            width: 100%
            height: auto
</style>
