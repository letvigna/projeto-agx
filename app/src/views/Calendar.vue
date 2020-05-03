<template>
  <FullCalendar
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
    handleSelect(info) {
      let title = prompt("Digite o título do seu evento.");
      let event = {
        title: title,
        startDate: info.startStr,
        endDate: info.endStr
      };
      this.$store.dispatch('createEvent', event);
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
