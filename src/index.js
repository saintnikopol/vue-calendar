/**
 * Created by alex on 7/8/18.
 */
import Vue from 'vue';
import style from './css/style.scss';
//import TabCalendar from './vue/TabCalendar.vue';

//function dateToday() {
let day = new Date();
let dayWeekday = new Date();
let weekday = new Array(7);
weekday[0] = "Воскресенье";
weekday[1] = "Понедельник";
weekday[2] = "Вторник";
weekday[3] = "Среда";
weekday[4] = "Четверг";
weekday[5] = "Пятница";
weekday[6] = "Суббота";


let month = new Array(12);
month[0] = "Январь";
month[1] = "Февраль";
month[2] = "Март";
month[3] = "Апрель";
month[4] = "Май";
month[5] = "Июнь";
month[6] = "Июль";
month[7] = "Август";
month[8] = "Сентябрь";
month[9] = "Октябрь";
month[10] = "Ноябрь";
month[11] = "Декабрь";

let dateToday = day.getDate();
let weekdayToday = weekday[dayWeekday.getDay()];
let monthToday = month[day.getMonth()];
//let prevMonthVisible = monthToday;
let monthObject = [
  {id: '0', month: 'Январь', dayMonth: '31'},
  {id: '1', month: 'Февраль', dayMonth: '28'},
  {id: '2', month: 'Март', dayMonth: '31'},
  {id: '3', month: 'Апрель', dayMonth: '30'},
  {id: '4', month: 'Май', dayMonth: '31'},
  {id: '5', month: 'Июнь', dayMonth: '30'},
  {id: '6', month: 'Июль', dayMonth: '31'},
  {id: '7', month: 'Август', dayMonth: '31'},
  {id: '8', month: 'Сентябрь', dayMonth: '30'},
  {id: '9', month: 'Октябрь', dayMonth: '31'},
  {id: '10', month: 'Ноябрь', dayMonth: '30'},
  {id: '11', month: 'Декабрь', dayMonth: '31'}

];

let monthTodayIndex = month.indexOf(monthToday);
//let monthTodayNumber = monthTodayIndex;
//console.log(weekdayToday, monthToday, dateToday, 'dayToday')
let dateArray = new Array();


let weekObject = {
  weekday: '',
  firstWeek: '',
  thirdWeek: '',
  fourthWeek: '',
  fifthWeek: '',
  sixthWeek: '',
};

let weekObjektFunction = function() {
  weekObject.weekday = weekday;
  weekObject.firstWeek = [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]];
  weekObject.thirdWeek = [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]];
  weekObject.fourthWeek = [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]];
  weekObject.fifthWeek = [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]];
  weekObject.sixthWeek = [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]];
};

let dateTodayFun = function(prevMonthVisible) {
  console.log('dateTodayFun',monthToday ,prevMonthVisible);
if(typeof prevMonthVisible != "undefined" ){
  monthToday = prevMonthVisible;
  console.log(prevMonthVisible, 'prevMonthVisible',monthToday);
}
//let monthToday= prevMonthVisible;

  for (var i = 0; i < monthObject.length; i++) {
    if (monthObject[i].month === monthToday) {
      let dayMonth = monthObject[i].dayMonth;
      console.log( 'monthToday',monthToday);
      if (dayMonth === '31') {

        for (var y = 1; y <= dayMonth; y++) {
          dateArray.push(y);
        };
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
        ;
        weekObjektFunction();
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
        weekObjektFunction();
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
        weekObjektFunction();
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
        weekObjektFunction();
      }
    }
  }
};

