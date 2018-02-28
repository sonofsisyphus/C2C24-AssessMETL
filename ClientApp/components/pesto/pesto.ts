import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface pillar {
    id: number;
    name: string;
    value: number;
    color: string;
}


@Component
export default class PestoComponent extends Vue {
    pillars: pillar[] = [];
    personnel: number = 0;
    equipment: number = 0;
    supply: number = 0;
    training: number = 0;
    ordnance: number = 0;
    facilities: number = 0;
    mounted() {
        this.pillars = [
            { id: 1, name: "Personnel", value: 20, color: "red" },
            { id: 2, name: "Equipment ", value: 35, color: "red" },
            { id: 3, name: "Supply ", value: 85, color: "green" },
            { id: 4, name: "Training ", value: 95, color: "green" },
            { id: 5, name: "Ordnance ", value: 75, color: "yellow" },
            { id: 6, name: "Overall ", value: 55, color: "yellow" }
        ]
        this.personnel = 20;
        this.equipment = 35;
        this.supply = 85;
        this.training = 95;
        this.ordnance = 75;
        this.facilities = 95;
    }
    get overall(){
         return Math.round((this.personnel + this.equipment + this.supply + this.training + this.ordnance + this.facilities) / 6);
    }
    
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
