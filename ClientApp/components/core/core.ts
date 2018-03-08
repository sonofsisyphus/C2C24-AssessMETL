import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import pesto from '../pesto/pesto'

interface Oars {
    personnel: 0,
    equipment: 0,
    supply: 0,
    training: 0,
    ordnance: 0,
    overall: 0,
    category: string,
    code: string,
    status: string,
    organization: string,
    embarked: string,
    effectivity: number,
    level: number,
    limitation: number,
    adcon: string,
    opcon: string,
    latitude: string,
    longitude: string,
    cbrCurrent: string,
    cbrProjected: string,
    cbrTraining: string,
    id: string,
    created: Date,
    modified: Date
}

@Component({
    components: { pesto: require('../pesto/pesto.vue.html') }
})
export default class SortsComponent extends Vue {

 
    sorts: any;
    mydata: string = "SortsComponent Data";
    data() {
        return{
            sorts : [],
            mydata: "Rick"

        }
    }
    mounted() {
        fetch('http://assessmentsvc/api/Sorts')
            .then(response => response.json() as Promise<Oars[]>)
            .then(data => { this.sorts = data.shift()});
    }

}
