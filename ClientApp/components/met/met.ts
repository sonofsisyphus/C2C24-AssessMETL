import Vue from 'vue';
import { Component } from 'vue-property-decorator';


@Component

export default class AppComponent extends Vue {
    dialog: boolean = false;
    notifications : boolean = false;
    sound: boolean = true;
    widgets: boolean = false;
    overall:string = "";

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