const calendarTab = {

  data: function() {
    return {
      weekObject: weekObject,
      dateArray: dateArray,
      monthToday: monthToday,
      monthTodayNumber: monthTodayIndex,
      monthTodayName: monthToday
    }
  },
  methods: {
    selectMonth: function(monthTodayNumber, id) {
      //console.log('hello', id, monthTodayNumber,weekObject,dateArray);
      let index = monthTodayNumber;
      if (id == 'prev') {
        let indexPrev = index - 1;
        for (var ind = 0; ind <= month.length; ind++) {

          if (indexPrev == ind) {
            let prevMonthVisible = month[ind];

            this.monthToday = prevMonthVisible;
            this.monthTodayNumber = ind;
            this.monthTodayName = prevMonthVisible;
            dateTodayFun(prevMonthVisible);
          }

        }
      }
      else {
        let indexNext = index + 1;
        for (var iind = 0; ind <= month.length; ind++) {

          if (indexNext == ind) {
            let prevMonthVisible = month[i];

            this.monthToday = prevMonthVisible;
            this.monthTodayNumber = ind;
            this.monthTodayName = prevMonthVisible;

          }

        }
      }

    }
  },
  //computed: {
  //  dateTodayFun: function() {
  //    console.log('dateTodayFun');
  //
  //    let dateArray = [];
  //
  //    for (var i = 0; i < monthObject.length; i++) {
  //      if (monthObject[i].month === monthToday) {
  //        let dayMonth = monthObject[i].dayMonth;
  //        //let index = monthObject[i];
  //        if (dayMonth === '31') {
  //
  //          for (var y = 1; y <= dayMonth; y++) {
  //            dateArray.push(y);
  //          }
  //          ;
  //          //let firstDay = function(){
  //          let indexDayToday = dayWeekday.getDay();
  //          let sevenW = Math.floor(dateToday / 7);
  //          let index = dateToday - (sevenW * 7);
  //          let indexFirstDay = index - indexDayToday - 1;
  //          let weekdayFirstDay = weekday[indexFirstDay];
  //          let prevDate = indexFirstDay;
  //          let nextDate = 35 - dayMonth - prevDate;
  //          let newI = i - 1;
  //          let prevMonth = monthObject[newI].dayMonth;
  //          var step;
  //          for (step = 1; step <= nextDate; step++) {
  //            dateArray.push(step);
  //          }
  //          //console.log(sevenW, prevDate, nextDate, 'npm')
  //          let weekObject = {
  //            weekday: weekday,
  //            firstWeek: [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]],
  //            thirdWeek: [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]],
  //            fourthWeek: [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]],
  //            fifthWeek: [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]],
  //            sixthWeek: [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]],
  //          }
  //          return weekObject;
  //          //return thirdWeek, fourthWeek, fifthWeek, sixthWeek;
  //        }
  //        if (dayMonth === '30') {
  //
  //          for (var y = 1; y <= dayMonth; y++) {
  //            dateArray.push(y);
  //          }
  //          ;
  //          //let firstDay = function(){
  //          let indexDayToday = dayWeekday.getDay();
  //          let sevenW = Math.floor(dateToday / 7);
  //          let index = dateToday - (sevenW * 7);
  //          let indexFirstDay = index - indexDayToday - 1;
  //          let weekdayFirstDay = weekday[indexFirstDay];
  //          let prevDate = indexFirstDay;
  //          let nextDate = 35 - dayMonth - prevDate;
  //          let newI = i - 1;
  //          let prevMonth = monthObject[newI].dayMonth;
  //          var step;
  //          for (step = 1; step <= nextDate; step++) {
  //            dateArray.push(step);
  //          }
  //          //console.log(sevenW, prevDate, nextDate, 'npm')
  //          let weekObject = {
  //            weekday: weekday,
  //            firstWeek: [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]],
  //            thirdWeek: [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]],
  //            fourthWeek: [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]],
  //            fifthWeek: [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]],
  //            sixthWeek: [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]],
  //          }
  //          return weekObject;
  //          //return thirdWeek, fourthWeek, fifthWeek, sixthWeek;
  //        }
  //        if (dayMonth === '28') {
  //
  //          for (var y = 1; y <= dayMonth; y++) {
  //            dateArray.push(y);
  //          }
  //          ;
  //          //let firstDay = function(){
  //          let indexDayToday = dayWeekday.getDay();
  //          let sevenW = Math.floor(dateToday / 7);
  //          let index = dateToday - (sevenW * 7);
  //          let indexFirstDay = index - indexDayToday - 1;
  //          let weekdayFirstDay = weekday[indexFirstDay];
  //          let prevDate = indexFirstDay;
  //          let nextDate = 35 - dayMonth - prevDate;
  //          let newI = i - 1;
  //          let prevMonth = monthObject[newI].dayMonth;
  //          var step;
  //          for (step = 1; step <= nextDate; step++) {
  //            dateArray.push(step);
  //          }
  //          //console.log(sevenW, prevDate, nextDate, 'npm')
  //          let weekObject = {
  //            weekday: weekday,
  //            firstWeek: [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]],
  //            thirdWeek: [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]],
  //            fourthWeek: [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]],
  //            fifthWeek: [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]],
  //            sixthWeek: [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]],
  //          }
  //          return weekObject;
  //          //return thirdWeek, fourthWeek, fifthWeek, sixthWeek;
  //        }
  //        if (dayMonth === '29') {
  //
  //          for (var y = 1; y <= dayMonth; y++) {
  //            dateArray.push(y);
  //          }
  //          ;
  //          //let firstDay = function(){
  //          let indexDayToday = dayWeekday.getDay();
  //          let sevenW = Math.floor(dateToday / 7);
  //          let index = dateToday - (sevenW * 7);
  //          let indexFirstDay = index - indexDayToday - 1;
  //          let weekdayFirstDay = weekday[indexFirstDay];
  //          let prevDate = indexFirstDay;
  //          let nextDate = 35 - dayMonth - prevDate;
  //          let newI = i - 1;
  //          let prevMonth = monthObject[newI].dayMonth;
  //          var step;
  //          for (step = 1; step <= nextDate; step++) {
  //            dateArray.push(step);
  //          }
  //          //console.log(sevenW, prevDate, nextDate, 'npm')
  //          let weekObject = {
  //            weekday: weekday,
  //            firstWeek: [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]],
  //            thirdWeek: [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]],
  //            fourthWeek: [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]],
  //            fifthWeek: [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]],
  //            sixthWeek: [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]],
  //          }
  //          return weekObject;
  //          //return thirdWeek, fourthWeek, fifthWeek, sixthWeek;
  //        }
  //      }
  //    }
  //  }
  //},
  template: `
<div class="calendar">
<div class="calendar-pagination">
<div class="pagination">
  <button v-on:click="selectMonth(monthTodayNumber,'prev')" type="button" class="btn page-item btn-light" id="prev"><span>Prev</span></button>
  <div class="name-month text-center" > {{monthTodayName}} 2018  </div>
  <button v-on:click="selectMonth(monthTodayNumber,' next')" type="button" class="btn page-item btn-light"><span>Next</span></button>
</div>
</div>
        <table class="table ">
            <tbody>
            <!--<tr>-->
                <!--<td v-for="w in dateTodayFun.weekday"><div class="td-calendar" style="width: 100% ; height: 100%">{{w}}</div></td>-->
            <!--</tr>-->
            <tr>
                <td v-for="d in weekObject.firstWeek"><div class="td-calendar" style="width: 100% ; height: 100%"">{{d}}</div></td>
            </tr >
            <tr>
                <td v-for="d in weekObject.thirdWeek"><div class="td-calendar" style="width: 100% ; height: 100%">{{d}}</div></td>
            </tr >
             <tr>
                <td v-for="d in weekObject.fourthWeek"><div class="td-calendar" style="width: 100% ; height: 100%">{{d}}</div></td>
            </tr >
             <tr>
                <td v-for="d in weekObject.fifthWeek"><div class="td-calendar" style="width: 100% ; height: 100%">{{d}}</div></td>
            </tr >
             <tr>
                <td v-for="d in weekObject.sixthWeek"><div class="td-calendar" style="width: 100% ; height: 100%">{{d}}</div></td>
            </tr >
            </tbody>
        </table>
    </div>
`

};


