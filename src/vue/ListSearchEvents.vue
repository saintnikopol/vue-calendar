<script>


    export default{

        data () {
            return {
//                visibleListEvent:[this.listEvent],
                visibleFilter: false
            }
        },
        props:['listEvent']
    }
</script>

<template>
    <div class="visibleFilter">
        <!--{{visibleListEvent.id}}-->
        <ul v-for="(event,index) in listEvent">
            <li class="listEvent"><a href="#">{{event.title}}{{event.date}}</a></li>
        </ul>
    </div>
</template>