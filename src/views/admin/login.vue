<template>
  <div id='login'>
    <section>
      <form @submit.prevent>
        <h1>LOGIN</h1>
        <div>
          <input v-model.trim="email" type="text" placeholder="your@email.com" id="email" />
        </div>
        <div>
          <input v-model.trim="password" type="password" placeholder="password" id="password" />
        </div>
        <button @click="login()">Log In</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({ email: "", password: "" }),
  methods: {
    login() {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  }
}
</script>

<style lang="sass">

</style>
