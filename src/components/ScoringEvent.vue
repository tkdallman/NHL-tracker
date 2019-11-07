
<template>
    <div 
      class="event"
      :style="'top:' + getEventLocation(play, 'x') + 
              'left: ' + getEventLocation(play, 'y') +
              getColor"
    >
      <span class="event-marker event-marker--goal" v-if="play.result.event === 'Goal'">
        x
      </span>
      <span class="event-marker" v-else>
        o
      </span>
      <span class="event-info"> 
        {{ play.result.description }}
      </span>
    
    </div>
</template>

<script>
  export default {
    name: 'ScoringEvent',
    props: ['play', 'color', 'symbol'],
    computed: {
      getColor() { return 'color: ' + this.color; },
    },
    methods: {
      getEventLocation(play, type) {
        let coordinates = { ...play.coordinates };
        if (play.about.period === 2 || play.about.period === 4 ) {
          coordinates.x *= -1;
          coordinates.y *= -1;
        }
        switch(type) {
          case 'x': 
            return ((coordinates.x + 100) * 2.93) + 6 + 'px; ';
          case 'y':
            return (coordinates.y + 42.5) * 2.94 + 'px; ';
          default: return false;
        } 
      }
    },    
  }
</script>

<style lang="scss">

  .event {
    position: absolute;
    line-height: 0;
    cursor: pointer;
  }

  .event-marker {
    &:hover {
      color: blue;

      + .event-info { 
        opacity: 1; 
        z-index: 2;
      }
    } 
  }

  .event-marker--goal {
    color: limegreen;
  }
    
  .event-info {
    width: 200px;
    padding: 5px;
    opacity: 0;
    z-index: -1;
    transition-duration: 0.5s;
    position: absolute;
    line-height: 1;
    /* margin-top: 10px; */
    background: #fff;
    border: 1px solid grey;
    color: #000;
  }

</style>