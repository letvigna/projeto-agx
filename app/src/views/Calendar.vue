<template>
  <FullCalendar
    @select="handleSelect"
    defaultView="dayGridMonth"
    :plugins="calendarPlugins"
    :selectable="true"
    :events="events"
  />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  created() {
    this.fetchData();
  },
  computed: {
    events() {
      return this.$store.getters.getEvents;
    }
  },
  methods: {
    fetchData() {
      this.$store.dispatch("getAllEvents");
    },
    handleSelect(info) {
      let title = prompt("Digite o título do seu evento.");
      let event = {
        title: title,
        startDate: info.startStr,
        endDate: info.endStr
      };
      this.$store.dispatch("createEvent", event);
    }
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, interactionPlugin]
    };
  },
  components: {
    FullCalendar
  }
};
</script>

<style lang='scss'>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
</style>
