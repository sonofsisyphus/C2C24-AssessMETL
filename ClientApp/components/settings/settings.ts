import Vue from 'vue';
import { Component } from 'vue-property-decorator';

const AppProps = Vue.extend({
    
    props: {
        dark: Boolean
    }
})

@Component

export default class SettingsComponent extends AppProps {
 
    
    darkness: Boolean = this.dark
    settings: Boolean = false

    toggledark(){
        this.$emit('toggletheme',this.darkness)
        this.settings = false
    }
 
}

