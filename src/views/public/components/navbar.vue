<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        МУЗЕЙ ДВИЖУЩИХСЯ ФИГУР
        <b-img :src="require('@/assets/icons/logo-white.png')" height="30px"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item href="tel:${ main_info.phone_raw }">
            <v-icon name="phone-alt"/>
            {{ $store.getters.PHONE }}
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            РОЗЫГРЫШ
          </b-nav-item>
          <b-nav-item href="#">
            КОНТАКТЫ
          </b-nav-item>
          <b-nav-item :href="$store.getters.VK">
            <v-icon name="brands/vk" scale="1.7"/>
          </b-nav-item>
          <b-nav-item :href="$store.getters.INSTAGRAM">
            <v-icon name="brands/instagram" scale="1.7"/>
          </b-nav-item>
          <b-nav-item href="#"></b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default { name: 'navbar' }
</script>

<style lang="sass">
  .navbar
    background-color: rgba(0, 0, 0, 0.7)
</style>
