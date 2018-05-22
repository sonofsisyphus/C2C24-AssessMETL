import Vue from 'vue';
//import Component from 'vue-class-component'
import { Component } from 'vue-property-decorator';
import CapabilityAssessmentsComponent from '../capabilityassessments/capabilityassessments';

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
    components:{
        pesto: require('../pesto/pesto.vue.html'),

    },

    props:{

        met: Boolean,
        metassessment: Object
    }
})

export default class MetComponent extends Vue {
    met: Boolean = false;
    metassessment: Assessment;
    getletter(v:Number){
        if( v > 70)
        {
            return "Y";
        }
         else if (v > 60)
         {
            return "Q"    ;
         }
         else{
             return "N";
         }
        
    }
    shortdate(d:Date)
    {
            return d.toString().substring(0,10);
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


