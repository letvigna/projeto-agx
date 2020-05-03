<template>
  <FullCalendar
    @dateClick="handleDateClick"
    @select="handleSelect"
    defaultView="dayGridMonth"
    :plugins="calendarPlugins"
    :selectable="true"
    :events="[
      { title: 'event 1', start: '2020-05-01', end: '2020-05-03' },
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
    handleDateClick(info) {
      let desc = prompt("Escreva a descrição do seu evento:");
      console.log(info);
      console.log(desc);
    },
    handleSelect(info) {
      console.log(info);
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
