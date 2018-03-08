import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import HomeComponent from '../home/home';
interface Unit {
    uic: string;
    name: string;
}
interface Met {
    abbreviation: string;
    name: string;
    assessmentDate: Date;
}
interface Capabilities {
    description: string;
    abbreviation: string;
    name: string;
    status: string;
    assessed: Date;
    achieved: string;
    current: string;
    next: string;
    personnel: number;
    equipment: number;
    supply: number;
    training: number;
    ordnance: number;
    overall: number;    
    active: boolean;
    
    metAssessments: Met[];

    
}


@Component({
    components:{
        pesto: require('../pesto/pesto.vue.html'),
        met: require('../met/met.vue.html')
    }

})

export default class CapabilityAssessmentsComponent extends Vue {
    capabilities: Capabilities[] = [];
    components(){
        HomeComponent
    }
    mounted() {
 
        fetch('http://assessmentsvc/api/capabilityAssessments')
            .then(response => response.json() as Promise<Capabilities[]>)
            .then(data => { this.capabilities = data; });
    }
    get overall() {
        //return Math.round((this.personnel + this.equipment + this.supply + this.training + this.ordnance + this.facilities) / 6);
        return 100;
    }

    chipColor(val: number) {
        var col = "red"
        if (val > 80) {
            col = "green"
        } else {
            if (val > 60) {
                col = "yellow"
            }

        }
        return col;
    }
    chipTextColor(val: number) {
        var col = "white"
        if (val > 60 && val < 80) {
            col = "black"
        }

        return col;
    }
    avatarColor(val: number) {
        var col = "red"
        if (val > 80) {
            col = "green"
        } else {
            if (val > 60) {
                col = "yellow"
            }

        }
        return col + " darken-4";
    }
}



