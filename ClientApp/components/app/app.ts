import Vue from 'vue';
import { Component } from 'vue-property-decorator';


@Component

export default class AppComponent extends Vue {
    source: String;

    data() {
        return{
        drawer: true,
        searchText: null,
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

}
