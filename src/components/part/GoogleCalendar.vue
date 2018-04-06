<template lang='pug'>
iframe.vue-google-calendar.box(:src='url' frameborder='0' scrolling='no')
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class GoogleCalendar extends Vue {
    protected static baseUrl = 'https://calendar.google.com/calendar/embed';

    @Prop({type: String, required: true})
    protected calendarId?: string;

    @Prop({type: Boolean, default: () => false})
    protected showTitle?: boolean;
    @Prop({type: Boolean, default: () => false})
    protected showNav?: boolean;
    @Prop({type: Boolean, default: () => false})
    protected showDate?: boolean;
    @Prop({type: Boolean, default: () => false})
    protected showPrint?: boolean;
    @Prop({type: Boolean, default: () => false})
    protected showTabs?: boolean;
    @Prop({type: Boolean, default: () => false})
    protected showCalendars?: boolean;
    @Prop({type: Boolean, default: () => false})
    protected showTz?: boolean;

    @Prop({type: Number, default: () => 1})
    protected wkst?: number;

    @Prop({type: String, default: () => '#D0D0D0'})
    protected bgcolor?: string;
    @Prop({type: String, default: () => '#FFFFFF'})
    protected color?: string;

    @Prop({type: String, default: () => 'Asia/Tokyo'})
    protected ctz?: string;

    protected get url(): string {
        return GoogleCalendar.baseUrl
            + '?src=' + encodeURIComponent(`${this.calendarId!}`)

            + '&showTitle=' + encodeURIComponent(`${this.showTitle? 1: 0}`)
            + '&showNav=' + encodeURIComponent(`${this.showNav? 1: 0}`)
            + '&showDate=' + encodeURIComponent(`${this.showDate? 1: 0}`)
            + '&showPrint=' + encodeURIComponent(`${this.showPrint? 1: 0}`)
            + '&showTabs=' + encodeURIComponent(`${this.showTabs? 1: 0}`)
            + '&showCalendars=' + encodeURIComponent(`${this.showCalendars? 1: 0}`)
            + '&showTz=' + encodeURIComponent(`${this.showTz? 1: 0}`)

            + '&wkst=' + encodeURIComponent(`${this.wkst!}`)

            + '&bgcolor=' + encodeURIComponent(`${this.bgcolor!}`)
            + '&color=' + encodeURIComponent(`${this.color!}`)

            + '&ctz=' + encodeURIComponent(`${this.ctz!}`);
    }
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-google-calendar
    border-width: 0
</style>
