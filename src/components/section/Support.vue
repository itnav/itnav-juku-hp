<template lang='pug'>
.vue-support
    h2.support.title.has-text-centered 〜 後援 〜
    
        .supporter
            a(href="https://www.octo-llc.com/")
                img.image(:src='imgs["octo"]')
            a(href="https://www.kick.co.jp/")
                img.image(:src='imgs["kick"]')
            a.(href="https://www.salesforce.com/jp/company/org/overview/")
                p.sf ITで日本を元気に！
                p.sf （機材提供：株式会社セールスフォース・ドットコム）様
            a(href="http://waterdragonfoundation.org/jp/")
                img.wdf(:src='imgs["wdf"]')
        

    
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

protected imgs = {
    'octo':require('@/resources/img/logo/Octo.png'),
    'kick': require('@/resources/img/logo/kick.png'),
    'wdf': require('@/resources/img/logo/wdf.png')
};


}
</script>

<style lang='sass' scoped>
@import 'entry/variable'

.vue-support
    position: relative

    .supporter
        display: -webkit-flex
        display: flex
        margin-top: 50px

    .sf
        font-size: 2rem

    
    


</style>
