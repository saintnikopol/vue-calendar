<script>
    import searchForm from './SearchForm.vue';
    import BtnGroup from './BtnGroup.vue';
    import ListSearchEvents from './ListSearchEvents.vue';
    export default{
        data:function(){
            return{
                objectFilterEvents:{}
            }
        },
        components: {
            'btn-group': BtnGroup,
            'search-form': searchForm,
            'list-events': ListSearchEvents

        },
        methods:{
            listEvents($event){
                this.objectFilterEvents = $event;

//                let visibleList = document.getElementById(visibleFilter);
//                visibleList.style.display == 'none' ? visibleList.style.display = 'block' : visibleList.style.display = 'block';
//                console.log('listEvents',this.objectFilterEvents)
            }
        }
    }

</script>

<template>
    <nav class="">
        <btn-group></btn-group>

        <search-form
                @filterEvents="listEvents($event)">
        </search-form>

        <list-events
                :listEvent="objectFilterEvents"
        ></list-events>

    </nav>

</template>