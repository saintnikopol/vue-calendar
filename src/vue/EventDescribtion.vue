<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'

    Vue.use(BootstrapVue);

export default {
    data() {
        return {
            ok: false
        }
    },
    computed: {
        realObjectEvent() {
//            console.log('this.objectEvent <<<', this.objectEvent);
            return this.objectEvent;
        }
    },
//    watch: {
//
//    },
    props: {
        objectEvent:{
            type: Object,
            default: function () {
                return { message: 'hello' }
            }
        }

    }

}
</script>

<template>
    <div v-show="ok" class="cardDiv">
    <b-card title="Событие">

        <!--values:" v-if="input1Event && input1Event">-->

        <div class="card-text" style="width:100px;">
            Событие: <i>{{realObjectEvent.event}}</i><br>
            Дата: <i> {{realObjectEvent.eventDate}} </i><br>
            Участники:<i>{{realObjectEvent.eventParticipator}}</i><br>
            Описание:<i>{{realObjectEvent.eventText}}</i>
        </div>
    </b-card>
</div>
</template>