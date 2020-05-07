<template>
  <div class="div">
    {{ desc }}
    <FullCalendar
      @select="handleSelect"
      @eventClick="handleEventClick"
      :header="headers"
      :plugins="calendarPlugins"
      :events="events"
      :selectable="true"
      :customButtons="customButtons"
      defaultView="dayGridMonth"
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
    },
    isDeletable() {
      return this.$store.getters.getIsDeletable;
    },
    desc() {
      let modo = this.isDeletable ? 'REMOÇÃO' : 'EDIÇÃO';
      let op = this.isDeletable ? 'remover' : 'editar';
      return `MODO ${modo} - Clique no evento que deseja ${op}.`;
    }
  },
  methods: {
    fetchData() {
      this.$store.dispatch("getAllEvents");
    },
    handleSelect(event) {
      let title = prompt("Digite o título do seu evento.");
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
      // Delete
      if(this.isDeletable) {
        if(confirm(`Tem certeza que deseja apagar o evento "${event.event.title}"?`)) {
          this.$store.dispatch("deleteEvent", { id: event.event.id });
        }
      }
      // Update
      else {
        let title = prompt("Digite um novo título para o seu evento.");
        if(title) {
          let updatedEvent = {
            id: event.event.id,
            title: title
          };
          this.$store.dispatch("updateEvent", updatedEvent);
        }
      }
    }
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headers: { 
        //left: this.isDeletable ? 'editEvent' : 'deleteEvent',
        left: 'deleteEvent, editEvent',
        center: 'title',
        right: 'today prev,next dayGridMonth,timeGridWeek,timeGridDay'
      },
      customButtons: {
        deleteEvent: {
          text: 'Apagar eventos',
          click: () => {
            alert("Selecionar eventos que deseja apagar.");
            this.$store.dispatch("updateDeletable", true);
          }
        },
        editEvent: {
          text: 'Editar eventos',
          click: () => {
            alert("Selecionar eventos que deseja editar.");
            this.$store.dispatch("updateDeletable", false);
          }
        }
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
  padding: 20vh;
}
</style>
