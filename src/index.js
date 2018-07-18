/**
 * Created by alex on 7/8/18.
 */
import Vue from 'vue';
import style from './css/style.scss';
//import TabCalendar from './vue/TabCalendar.vue';

//function dateToday() {
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
//let prevMonthVisible = monthToday;
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
//let monthTodayNumber = monthTodayIndex;
//console.log(weekdayToday, monthToday, dateToday, 'dayToday')
let dateArray = [];


let weekObject = {
  weekday: '',
  firstWeek: [],
  thirdWeek: [],
  fourthWeek: [],
  fifthWeek: [],
  sixthWeek: [],
};

let weekObjektFunction = function(dateArray) {
  //console.log('weekObjektFunction', dateArray)
  weekObject.weekday = WEEKDAY_LIST;
  weekObject.firstWeek = [dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5], dateArray[6]];
  weekObject.thirdWeek = [dateArray[7], dateArray[8], dateArray[9], dateArray[10], dateArray[11], dateArray[12], dateArray[13]];
  weekObject.fourthWeek = [dateArray[14], dateArray[15], dateArray[16], dateArray[17], dateArray[18], dateArray[19], dateArray[20]];
  weekObject.fifthWeek = [dateArray[21], dateArray[22], dateArray[23], dateArray[24], dateArray[25], dateArray[26], dateArray[27]];
  weekObject.sixthWeek = [dateArray[28], dateArray[29], dateArray[30], dateArray[31], dateArray[32], dateArray[33], dateArray[34]];
};




let indexFirstDay = 0;

let functionDataYear = function(monthTodayNumber){

  let scopeMonth = new Array();
  let indexDayToday = dayWeekday.getDay();
  let count = 0;

  //let z  = z;
  for (let i = 0; i <= monthTodayNumber-1; i++){

    scopeMonth.push(MONTH_LIST_DEFINITION[i].daysInMonth);
  };

  scopeMonth.forEach(function(value, index) {
    count += +value;
  });
  let sevenW = Math.floor((count+dateToday) / 7);
  let index = count + dateToday - (sevenW * 7);
  let indexFirstDayYear = index - indexDayToday;
  let indexMonth = Math.floor(count/7);
  let zzz = count - (indexMonth * 7);

  let indexFirstDay =  indexFirstDayYear + zzz - 1;
  //console.log(indexFirstDay,'indexFirstDay')
return indexFirstDay;
};

/**
 *
 * @param monthTodayNumber  0 .. 11
 * @param prevDate  35 - length of month
 * @returns {Array}
 */
let dateArrayPrevFunction = function(monthTodayNumber, prevDate){

  //@TODO: remove this
  if (typeof monthTodayNumber == "undefined") {
    monthTodayNumber = monthTodayIndex;
  }

  let dateArrayPrev = [];
  //let newI = monthTodayNumber - 1;
  let newI = monthTodayNumber > 0 ? monthTodayNumber - 1 : 11;

  let prevMonth = MONTH_LIST_DEFINITION[newI].daysInMonth;
  //let prevFirstDay  = (prevMonth - prevDate) +1 ;
  let stepprev;
  for( stepprev = 1; stepprev <= prevDate; stepprev++){
    dateArrayPrev.push(stepprev);
  }
  //console.log(prevDate,'prevDate',dateArrayPrev,prevMonth,'prevMonth',prevFirstDay,'prevFirstDay')
  return dateArrayPrev;
};

//functionDataYear();
/**
 * Changes "weekObject"
 * @param prevMonthVisible
 * @param monthTodayNumber
 */
