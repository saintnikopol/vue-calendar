<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue';

    Vue.use(BootstrapVue);
    export default {
        data () {
            return {
                target: this.currentId,
                input1: '',
                input1state: null,
                input2: '',
                input2state: null,
                input3: '',
                input3state: null,
                text4: '',
                text4state: null,
                input1Return: '',
                input2Return: '',
                input3Return: '',
                text4Return: '',
                popoverShow: false,
                objectEvent: {
                    event: '',
                    eventDate: '',
                    eventParticipator:'',
                    eventText:''
                },
            }
        },

        props: ['currentId']
        ,
        watch: {
            input1 (val) {
                if (val) {
                    this.input1state = true;
                }
            },
            input2 (val) {
                if (val) {
                    this.input2state = true;
                }
            },
            input3 (val) {
                if (val) {
                    this.input3state = true;
                }
            },
        },
        methods: {
            onClose () {
//                this.popoverShow = false;
                let object = document.getElementById(this.target);
                object.style.display == 'none' ? object.style.display = 'block' : object.style.display = 'none';
            },
            onOk () {
//                this.popoverShow = true;
                if (!this.input1) {
                    this.input1state = false;
                }
                if (!this.input2) {
                    this.input2state = false;
                }
                if (this.input1 && this.input2 && this.input3 && this.text4) {
//                    this.onClose();
                    /* "Return" our popover "form" results */
                    this.input1Return = this.input1;
                    this.input2Return = this.input2;
                    this.input3Return = this.input3;
                    this.text4Return = this.text4;

                    this.objectEvent = {
                        event: this.input1Return,
                        eventDate: this.input2Return,
                        eventParticipator: this.input3Return,
                        eventText: this.text4Return
                    };

                    let zzz = JSON.stringify(this.objectEvent);

                    let trueObject = JSON.parse(zzz);

                    this.$emit('addEvent', trueObject);
                     this.onClose();

//                    let object = document.getElementById(this.target);
//                    object.style.display == 'none' ? object.style.display = 'block' : object.style.display = 'none';
                }
            },
            onShow () {
                /* This is called just before the popover is shown */
                /* Reset our popover "form" variables */
                this.input1 = '';
                this.input2 = '';
                this.input3 = '';
                this.input1state = null;
                this.input2state = null;
                this.input3state = null;
                this.input1Return = '';
                this.input2Return = '';
                this.input3Return = '';
            },
            onShown () {
                /* Called just after the popover has been shown */
                /* Transfer focus to the first input */
                let object = document.getElementById(this.target);
                object.style.display == 'none' ? object.style.display = 'block' : object.style.display = 'none';
            },
            onHidden () {
                /* Called just after the popover has finished hiding */
                /* Bring focus back to the button */
                this.focusRef(this.$refs.button);
            },
            focusRef (ref) {

//                / Some references may be a component, functional component, or plain element /
//                / This handles that check before focusing, assuming a focus() method exists /
//                / We do this in a double nextTick to ensure components have updated & popover positioned first /
                let self = this;

                self.$nextTick(function() {
                    self.$nextTick(function() {
                        if (ref && ref.$el) {
                            console.log("ref.$el.focus();");
                            ref.$el.focus();

                        } else if (ref) {
                            console.log("ref.focus();");
                            ref.focus();
                        }
                    });

                });
            }
        }
    }

</script>
<template>

    <div v-show="popoverShow" class="popoverGroup" @click="onShown()">

        <div class="popover">
            <b-form-group horizontal class="mb-1">

                <b-btn @click="onClose" class="close" aria-label="Close">
                    <span class="d-inline-block" aria-hidden="true">&times;</span>
                </b-btn>
            </b-form-group>

            <div >

                <b-form-group label="" label-for="pop1"
                              :state="input1state" horizontal class="mb-1"
                              description=""
                              invalid-feedback="This field is required">
                    <b-form-input ref="input1"
                                  id="pop1"
                                  :state="input1state"
                                  placeholder="Событие"
                                  size="sm"
                                  v-model="input1"/>
                </b-form-group>


                <b-form-group label="" label-for="pop2"
                              :state="input2state" horizontal class="mb-1"
                              description=""
                              invalid-feedback="This field is required">
                    <b-form-input ref="input2"
                                  id="pop2"
                                  :state="input2state"
                                  placeholder="День, месяц,год"
                                  size="sm"
                                  v-model="input2"/>
                </b-form-group>


                <b-form-group label="" label-for="pop3"
                              :state="input3state" horizontal class="mb-1"
                              description=" "
                              invalid-feedback="This field is required">
                    <b-form-input ref="input3"
                                  id="pop3"
                                  :state="input3state"
                                  placeholder="Имена участников"
                                  size="sm"
                                  v-model="input3"/>
                </b-form-group>


                <b-form-group label="" label-for="pop4"
                              :state="text4state" horizontal class="mb-1"
                              description=""
                              invalid-feedback="This field is required">
                    <b-form-textarea ref="text4"
                                     id="textarea4"
                                     :state="text4state"
                                     v-model="text4"
                                     placeholder="Описание"
                                     :rows="3"
                                     :max-rows="6">
                    </b-form-textarea>

                </b-form-group>
                <b-button @click="onOk()" size="sm" variant="danger">Готово</b-button>
                <b-button @click="" size="sm" variant="primary">Удалить</b-button>
            </div>
        </div>
    </div>
</template>
