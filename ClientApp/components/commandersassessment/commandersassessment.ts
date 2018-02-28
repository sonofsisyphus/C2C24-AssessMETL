import Vue from 'vue';
import { Component,Prop } from 'vue-property-decorator';
import EventBus from '../eventbus/eventbus';

interface Unit {
    uic: string;
    name: string;
}

@Component
export default class CommandersAssessmentComponent extends Vue {
    selectedUnit: string = "";
    current: null;
    nextrating: null;
    data() {

            return {
                
                ratings:{},
                current: null,
                nextrating: null,
 
            }
        
    }
    mounted() {
        const self = this;
        EventBus.$on('UIC_CHANGE', function (uic: string) { self.selectedUnit = uic; });
        
    }
}
