<template>
  <div>
    <h1 class="main-title">NHL Tracker</h1>
    <div v-if="!loading" class="game-cards">
      <div v-for="(game, index) in getSchedule" :key="index" class="game-card">
        <!-- <Game :game="game" :index="index"/> -->
        <CondensedGame :game="game" />
      </div>
    </div>
  </div>
</template>
  
<script>
  import { mapGetters, mapState } from 'vuex';
  import CondensedGame from './CondensedGame';

  export default {
    name: 'AllGames',
    computed: {
      ...mapGetters(['getSchedule']),
      ...mapState(['loading']),
    },
    created() {
      this.$store.dispatch('getSchedule');
    },
    components: {
      CondensedGame,
    }
  };
</script>
  
<style lang="scss">
  .main-title {
    color: #fff;
    font-weight: 900;
  }

  .game-cards {
    display: flex;
    flex-wrap: wrap;
  }

  .game-card {
    width: 33%;

    @media screen and (max-width: 991px) {
      width: 50%;
    }
  }

</style>
