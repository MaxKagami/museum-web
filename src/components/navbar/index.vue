<template>
  <div>
    <b-navbar fixed="top"
              toggleable="lg"
              type="light">
      <b-navbar-brand href="#">Музей движущихся фигур</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Контакты</b-nav-item>
          <b-nav-item href="#">
            <v-icon name="brands/vk"/>
          </b-nav-item>
          <b-nav-item href="#">
            <v-icon name="brands/instagram"/>
          </b-nav-item>
          <b-nav-item href="#"></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data: () => ({
    })
  }
</script>

<style lang="sass">
  .navbar
    background-color: rgba(255, 255, 255, 0.8)
</style>