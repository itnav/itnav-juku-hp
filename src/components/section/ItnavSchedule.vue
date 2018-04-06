<template lang='pug'>
.vue-itnav-schedule
    h2.title.has-text-centered 〜 スケジュール 〜
    // ical.jsに直す
    google-calendar(calendar-id='7bppfo8fl0cm6d1hsqmfkjpn6o@group.calendar.google.com' :show-nav='true' :show-title='true')
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import GoogleCalendar from '@/components/part/GoogleCalendar.vue';

/**
 * Vue Component
 */
@Component
export default class ItnavSchedule extends Vue {
    protected beforeCreate(): void {
        VueUtil.registerComponents([GoogleCalendar]);
    }
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-itnav-schedule
    .vue-google-calendar
        width: 100%
        height: 600px
</style>
