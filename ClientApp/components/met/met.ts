import Vue from 'vue';
import { Component } from 'vue-property-decorator';


@Component

export default class MetComponent extends Vue {
    overall:string = "";
 
    met: Boolean =   false;

    chipcolor(){
        var col = "";
        switch (this.overall) {
             case "Y":
                 col = "green";
                 break;
            case "Q":
                col = "yellow"
            case "N":
                col = "red"

             default:
                 break;
         }
    }

}

