import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface pillar {
    id: number;
    name: string;
    value: number;
    color: string;
}
interface pillarvalues {
    personnel: number;
    equipment: number;
    supply: number;
    training: number;
    ordnance: number;
    facilities: number;
    overall: number;

}

interface Assessment {
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
@Component({
    props:{
        assessment: Object
    }
})

export default class PestoComponent extends Vue {
    assessment: Assessment ;
    pillars: pillar[] = [];
    mounted() {
        this.pillars = [
            { id: 1, name: "Personnel", value: this.assessment.personnel, color: "red" },
            { id: 2, name: "Equipment ", value: this.assessment.equipment, color: "red" },
            { id: 3, name: "Supply ", value: this.assessment.supply, color: "green" },
            { id: 4, name: "Training ", value: this.assessment.training, color: "green" },
            { id: 5, name: "Ordnance ", value: this.assessment.ordnance, color: "yellow" },
            { id: 6, name: "Overall ", value: this.assessment.overall, color: "yellow" }
        ]
    }
    updatepillars(){}
        chipColor(val: number){
            var col = "red"
            if (val > 80) {
                col = "green"
            } else {
                if(val > 60){
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
