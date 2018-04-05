<template lang='pug'>
.vue-index
    .reactive-title {{ reactiveTitle() }}
    common-navbar.is-light(:brand='title')

    section.main.section
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import RootVue from '@/components/base/RootVue';
import CommonNavbar from '@/components/common/CommonNavbar.vue';

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
        VueUtil.registerComponents([CommonNavbar]);
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