let dateTodayFun = function(prevMonthVisible, monthTodayNumber) {


  for (var i = 0; i < MONTH_LIST_DEFINITION.length; i++) {
    if (MONTH_LIST_DEFINITION[i].month === monthToday) {
      let daysInMonth = MONTH_LIST_DEFINITION[i].daysInMonth;

      if (daysInMonth === '31') {
        dateArray.splice(0,35);
        for (let y = 1; y <= daysInMonth; y++) {
          dateArray.push(y);
        }

        let prevDate = functionDataYear(monthTodayNumber);
        let nextDate = 35 - daysInMonth - prevDate;
        let step =1;

        let dateArrayPrev = dateArrayPrevFunction(monthTodayNumber, prevDate);

        for (step = 1; step <= nextDate; step++) {
          dateArray.push(step);
        }
        ;
        weekObjektFunction(dateArray);
      }
      if (daysInMonth === '30') {

        dateArray.splice(0,35);
        for (let y = 1; y <= daysInMonth; y++) {
          dateArray.push(y);
        }
        ;
        let prevDate = indexFirstDay;
        let nextDate = 35 - daysInMonth - prevDate;
        let newI = i - 1;
        let prevMonth = MONTH_LIST_DEFINITION[newI].daysInMonth;
        var step;
        let stepprev =1;
        let dateArrayPrev = new Array();
        for( stepprev =1; stepprev <= prevDate; stepprev++){
          dateArrayPrev.push(stepprev);
        }
        dateArrayPrev.reverse();
        for (step = 1; step <= nextDate; step++) {
          dateArray.push(step);
        }
        //let dateArray = dateArray.concat(dateArrayPrev);

        //console.log(sevenW, prevDate, nextDate, 'npm')
        weekObjektFunction(dateArray);
      }
      if (daysInMonth === '28') {

        for (var y = 1; y <= daysInMonth; y++) {
          dateArray.push(y);
        }
        ;
        //let firstDay = function(){
        let indexDayToday = dayWeekday.getDay();
        let sevenW = Math.floor(dateToday / 7);
        let index = dateToday - (sevenW * 7);
        let indexFirstDay = index - indexDayToday - 1;
        let weekdayFirstDay = WEEKDAY_LIST[indexFirstDay];
        let prevDate = indexFirstDay;
        let nextDate = 35 - daysInMonth - prevDate;
        let newI = i - 1;
        let prevMonth = MONTH_LIST_DEFINITION[newI].daysInMonth;
        var step;
        for (step = 1; step <= nextDate; step++) {
          dateArray.push(step);
        }
        //console.log(sevenW, prevDate, nextDate, 'npm')
        weekObjektFunction();
      }
      if (daysInMonth === '29') {

        for (var y = 1; y <= daysInMonth; y++) {
          dateArray.push(y);
        }
        ;
        //let firstDay = function(){
        let indexDayToday = dayWeekday.getDay();
        let sevenW = Math.floor(dateToday / 7);
        let index = dateToday - (sevenW * 7);
        let indexFirstDay = index - indexDayToday - 1;
        let weekdayFirstDay = WEEKDAY_LIST[indexFirstDay];
        let prevDate = indexFirstDay;
        let nextDate = 35 - daysInMonth - prevDate;
        let newI = i - 1;
        let prevMonth = MONTH_LIST_DEFINITION[newI].daysInMonth;
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
      //console.log('hello', id);
      let index = monthTodayNumber;
      if (id == 'prev') {
        let indexPrev = index - 1;
        for (var ind = 0; ind <= MONTH_LIST.length; ind++) {

          if (indexPrev == ind) {
            let prevMonthVisible = MONTH_LIST[ind];

            this.monthToday = prevMonthVisible;
            this.monthTodayNumber = ind;
            this.monthTodayName = prevMonthVisible;
            //console.log(prevMonthVisible, 'prevMonthVisible')
            dateTodayFun(prevMonthVisible, monthTodayNumber);
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
            this.monthTodayName = prevMonthVisible;
            //console.log('nextMonthVisible', prevMonthVisible)
            dateTodayFun(prevMonthVisible, monthTodayNumber);
          }
        }
      }
      else {
        console.log('Error');

      }
    }
  },

  template: `
<div class="calendar">
<div class="calendar-pagination">
<div class="pagination">
  <button v-on:click="selectMonth(monthTodayNumber,'prev')" type="button" class="btn page-item btn-light" id="prev"><span>Prev</span></button>
  <div class="name-month text-center" > {{monthTodayName}} 2018  </div>
  <button v-on:click="selectMonth(monthTodayNumber,'next')" type="button" class="btn page-item btn-light"><span>Next</span></button>
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
//    //let monthTodayIndex = MONTH_LIST.indexOf(monthToday);
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
//        for (var i = 0; i <= MONTH_LIST.length; i++) {
//
//          if (indexPrev == i) {
//            let prevMonthVisible = MONTH_LIST[i];
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
//        for (var i = 0; i <= MONTH_LIST.length; i++) {
//
//          if (indexNext == i) {
//            let prevMonthVisible = MONTH_LIST[i];
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
