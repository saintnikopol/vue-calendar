<script>
    import VPopover from './VPopover.vue';
    import EDescription from './EventDescribtion.vue';
    let day = new Date();
    let dayWeekday = new Date();
    const WEEKDAY_LIST = new Array(7);
    WEEKDAY_LIST[0] = "Воскресенье";
    WEEKDAY_LIST[1] = "Понедельник";
    WEEKDAY_LIST[2] = "Вторник";
    WEEKDAY_LIST[3] = "Среда";
    WEEKDAY_LIST[4] = "Четверг";
    WEEKDAY_LIST[5] = "Пятница";
    WEEKDAY_LIST[6] = "Суббота";


    const MONTH_LIST = new Array(12);
    MONTH_LIST[0] = "Январь";
    MONTH_LIST[1] = "Февраль";
    MONTH_LIST[2] = "Март";
    MONTH_LIST[3] = "Апрель";
    MONTH_LIST[4] = "Май";
    MONTH_LIST[5] = "Июнь";
    MONTH_LIST[6] = "Июль";
    MONTH_LIST[7] = "Август";
    MONTH_LIST[8] = "Сентябрь";
    MONTH_LIST[9] = "Октябрь";
    MONTH_LIST[10] = "Ноябрь";
    MONTH_LIST[11] = "Декабрь";

    let dateToday = day.getDate();
    let weekdayToday = WEEKDAY_LIST[dayWeekday.getDay()];
    let monthToday = MONTH_LIST[day.getMonth()];

    const MONTH_LIST_DEFINITION = [
        {id: '0', calendarNumber: 1, month: 'Январь', daysInMonth: '31'},
        {id: '1', calendarNumber: 2, month: 'Февраль', daysInMonth: '29'},
        {id: '2', calendarNumber: 3, month: 'Март', daysInMonth: '31'},
        {id: '3', calendarNumber: 4, month: 'Апрель', daysInMonth: '30'},
        {id: '4', calendarNumber: 5, month: 'Май', daysInMonth: '31'},
        {id: '5', calendarNumber: 6, month: 'Июнь', daysInMonth: '30'},
        {id: '6', calendarNumber: 7, month: 'Июль', daysInMonth: '31'},
        {id: '7', calendarNumber: 8, month: 'Август', daysInMonth: '31'},
        {id: '8', calendarNumber: 9, month: 'Сентябрь', daysInMonth: '30'},
        {id: '9', calendarNumber: 10, month: 'Октябрь', daysInMonth: '31'},
        {id: '10', calendarNumber: 11, month: 'Ноябрь', daysInMonth: '30'},
        {id: '11', calendarNumber: 12, month: 'Декабрь', daysInMonth: '31'}

    ];

    let monthTodayIndex = MONTH_LIST.indexOf(monthToday);

    let dateArrayVisible = [];

    let weekObject = {
        weekday: '',
        firstWeek: [],
        thirdWeek: [],
        fourthWeek: [],
        fifthWeek: [],
        sixthWeek: [],
    };

    let weekObjektFunction = function(dateArrayVisible) {
        //console.log('weekObjektFunction', dateArray)
        weekObject.weekday = WEEKDAY_LIST;
        weekObject.firstWeek = [dateArrayVisible[0], dateArrayVisible[1], dateArrayVisible[2], dateArrayVisible[3], dateArrayVisible[4], dateArrayVisible[5], dateArrayVisible[6]];
        weekObject.thirdWeek = [dateArrayVisible[7], dateArrayVisible[8], dateArrayVisible[9], dateArrayVisible[10], dateArrayVisible[11], dateArrayVisible[12], dateArrayVisible[13]];
        weekObject.fourthWeek = [dateArrayVisible[14], dateArrayVisible[15], dateArrayVisible[16], dateArrayVisible[17], dateArrayVisible[18], dateArrayVisible[19], dateArrayVisible[20]];
        weekObject.fifthWeek = [dateArrayVisible[21], dateArrayVisible[22], dateArrayVisible[23], dateArrayVisible[24], dateArrayVisible[25], dateArrayVisible[26], dateArrayVisible[27]];
        weekObject.sixthWeek = [dateArrayVisible[28], dateArrayVisible[29], dateArrayVisible[30], dateArrayVisible[31], dateArrayVisible[32], dateArrayVisible[33], dateArrayVisible[34]];
    };

    let functionDataYearCalculateIndexFirstDayOfWeek = function(monthTodayNumber) {

        //let scopeMonth = new Array();
        //let indexDayToday = dayWeekday.getDay();
        var moment = require('moment');
        let startDate = moment([2018, monthTodayNumber]);
        let endDate = startDate.endOf('monthTodayNumber');
        let indexFirstDayOfWeek = startDate.toDate().getDay();
        //let endMonth = endDate.toDate().getDay();
        //console.log(indexFirstDayOfWeek, 'indexFirstDayOfWeek');
        return indexFirstDayOfWeek;
        //let count = 0;
        //
        ////let z  = z;
        //for (let i = 0; i <= monthTodayNumber-1; i++){
        //  scopeMonth.push(MONTH_LIST_DEFINITION[i].daysInMonth);
        //}
        //
        //scopeMonth.forEach(function(value, index) {
        //  count += +value;
        //});
        //let sevenW = Math.floor((count+dateToday) / 7);
        //let index = count + dateToday - (sevenW * 7);
        //let indexFirstDayOfYear = index - indexDayToday;
        //console.log(scopeMonth,'scopeMonth',indexDayToday,'indexDayToday',indexFirstDayOfYear,'indexFirstDayOfYear')
        //let indexMonth = Math.floor(count/7);
        //let zzz = count - (indexMonth * 7);
        //
        //let indexFirstDayOfWeek =  indexFirstDayOfYear + zzz - 1;
        //console.log(indexFirstDayOfWeek,'indexFirstDayOfWeek')
        //return indexFirstDayOfWeek;
    };
    /**
     *
     * @param daysInMonth  length of month
     * @returns {Array}
     */

    let dateArrayFunction = function(daysInMonth) {
        //console.log(daysInMonth,'daysInMonth')
        let dateArray = [];
        dateArrayVisible.splice(0, 35);
        for (let y = 1; y <= daysInMonth; y++) {
            dateArray.push(y);
        }
        ;
        //console.log(dateArray,' dateArray')
        return dateArray;
    };
    /**
     *
     * @param monthTodayNumber  0 .. 11
     * @param currentDateFirstDateOfWeekIndex  35 - length of month
     * @returns {Array}
     */
    let dateArrayPrevFunction = function(monthTodayNumber, currentDateFirstDateOfWeekIndex) {
//        console.log(currentDateFirstDateOfWeekIndex, 'currentDateFirstDateOfWeekIndex')
        let dateArrayPrev = [];
        let prevMonthIndex = getPrevMonthIndex(monthTodayIndex);

        let prevMonthDaysCount = MONTH_LIST_DEFINITION[prevMonthIndex].daysInMonth;
        //let prevFirstDay  = (prevMonth - currentDateFirstDateOfWeekIndex) +1 ;
        //let stepprev;
        //for( stepprev = 1; stepprev <= currentDateFirstDateOfWeekIndex; stepprev++){
        //  dateArrayPrev.push(stepprev);
        //}
        for (let i = prevMonthDaysCount - currentDateFirstDateOfWeekIndex + 1; i <= prevMonthDaysCount; i++) {
            dateArrayPrev.push(i);
        }
        //console.log(dateArrayPrev,'dateArrayPrev')
        //console.log(currentDateFirstDateOfWeekIndex,'currentDateFirstDateOfWeekIndex',dateArrayPrev,prevMonth,'prevMonth',prevFirstDay,'prevFirstDay')
        return dateArrayPrev;
    };

    /**
     *
     * @param daysInMonth  length of month
     * @param currentDateFirstDateOfWeekIndex  35 - length of month
     * @returns {Array}
     */
    let dateArrayNextFunction = function(currentDateFirstDateOfWeekIndex, daysInMonth) {
        let dateArrayNext = [];
        let nextDate = 35 - daysInMonth - currentDateFirstDateOfWeekIndex;
        let step;
        for (step = 1; step <= nextDate; step++) {
            dateArrayNext.push(step);
        }
        ;
        //console.log(dateArrayNext,'dateArrayNext')
        return dateArrayNext;
    };

    /**
     *
     * @param dateArrayPrev
     * @param dateArrayNext
     * @param dateArrayInMonth
     * @returns {Array}
     */
    let dateArrayVisibleFunction = function(dateArrayInMonth, dateArrayPrev, dateArrayNext) {
        //console.log(dateArrayInMonth, dateArrayPrev, dateArrayNext);
        let dateArrayNew = dateArrayPrev.concat(dateArrayInMonth);
        let dateArrayVisible = dateArrayNew.concat(dateArrayNext);
        console.log(dateArrayVisible, 'dateArrayVisible')
        return dateArrayVisible;
    };

    /**
     * Changes "weekObject"
     * @param {String} prevMonthVisible
     * @param {Number} monthTodayNumber
     */
    let dateTodayFun = function(monthTodayNumber) {

        let prevMonthVisible = MONTH_LIST[monthTodayNumber];

        for (var i = 0; i < MONTH_LIST_DEFINITION.length; i++) {
            if (MONTH_LIST_DEFINITION[i].month === prevMonthVisible) {
                let daysInMonth = MONTH_LIST_DEFINITION[i].daysInMonth;

                let dateArrayInMonth = dateArrayFunction(daysInMonth);

                let currentDateFirstDateOfWeekIndex = functionDataYearCalculateIndexFirstDayOfWeek(monthTodayNumber);

                let dateArrayPrev = dateArrayPrevFunction(monthTodayNumber, currentDateFirstDateOfWeekIndex);

                let dateArrayNext = dateArrayNextFunction(currentDateFirstDateOfWeekIndex, daysInMonth);

                let dateArrayVisible = dateArrayVisibleFunction(dateArrayInMonth, dateArrayPrev, dateArrayNext);

                weekObjektFunction(dateArrayVisible);
            }

        }

    };

    let monthTodayNumber = monthTodayIndex;


    export default {

        data: function() {
            return {
                weekObject: weekObject,
                dateArrayVisible: dateArrayVisible,
                monthToday: monthToday,
                monthTodayNumber: monthTodayIndex,
                monthTodayName: monthToday,
                events: {
                },
            };
        },
        components: {
            'v-popover': VPopover,
            'event-description': EDescription
        },
        methods: {
            selectMonth: function(monthTodayNumber, id) {

                let index = monthTodayNumber;

                if (id == 'prev') {
                    let indexPrev = index - 1;

                    for (var ind = 0; ind <= MONTH_LIST.length; ind++) {

                        if (indexPrev == ind) {
                            let prevMonthVisible = MONTH_LIST[ind];

                            this.monthToday = prevMonthVisible;
                            this.monthTodayNumber = ind;
                            monthTodayNumber = ind;
                            this.monthTodayName = prevMonthVisible;

                            dateTodayFun(monthTodayNumber);
                        }

                    }
                } else if (id == 'next') {
                    //console.log('next ', id)
                    let indexNext = index + 1;
                    for (var next = 0; next <= MONTH_LIST.length; next++) {

                        if (indexNext == next) {
                            let prevMonthVisible = MONTH_LIST[next];

                            this.monthToday = prevMonthVisible;
                            this.monthTodayNumber = next;
                            monthTodayNumber = next;
                            this.monthTodayName = prevMonthVisible;
                            //console.log('nextMonthVisible',monthTodayNumber, prevMonthVisible)
                            dateTodayFun(monthTodayNumber);
                        }
                    }
                }
                else {
                    console.log('Error');

                }
            },
            okShow: function(index) {

                let object = document.getElementById(index);

                object.style.display == 'none' ? object.style.display = 'block' : object.style.display = 'none';

            },
            addEventDate: function($event, index) {

                this.$set(this.events, 'i'+ index, $event);
                let indexForm = 'eventForm' + index;
                 let visibleForm = document.getElementById(indexForm);
                visibleForm.style.display == 'none' ? visibleForm.style.display = 'block' : visibleForm.style.display = 'block';
//                console.log(indexForm, 'indexForm', visibleForm)

            }
        },
    }

    function getPrevMonthIndex(monthTodayIndex) {
        return monthTodayIndex > 0 ? monthTodayIndex - 1 : 12;
    }


    dateTodayFun(monthTodayIndex);

