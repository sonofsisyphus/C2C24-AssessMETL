import Vue from 'vue';
import { Component } from 'vue-property-decorator';




@Component({
    components: { 
        pesto: require('../pesto/pesto.vue.html'),
        capabilities: require('../capabilities/capabilities.vue.html') }
})
export default class TestComponent extends Vue {

            
}
