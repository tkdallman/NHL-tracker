<template>
  <div>
    <div>
      <h3>
        {{ game.teams.away.team.name }} @ {{ game.teams.home.team.name }}
        || {{ game.venue.name }}
      </h3>
      <h5> {{ game.teams.away.score }}  - {{ game.teams.home.score }} </h5>
      <div id="GameInfo">
        <div>
          <ul v-if="getGamePlays">
            <li v-for="play in getGamePlays.scoringPlays" :key="play"> 
              P{{ getGamePlays.allPlays[play].about.period }}:
              {{ getGamePlays.allPlays[play].result.description }}
            </li>
          </ul>


          <input type="radio" name="ShotTypes" id="all" value="All" v-model="picked" selected>
          <label for="one">All</label>
          <input type="radio" name="ShotTypes" id="slap-shot" value="Slap Shot" v-model="picked">
          <label for="one">Slap Shot</label>
          <input type="radio" name="ShotTypes" id="snap-shot" value="Snap Shot" v-model="picked">
          <label for="one">Snap Shot</label>
          <input type="radio" name="ShotTypes" id="wrist-shot" value="Wrist Shot" v-model="picked">
          <label for="one">Wrist Shot</label>
          <input type="radio" name="ShotTypes" id="tip-in" value="Tip-In" v-model="picked">
          <label for="one">Tip In</label>
          <input type="radio" name="ShotTypes" id="backhand" value="Backhand" v-model="picked">
          <label for="one">Backhand</label>
          <input type="radio" name="ShotTypes" id="deflected" value="Deflected" v-model="picked">
          <label for="one">Deflected</label>

          <router-link :to="{ name: 'Home' }">Back</router-link>

        </div>
        <GameChart :gamePlays="getGamePlays" :showPlays="picked" />
      </div>
    </div>
  </div>
</template>

<script>
  import GameChart from './GameChart';

  export default {
    name: 'Game',
    data() {
      return {
        picked: 'All'
      }
    },
    computed: {
      getGame() { return this.$store.getters.getGame(this.game.gamePk) },
      getGamePlays() { return this.$store.getters.getGamePlays(this.game.gamePk) },
    },
    components: {
      GameChart,
    },
    props: ['game', 'index'],
    created() {
      this.$store.dispatch('getGame', this.game.gamePk);
    }
  }
</script>

<style lang="scss">
  #GameInfo {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 789px) {
      flex-direction: column;
    }
  }


  ul {
    margin-right: 15px;
  }

</style>
  