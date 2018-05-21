import Vue from 'vue';
import { Component } from 'vue-property-decorator';



@Component

export default class SettingsComponent extends Vue {
 
    
    darkness: Boolean = true;
    original_setting: Boolean = this.darkness;
    settings: Boolean = false;

    toggledark(){
        this.settings = false
        this.original_setting = this.darkness
        this.$emit('toggletheme',this.darkness)
        
    }
 
}

