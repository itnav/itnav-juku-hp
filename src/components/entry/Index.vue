<template lang='pug'>
.vue-index
    .reactive-title {{ reactiveTitle() }}
    common-navbar.is-light(:is-fixed='true' :brand-img='imgs["logo"]' :menus='menus')

    section.hero
        .hero-body.has-text-centered
            h1: img.logo(alt='月刊イトナブ塾' :src='imgs["logo"]')

    section.full
        .vue-slideshow: img(:src='imgs["photo1"]')

    section.section
        h2.has-text-centered 〜遊びから学びへ〜

    section.section
        instructor-introduction
    section.section
        h2.has-text-centered 〜イトナブとは〜
    section.section
        h2.has-text-centered 〜アクセス〜
    section.section
        h2.has-text-centered 〜スケジュール〜
    section.section
        h2.has-text-centered 〜お申し込み〜

    section.main.section
        sample
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import RootVue from '@/components/base/RootVue';
import CommonNavbar from '@/components/common/CommonNavbar.vue';
import { NavbarMenuItem } from '@/scripts/model/part/CommonNavbar';
import InstructorIntroduction from '@/components/section/InstructorIntroduction.vue';

import Buefy from 'buefy';

Vue.use(Buefy);

/**
 * Vue Component
 */
@Component
export default class Index extends RootVue {
    public title = 'Sample';
    public subtitle = 'Index';

    protected beforeCreate(): void {
        // Inner Vue 登録
        VueUtil.registerComponents([CommonNavbar, InstructorIntroduction]);
    }
}
</script>

<style lang='sass'>
@import 'all'

.vue-index
    section.main
        max-width: 800px
        margin-left: auto
        margin-right: auto
</style>
