<script>
    const calendarTab = {

        data: function() {

            return {
                //monthTodayNumber:monthTodayNumber,
            }
        },
        computed: {
            dateTodayFun: function() {
                console.log('dateTodayFun');
                let dateArray = [];

                //console.log('blabla')
                //  //let objectDate = new Object();
                for (var i = 0; i < monthObject.length; i++) {
                    if (monthObject[i].month === monthToday) {
                        let dayMonth = monthObject[i].dayMonth;
                        //let index = monthObject[i];
                        if (dayMonth === '31') {

                            for (var y = 1; y <= dayMonth; y++) {
                                dateArray.push(y);
                            }
                            ;
                            //let firstDay = function(){
                            let indexDayToday = dayWeekday.getDay();
                            let sevenW = Math.floor(dateToday / 7);
                            let index = dateToday - (sevenW * 7);
                            let indexFirstDay = index - indexDayToday - 1;
                            let weekdayFirstDay = weekday[indexFirstDay];
                            let prevDate = indexFirstDay;
                            let nextDate = 35 - dayMonth - prevDate;
                            let newI = i - 1;
                            let prevMonth = monthObject[newI].dayMonth;
                            var step;
                            for (step = 1; step <= nextDate; step++) {
                                dateArray.push(step);
                            }
                            //console.log(sevenW, prevDate, nextDate, 'npm')
                            let weekObject = {
                                weekday: weekday,
                                firstWeek: [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]],
                                thirdWeek: [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]],
                                fourthWeek: [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]],
                                fifthWeek: [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]],
                                sixthWeek: [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]],
                            }
                            return weekObject;
                            //return thirdWeek, fourthWeek, fifthWeek, sixthWeek;
                        }
                        if (dayMonth === '30') {

                            for (var y = 1; y <= dayMonth; y++) {
                                dateArray.push(y);
                            }
                            ;
                            //let firstDay = function(){
                            let indexDayToday = dayWeekday.getDay();
                            let sevenW = Math.floor(dateToday / 7);
                            let index = dateToday - (sevenW * 7);
                            let indexFirstDay = index - indexDayToday - 1;
                            let weekdayFirstDay = weekday[indexFirstDay];
                            let prevDate = indexFirstDay;
                            let nextDate = 35 - dayMonth - prevDate;
                            let newI = i - 1;
                            let prevMonth = monthObject[newI].dayMonth;
                            var step;
                            for (step = 1; step <= nextDate; step++) {
                                dateArray.push(step);
                            }
                            //console.log(sevenW, prevDate, nextDate, 'npm')
                            let weekObject = {
                                weekday: weekday,
                                firstWeek: [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]],
                                thirdWeek: [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]],
                                fourthWeek: [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]],
                                fifthWeek: [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]],
                                sixthWeek: [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]],
                            }
                            return weekObject;
                            //return thirdWeek, fourthWeek, fifthWeek, sixthWeek;
                        }
                        if (dayMonth === '28') {

                            for (var y = 1; y <= dayMonth; y++) {
                                dateArray.push(y);
                            }
                            ;
                            //let firstDay = function(){
                            let indexDayToday = dayWeekday.getDay();
                            let sevenW = Math.floor(dateToday / 7);
                            let index = dateToday - (sevenW * 7);
                            let indexFirstDay = index - indexDayToday - 1;
                            let weekdayFirstDay = weekday[indexFirstDay];
                            let prevDate = indexFirstDay;
                            let nextDate = 35 - dayMonth - prevDate;
                            let newI = i - 1;
                            let prevMonth = monthObject[newI].dayMonth;
                            var step;
                            for (step = 1; step <= nextDate; step++) {
                                dateArray.push(step);
                            }
                            //console.log(sevenW, prevDate, nextDate, 'npm')
                            let weekObject = {
                                weekday: weekday,
                                firstWeek: [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]],
                                thirdWeek: [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]],
                                fourthWeek: [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]],
                                fifthWeek: [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]],
                                sixthWeek: [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]],
                            }
                            return weekObject;
                            //return thirdWeek, fourthWeek, fifthWeek, sixthWeek;
                        }
                        if (dayMonth === '29') {

                            for (var y = 1; y <= dayMonth; y++) {
                                dateArray.push(y);
                            }
                            ;
                            //let firstDay = function(){
                            let indexDayToday = dayWeekday.getDay();
                            let sevenW = Math.floor(dateToday / 7);
                            let index = dateToday - (sevenW * 7);
                            let indexFirstDay = index - indexDayToday - 1;
                            let weekdayFirstDay = weekday[indexFirstDay];
                            let prevDate = indexFirstDay;
                            let nextDate = 35 - dayMonth - prevDate;
                            let newI = i - 1;
                            let prevMonth = monthObject[newI].dayMonth;
                            var step;
                            for (step = 1; step <= nextDate; step++) {
                                dateArray.push(step);
                            }
                            //console.log(sevenW, prevDate, nextDate, 'npm')
                            let weekObject = {
                                weekday: weekday,
                                firstWeek: [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]],
                                thirdWeek: [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]],
                                fourthWeek: [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]],
                                fifthWeek: [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]],
                                sixthWeek: [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]],
                            }
                            return weekObject;
                            //return thirdWeek, fourthWeek, fifthWeek, sixthWeek;
                        }
                    }
                }
            }
        }
    }
</script>

<template>
    <div class="calendar">
        <paginator-month></paginator-month>
        <table class="table ">
            <tbody>
            <!--<tr>-->
            <!--<td v-for="w in dateTodayFun.weekday"><div class="td-calendar" style="width: 100% ; height: 100%">{{w}}</div></td>-->
            <!--</tr>-->
            <tr>
                <td v-for="d in dateTodayFun.firstWeek">
                    <div class="td-calendar" style="width: 100% ; height: 100%">{{d}}</div>
    </td>
    </tr >
    <tr>
        <td v-for="d in dateTodayFun.thirdWeek">
            <div class="td-calendar" style="width: 100% ; height: 100%">{{d}}</div>
        </td>
    </tr>
    <tr>
        <td v-for="d in dateTodayFun.fourthWeek">
            <div class="td-calendar" style="width: 100% ; height: 100%">{{d}}</div>
        </td>
    </tr>
    <tr>
        <td v-for="d in dateTodayFun.fifthWeek">
            <div class="td-calendar" style="width: 100% ; height: 100%">{{d}}</div>
        </td>
    </tr>
    <tr>
        <td v-for="d in dateTodayFun.sixthWeek">
            <div class="td-calendar" style="width: 100% ; height: 100%">{{d}}</div>
        </td>
    </tr>
    </tbody>
    </table>
    </div>
</template>