</script>

<template>
    <div class="calendar">
        <div class="calendar-pagination">
            <div class="pagination">
                <button v-on:click="selectMonth(monthTodayNumber,'prev')" type="button" class="btn page-item btn-light"
                        id="prev"><span>Prev</span></button>
                <div class="name-month text-center"> {{monthTodayName}} 2018</div>
                <button v-on:click="selectMonth(monthTodayNumber,'next')" type="button" class="btn page-item btn-light">
                    <span>Next</span></button>
            </div>
        </div>

        <table class="table ">
            <tbody>

            <tr>
                <td v-for="(d,index) in weekObject.firstWeek">
                    <div class="td-calendar" @click="okShow('exPopoverReactive1'+index)"
                         style="width: 100% ; height: 100%">{{d}}
                        <v-popover
                                :id="'exPopoverReactive1'+index"
                                :currentId="'exPopoverReactive1'+index"
                                @addEvent="addEventDate($event, index)" >
                            <!--<event-description></event-description>-->
                        </v-popover>
                        <event-description
                                :id="'eventForm'+index"
                                :objectEvent="events['i' + index]"

                        ></event-description>
                    </div>

                </td>
            </tr>
            <tr>
                <td v-for="(d,index) in weekObject.thirdWeek">
                    <div :id="'exPopoverReactive2'+index" class="td-calendar" style="width: 100% ; height: 100%">{{d}}
                    </div>

                </td>
            </tr>
            <tr>
                <td v-for="(d,index) in weekObject.fourthWeek">
                    <div :id="'exPopoverReactive3'+index" class="td-calendar" style="width: 100% ; height: 100%">{{d}}
                    </div>
                </td>
            </tr>
            <tr>
                <td v-for="(d,index) in weekObject.fifthWeek">
                    <div :id="'exPopoverReactive4'+index" class="td-calendar" style="width: 100% ; height: 100%">{{d}}
                    </div>
                </td>
            </tr>
            <tr>
                <td v-for="(d,index) in weekObject.sixthWeek">
                    <div :id="'exPopoverReactive5'+index" class="td-calendar" style="width: 100% ; height: 100%">{{d}}
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</template>