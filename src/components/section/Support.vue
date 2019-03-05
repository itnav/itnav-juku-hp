<template lang='pug'>
.vue-support
    h2.support.title.has-text-centered 〜 後援 〜
    
    .supporter
        a(href="https://www.octo-llc.com/")
            img(:src='imgs["octo"]')
        a(href="https://www.kick.co.jp/")
            img(:src='imgs["kick"]')
    //- .Salesforce
        a(href="")
        

    
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
    'kick': require('@/resources/img/logo/kick.png')
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



</style>
