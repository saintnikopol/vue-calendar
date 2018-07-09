/**
 * Created by alex on 7/8/18.
 */
import Vue from 'vue';
import style from './css/style.scss';


//function dateToday() {
let day = new  Date();
let dayWeekday = new Date();
let weekday=new Array(7);
weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6]="Суббота";


let month=new Array(12);
month[0]="Январь";
month[1]="Февраль";
month[2]="Март";
month[3]="Апрель";
month[4]="Май";
month[5]="Июнь";
month[6]="Июль";
month[7]="Август";
month[8]="Сентябрь";
month[9]="Октябрь";
month[10]="Ноябрь";
month[11]="Декабрь";

let dateToday = day.getDate();
let dayToday = weekday[dayWeekday.getDay()];
let monthToday = month[day.getMonth()];

let monthObject =[
  {month: 'Январь', dayMonth: '31'},
  {month: 'Февраль', dayMonth: '28'},
  {month: 'Март', dayMonth: '31'},
  {month: 'Апрель', dayMonth: '30'},
  {month: 'Май', dayMonth: '31'},
  {month: 'Июнь', dayMonth: '30'},
  {month: 'Июль', dayMonth: '31'},
  {month: 'Август', dayMonth: '31'},
  {month: 'Сентябрь', dayMonth: '30'},
  {month: 'Октябрь', dayMonth: '31'},
  {month: 'Ноябрь', dayMonth: '30'},
  {month: 'Декабрь', dayMonth: '31'}

];
function dateToday(){
  let objectDate = new Object();
  let firstDay = function(){
    for (var i =0 ; i < monthObject.length; i++){
      if (monthObject.month == monthToday){
        let dayMonth = monthObject.dayMonth;
        console.log(dayMonth, 'hjkjjjj')
      }
    }
  }
}
//}
console.log(dayToday, monthToday,dateToday,'dayToday')

const app = new Vue({
  el: '#app',

}).$mount('#app');
