<template>
    <div id="GameChart" v-if="gamePlays">
      <div class="scoring-layer">
        <img src="../assets/hockey-rink.svg" />
        <div v-for="event in getShots" :key="event.about.eventId">
          {{ $log(event) }}
          <ScoringEvent 
            :key="event.about.eventId"
            :play="event"
            color="#9540E4"
            v-if="showEvent(event)"
          />
        </div>
      </div>
    </div>
  </template>
    
  <script>
    import ScoringEvent from './ScoringEvent';
    // import { Carousel, Slide } from 'vue-carousel';
  
    export default {
      name: 'GameChart',
      data() {
        return {
          shotTypes: [ "All", "Slap Shot", "Snap Shot", "Wrist Shot", "Tip-In", "Backhand", "Deflected"],
        }
      },
      props: ['gamePlays', 'shotSelected', 'playerSelected'],
      computed: {
        getShots() {
          if (!this.gamePlays) return false;
          return this.gamePlays.allPlays.filter(play => {
            return play.result.event === "Shot" || play.result.event === "Goal"; 
          })
        }
      },
      methods: {
        showEvent(event) {
          return ['All', event.result.secondaryType].includes(this.shotSelected) &&
            ['All', event.players[0].player.fullName].includes(this.playerSelected);
        }
      },
      components: {
        ScoringEvent,
        // Carousel,
        // Slide
      }
    }
  </script>
  
  <style lang="scss" scoped>
  
    #GameChart  {
      position: relative;
      width: fit-content;
      margin: 0 auto;
    }
  
    img {
      width: 260px;
    }
    
    .scoring-layer {
      position: relative;
      line-height: 0;
      width: 100%;
      height: 100%;
      top: 0;
    }
  </style>    
  
  