//console.log(monthTodayIndex, 'monthTodayIndex');

//const paginatorMonth = {
//  data: function() {
//    //let monthTodayIndex = month.indexOf(monthToday);
//    return {
//      //monthTodayIndex:monthTodayIndex,
//      monthToday: monthToday,
//      monthTodayNumber: monthTodayIndex,
//      monthTodayName: monthToday
//    }
//  },
//  methods: {
//    selectMonth: function(monthTodayNumber,id) {
//      console.log('hello',id, monthTodayNumber);
//      let index = monthTodayNumber;
//      if (id == 'prev') {
//        let indexPrev = index - 1;
//        for (var i = 0; i <= month.length; i++) {
//
//          if (indexPrev == i) {
//            let prevMonthVisible = month[i];
//
//              this.monthToday = prevMonthVisible;
//              this.monthTodayNumber =  i;
//              this.monthTodayName = prevMonthVisible;
//
//          }
//
//        }
//      }
//      else {
//        let indexNext = index + 1;
//        for (var i = 0; i <= month.length; i++) {
//
//          if (indexNext == i) {
//            let prevMonthVisible = month[i];
//
//              this.monthToday = prevMonthVisible;
//            this.monthTodayNumber =  i;
//            this.monthTodayName = prevMonthVisible;
//
//          }
//
//        }
//      }
//
//    }
//
//  },
//  template: `
//<div class="calendar-pagination">
//<div class="pagination">
//  <button v-on:click="selectMonth(monthTodayNumber,'prev')" type="button" class="btn page-item btn-light" id="prev"><span>Prev</span></button>
//  <div class="name-month text-center" > {{monthTodayName}} 2018  </div>
//  <button v-on:click="selectMonth(monthTodayNumber,' next')" type="button" class="btn page-item btn-light"><span>Next</span></button>
//</div>
//</div>
//`
//};


//paginatorMonth.selectMonth;
//paginatorMonth.visibleMonth;
//calendarTab.dateTodayFun;
dateTodayFun();
//Vue.component('paginator-month', paginatorMonth);
Vue.component('calendar-tab', calendarTab);

const app = new Vue({
  el: '#app',

}).$mount('#app');
