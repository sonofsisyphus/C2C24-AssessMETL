import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import EventBus from '../eventbus/eventbus';

interface Unit {
    uic: string;
    name: string;
}

@Component
export default class HomeComponent extends Vue {
    units: Unit[];
    selectedUnit: string;

    data() {
        return {
            units: [],
            selectedUnit: "",
        };
    }
    mounted() {
        fetch('/api/Assessment/Units')
            .then(response => response.json() as Promise<Unit[]>)
            .then(data => { this.units = data; });
    }
    emitMethod(){
        EventBus.$emit('UIC_CHANGE', this.selectedUnit)
    }
}
