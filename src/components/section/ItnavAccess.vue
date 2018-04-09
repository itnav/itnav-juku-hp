<template lang='pug'>
.vue-itnav-access
    h2.title.has-text-centered 〜 アクセス 〜

    .columns
        .infos.column.is-5.card.margin
            h3.subtitle 一般社団法人イトナブ石巻
            p 〒986-0822
            p 宮城県石巻市中央2-10-21サトミビル1F
            p （石巻駅から徒歩10分）
            .icon-text
                b-icon(icon='phone')
                span 0225-90-4282
            .icon-text
                b-icon(icon='email')
                span info@itnav.jp
            .icon-text
                b-icon(icon='home')
                a(href='http://itnav.jp') http://itnav.jp

        .column.is-7.card.margin
            google-map(pb='!1m14!1m8!1m3!1d3125.3867434030044!2d141.307541!3d38.432535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f89a49e39fadcf1%3A0x312a01a95416a16a!2z5pel5pys44CB44CSOTg2LTA4MjIg5a6u5Z-O55yM55-z5be75biC5Lit5aSu77yS5LiB55uu77yR77yQ4oiS77yS77yR!5e0!3m2!1sja!2sus!4v1502275770310')
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import GoogleMap from '@/components/part/GoogleMap.vue';

/**
 * Vue Component
 */
@Component
export default class ItnavAccess extends Vue {
    protected beforeCreate(): void {
        VueUtil.registerComponents([GoogleMap]);
    }
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-itnav-access
    .vue-google-map
        width: 100%
        height: 450px

    .infos > p, .infos > .icon-text
        margin-bottom: 1rem
</style>
