<template lang='pug'>
iframe.vue-google-map(:src='url' frameborder='0' allowfullscreen)
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class GoogleMap extends Vue {
    protected static baseUrl = 'https://www.google.com/maps/embed';

    @Prop({type: String, required: true})
    protected pb?: string;

    protected get url(): string {
        return GoogleMap.baseUrl
            + '?pb=' + encodeURIComponent(`${this.pb!}`)
    }
}
</script>

<style lang='sass' scoped>
@import 'entry/variable'

.vue-google-map
</style>
