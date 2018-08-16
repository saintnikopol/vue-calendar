<script>
    import events from '../events.json';

    let objectEvents = new Array;

    export default{
//        el:'#search',
        data () {
            return {
                searchData: '',
                events: events,
                objectEvents: objectEvents,
                visibleFilter: false
            }
        },
// props:['events'],
        methods: {
            change () {
//            let titles = events.title;
                objectEvents.splice(0, objectEvents.length);
////
//                function filterItems(query) {
//                    return events.events.filter(function(el) {
//                        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//                    })
//                }
//                filterItems(this.searchData);
                let inputData = this.searchData;
                for (let key in events.events) {

                    let titleStr = events.events[key].title.toLocaleLowerCase();

                    let foundPos = titleStr.indexOf(inputData);

                    if (foundPos == 0) {
                        let object = {
                            title: events.events[key].title,
                            id: events.events[key].id,
                            date: events.events[key].date,
                        };
                        objectEvents.push(object);
                    }
                }

                this.$emit('filterEvents', objectEvents);

                return this.objectEvents;


            },
        }
    }
</script>

<template>
    <form class="search form-inline" role="search">
        <span class=""></span>
        <input type="search"
               placeholder="Событие, дата и участники"
               class="form-control"
               v-model="searchData"
               @input="change">
    </form>

</template>