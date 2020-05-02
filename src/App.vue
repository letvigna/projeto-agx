<template>
  <FullCalendar
    @dateClick="handleDateClick"
    defaultView="dayGridMonth"
    :plugins="calendarPlugins"
    :events="[
      { title: 'event 1', date: '2020-05-01' },
      { title: 'event 2', date: '2020-05-04' }
    ]"
  />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar
  },
  methods: {
    handleDateClick(arg) {
      alert(arg.date);
    }
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, interactionPlugin]
    };
  }
};
</script>

<style lang='scss'>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
</style>