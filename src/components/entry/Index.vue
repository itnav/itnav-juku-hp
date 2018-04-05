<template lang='pug'>
.vue-index(:style='{"background-image": `url("${imgs[\"back\"]}")`}')
    .reactive-title {{ reactiveTitle() }}
    common-navbar.is-light(:brand-img='imgs["logo"]' :menus='menus')

    section.main
        section.hero
            .hero-body.has-text-centered
                h1: img.logo(:src='imgs["logo"]')

        section.section

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
        'logo': require('@/resources/img/logo.png')
    };

    protected menus = [
        { pack: 'fa', icon: 'home', text: 'イトナブ塾とは', onClick: () => {
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

    section.main
        max-width: 800px
        margin-left: auto
        margin-right: auto

        img.logo
            width: 100%
            height: auto
</style>
