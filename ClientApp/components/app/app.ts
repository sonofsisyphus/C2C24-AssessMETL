import Vue from 'vue';
import { Component } from 'vue-property-decorator';


@Component({
    components:{
        settings: require('../settings/settings.vue.html')
    }

})

export default class AppComponent extends Vue {
    

    data() {
        return{
        drawer: true,
        searchText: null,
        darktheme:true,
        approveditems: [
            { icon: 'fa-table', text: 'Overview', route: '/capabilities' },
            { icon: 'fa-table', text: 'Core', route: '/core' },
            { icon: 'fa-edit', text: 'Capability Assessments', route: '/capabilityassessments' },
        ],
        instaffingitems: [
            { icon: 'fa-table', text: 'Overview', route: '/capabilities' },
            { icon: 'fa-table', text: 'Core', route: '/core' },
            { icon: 'fa-edit', text: 'Capability Assessments', route: '/capabilityassessments' },
        ],

        
    }
    }

    refresh(){
        location.reload();
        
    }


}
