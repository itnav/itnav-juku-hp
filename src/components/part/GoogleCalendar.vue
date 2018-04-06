<template lang='pug'>
iframe.vue-google-calendar.box(src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=7bppfo8fl0cm6d1hsqmfkjpn6o%40group.calendar.google.com&amp;color=%23853104&amp;ctz=Asia%2FTokyo" frameborder="0" scrolling="no")
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class GoogleCalendar extends Vue {
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-google-calendar
</style>
