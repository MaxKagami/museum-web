<template>
  <div id="public">
    <navbar/>
    <!--<sidebar/>-->

    <section id="home" class='fullpage padding-x-md padding-x-sm padding-top-md padding-top-sm'>

      <b-card class="address_card rounded_corners shadow-lg mb-4">
        <b-row>
          <b-col>
            <h1>
              {{ CITY }}, {{ ADDRESS }}
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>
              {{ DATE_FROM }}, {{ HOURS }} ({{ POINT }})
            </h3>
          </b-col>
        </b-row>
      </b-card>

      <b-row>
        <b-col md="6" sm="12">
          <b-card class="banner banner-giganty rounded_corners shadow-lg"
                  :img-src="require('@/assets/images/banner-giganty.jpg')"
                  overlay
                  text-variant="white"
                  style="max-width: 50rem;"
          >
            <b-card-text>
              <div class="up">Гиганты</div>
              <div class="down">Ледникового периода</div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="6" sm="12">
          <b-card class="banner banner-lukomorje rounded_corners shadow-lg"
                  :img-src="require('@/assets/images/banner-lukomorje.jpg')"
                  overlay
                  text-variant="white"
                  style="max-width: 50rem;"
          >
            <b-card-text>
              Лукоморье
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

    </section>

    <section id='contacts' class='fullpage padding-x-md padding-x-sm padding-top-md padding-top-sm'>
      <contacts/>
    </section>

  </div>
</template>

<script>
  import Navbar from "./components/navbar"
  import Contacts from "./components/contacts"
  import { mapGetters } from "vuex"
  export default {
    name: "public",
    components: { Navbar, Contacts },
    data: () => ({
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    }),
    created() {
      this.calculateSectionOffsets()
      window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }) // Other browsers
      window.addEventListener('touchstart', this.touchStart, { passive: false }) // mobile devices
      window.addEventListener('touchmove', this.touchMove, { passive: false }) // mobile devices
    },
    computed: mapGetters("main", ["ADDRESS", "CITY", "DATE_FROM", "DATE_TO", "HOURS", "PHONE", "POINT"]),
    methods: {
      calculateSectionOffsets() {
        let sections = document.getElementsByTagName('section')
        let length = sections.length
        for (let i = 0; i < length; i++) {
          let sectionOffset = sections[i].offsetTop
          this.offsets.push(sectionOffset)
        }
      }
    }
  }
</script>

<style lang="sass">

  @font-face
    font-family: 'giganty'
    src: url('~@/assets/fonts/ice-age.ttf') format('truetype')
  @font-face
    font-family: 'lukomorje'
    src: url('~@/assets/fonts/lukomorje.ttf') format('truetype')
  @font-face
    font-family: 'main1'
    src: url('~@/assets/fonts/main1.ttf') format('truetype')
  @font-face
    font-family: 'main2'
    src: url('~@/assets/fonts/main2.ttf') format('truetype')
  @font-face
    font-family: 'main3'
    src: url('~@/assets/fonts/main3.ttf') format('truetype')
  @font-face
    font-family: 'main4'
    src: url('~@/assets/fonts/main4.ttf') format('truetype')
  @font-face
    font-family: 'main5'
    src: url('~@/assets/fonts/main5.ttf') format('truetype')

  //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

  $desktop: 2000px
  $tablet: 800px
  $phone: 420px

  @media all and (max-width: $desktop)
    .padding-x-md
      padding-left: 7%
      padding-right: 7%
    .padding-top-md
      padding-top: 5%
    .flex-container
      display: grid
      grid-gap: 2%
      grid-template-columns: 1fr 1fr
      height: 800px

  @media all and (max-width: $tablet)
    .padding-x-sm
      padding-left: 2%
      padding-right: 2%
    .padding-top-sm
      padding-top: 10%

  @media all and (max-width: $phone )
    .padding-x-sm
      padding-left: 0
      padding-right: 0
    .padding-top-sm
      padding-top: 20%
    .flex-container
      display: block

  //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

  #app
    font-family: 'main3'

    .fullpage
      height: 100vh
      width: 100%

    .card
      &-head
        font-size: 1.2rem
        font-weight: bold
        text-transform: uppercase
        text-align: center
      &-content
        margin: auto
        padding: 5px
      &-img
        border-radius: 0.8rem!important

    .banner
      .card-body
        height: 100%
        display: flex
        justify-content: center
        align-items: center
      &-giganty
          .card-text
            font-family: 'giganty'
            color: #228DFF
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 70px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF
            .up
              font-size: 10vw
              margin-bottom: -20%
            .down
              font-size: 4vw
      &-lukomorje
          .card-text
            font-family: 'lukomorje'
            color: green
            font-size: 5.5vw
            text-transform: uppercase
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 70px #ffc022, 0 0 100px #228DFF, 0 0 150px #228DFF

  .col
    display: flex
    justify-content: center
  //align-items: center

  .rounded_corners
    border-radius: 0.8rem!important
</style>
