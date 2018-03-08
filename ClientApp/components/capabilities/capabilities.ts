import Vue from 'vue';
import { Component } from 'vue-property-decorator';


interface Capability {
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
}


@Component
export default class CapabilitiesComponent extends Vue {
    capabilities: Capability[] = [];
    mounted() {

        fetch('http://assessmentsvc/api/capabilityAssessments')
            .then(response => response.json() as Promise<Capability[]>)
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
        if (val >= 60 && val <= 80) {
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
    shortdate(d: Date){
        var s = d.toDateString()
        return d.toString().substr(4,11);
    }

}
