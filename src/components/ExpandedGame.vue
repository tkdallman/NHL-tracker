<template>
  <div id="GameInfo" v-if="game">
    <div class="info-card game-info">

      <div class="game-info--header">
        <router-link class="back" :to="{ name: 'Home' }">❮ </router-link>
        <div class="game-info--header-title">
          <h1>{{ homeTeam }}</h1>
          <h1>@ {{ awayTeam }}</h1>
        </div>
      </div>

      <div class="game-info--goals">
        <h3>Goals</h3>
        <ul>
          <li v-for="play in game.liveData.plays.scoringPlays" :key="play"> 
            <b>P{{ game.liveData.plays.allPlays[play].about.period }}:</b>
            {{ game.liveData.plays.allPlays[play].result.description }}
          </li>
        </ul>
      </div>

      <div class="game-info--analysis">
        <h3>Analysis</h3>

        <label for="ShotType">Shot Type </label>
        <select v-model="shotSelected" name="ShotType">
          <option value="All">All</option>
          <option value="Slap Shot">Slap Shot</option>
          <option value="Snap Shot">Snap Shot</option>
          <option value="Wrist Shot">Wrist Shot</option>
          <option value="Tip-In">Tip-In</option>
          <option value="Backhand">Backhand</option>
          <option value=">Deflected">Deflected</option>
        </select>

        <label for="Player">Player </label>
        <select v-model="playerSelected" name="Player">
          <option value="All" selected>All</option>
          <option v-for="skater in skaters" :value="skater.fullName" :key="skater.fullName">
            {{ skater.fullName }}
          </option>
        </select>
      </div>
    </div>
    <div v-if="game">
      <GameChart :gamePlays="game.liveData.plays" :shotSelected="shotSelected" :playerSelected="playerSelected" />

    </div>
  </div>
</template>
  
<script>
  import GameChart from './GameChart';

  export default {
    name: 'ExpandedGame',
    data() {
      return {
        gamePk: this.$route.params.id,
        shotSelected: 'All',
        playerSelected: 'All',
      };
    },
    computed: {
      game() { return this.$store.getters.getGame(this.gamePk)},
      homeTeam() { return this.game.gameData.teams.home.name },
      awayTeam() { return this.game.gameData.teams.away.name },
      skaters() { 
        const players = this.game.gameData.players;   
        const homeSkaters = [];
        const awaySkaters = [];
        if (!players) return false;

        Object.keys(players).map(key => players[key])
          .filter(player => player.primaryPosition.abbreviation !== 'G')
          .forEach(player => player.currentTeam.name == this.homeTeam ? homeSkaters.push(player) : awaySkaters.push(player));
        return [ '', ...homeSkaters, '', ...awaySkaters ];
      }
    },
    components: {
      GameChart,
    },
    methods: {
      makeButton() {
        return <div>test</div>
      }
    },
    created() {
      this.$store.dispatch('getGame', this.gamePk);
    }
  }
</script>

<style lang="scss" scoped>
  #GameInfo {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 789px) {
      flex-direction: column;
    }
  }

  .game-info {
    text-align: left;
  }

  ul {
    margin-right: 15px;
    text-align: left;
    padding-left: 0;
  }

  select {
    width: 200px;
    font-size: 1em;
    border-color: grey;
    margin-right: 30px;
  }

  h1 {
    margin-left: 30px;
  }

  .game-info--header {
    display: flex;
    align-items: center;
  }

  .game-info--header-title {
    text-align: left;
    width: 100%;
    padding-left: 15px;

    h1 {
      margin: 0;
      font-weight: 900;
    }

    h1:last-child {
      text-align: right;
      box-shadow: 3px 3px 1px darkgrey;
      padding-right: 15px;
    }
  }

  .game-info--analysis, .game-info--goals {
    margin-left: 15px;
  }

  .back {
    text-decoration: none;
    font-size: 3em;
  }
</style>