<template>
  <div class="div">
    <v-switch
      v-model="isEditable"
      :label="`Modo edição: ${isEditable ? 'Ativado' : 'Desativado'}`"
    ></v-switch>
    <FullCalendar
      @select="handleSelect"
      @eventClick="handleEventClick"
      :header="headers"
      :plugins="calendarPlugins"
      :events="events"
      :selectable="true"
      defaultView="dayGridMonth"
      eventColor="#d7f2fa"
      eventTextColor="black"
    />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
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
    handleSelect(event) {
      let title = prompt("Digite o título para o seu evento novo.");
      if(title) {
        let newEvent = {
          title: title,
          start: event.startStr,
          end: event.endStr
        };
        this.$store.dispatch("createEvent", newEvent);
      }
    },
    handleEventClick(event) {
      // Update
      if(this.isEditable) {
        let title = prompt(`Digite um novo título para o seu evento "${event.event.title}".`);
        if(title) {
          let updatedEvent = {
            id: event.event.id,
            title: title
          };
          this.$store.dispatch("updateEvent", updatedEvent);
        }
        
      }
      // Delete
      else {
        if(confirm(`Tem certeza que deseja apagar o evento "${event.event.title}"?`)) {
          this.$store.dispatch("deleteEvent", { id: event.event.id });
        }
      }
    }
  },
  data() {
    return {
      isEditable: true,
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headers: {
        left: 'today prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }
    }
  },
  components: {
    FullCalendar
  }
};
</script>

<style lang='scss'>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";

.div {
  padding: 0vh 10vh 5vh 10vh;
}
</style>
