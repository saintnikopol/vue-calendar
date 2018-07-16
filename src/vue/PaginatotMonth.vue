<script>
    const paginatorMonth = {
        data: function() {
            //let monthTodayIndex = month.indexOf(monthToday);
            return {
                //monthTodayIndex:monthTodayIndex,
                monthToday: monthToday,
                monthTodayNumber: monthTodayIndex,
                monthTodayName: monthToday
            }
        },
        methods: {
            selectMonth: function(monthTodayNumber, id) {
                console.log('hello', id, monthTodayNumber);
                let index = monthTodayNumber;
                if (id == 'prev') {
                    let indexPrev = index - 1;
                    for (var i = 0; i <= month.length; i++) {

                        if (indexPrev == i) {
                            let prevMonthVisible = month[i];

                            this.monthToday = prevMonthVisible;
                            this.monthTodayNumber = i;
                            this.monthTodayName = prevMonthVisible;

                        }

                    }
                }
                else {
                    let indexNext = index + 1;
                    for (var i = 0; i <= month.length; i++) {

                        if (indexNext == i) {
                            let prevMonthVisible = month[i];

                            this.monthToday = prevMonthVisible;
                            this.monthTodayNumber = i;
                            this.monthTodayName = prevMonthVisible;

                        }

                    }
                }

            }
        }
        }
</script>

<template>
    <div class="calendar-pagination">
        <div class="pagination">
            <button v-on:click="selectMonth(monthTodayNumber,'prev')" type="button" class="btn page-item btn-light" id="prev"><span>Prev</span></button>
            <div class="name-month text-center" > {{monthTodayName}} 2018  </div>
            <button v-on:click="selectMonth(monthTodayNumber,' next')" type="button" class="btn page-item btn-light"><span>Next</span></button>
        </div>
    </div>
</template>