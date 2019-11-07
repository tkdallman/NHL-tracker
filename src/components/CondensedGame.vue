<template>
    <div class="info-card">
      <h3>
        {{ game.teams.away.team.name }} @ {{ game.teams.home.team.name }}  
      </h3>
      <h4>{{ game.venue.name }}</h4>
      <h5> {{ game.teams.away.score }}  - {{ game.teams.home.score }} </h5>
      <router-link class="btn" :to="{ name: 'ExpandedGame', params: {id: game.gamePk, game } }">Full game details</router-link>

    </div>
  </template>
    
  <script>
    export default {
      name: 'CondensedGame',
      props: ['game'],
    }
  </script>
  
  <style lang="scss">
  </style>
      