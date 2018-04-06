<template lang='pug'>
.vue-itnav-schedule
    h2.title.has-text-centered 〜 スケジュール 〜
    google-calendar
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class ItnavSchedule extends Vue {
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-itnav-schedule
    .vue-google-calendar
        width: 100%
        height: 600px
</style>
