<template lang='pug'>
.vue-support
    h2.title.has-text-centered 〜 遊びから学びへ 〜
    p.has-text-centered aaaaaaaaaaaaaaaaaaaaaaa
    
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { GlobalPositions } from 'buefy/types/helpers';
import VueUtil from '@/scripts/util/VueUtil';


/**
 * Vue Component
 * TODO: rename to StafIntro
 */
@Component
export default class Support extends Vue {

}
</script>

<style lang='sass' scoped>
@import 'entry/variable'

.vue-support
    
</style>
