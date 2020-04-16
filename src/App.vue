<template>
  <div id='app'>
    <navbar/>

    <section class='fullpage home'>
      <div id="main_info">
        <b-row>
          <b-col>
            <h1>
              {{ city }}, {{ address }}
            </h1>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <h3>
              {{ data }}, {{ hours }} ({{ point }})
            </h3>
          </b-col>
        </b-row>
      </div>

        <b-row>
        <b-col>
          <b-card
              overlay
              :img-src="require('./assets/banner-giganty.jpg')"
              text-variant="white"
              style="max-width: 50rem;"
              class="banner banner-giganty"
          >
            <b-card-text class="text">
              <div class="up">Гиганты</div>
              <div class="down">Ледникового периода</div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
              overlay
              :img-src="require('./assets/banner-lukomorje.jpg')"
              text-variant="white"
              style="max-width: 50rem;"
              class="banner banner-lukomorje"
          >
            <b-card-text class="text">
              Лукоморье
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </section>

    <section class='fullpage'>
      <contacts/>
    </section>

  </div>
</template>

<script>
  import Navbar from './components/navbar'
  import Contacts from './components/contacts'
  export default {
    name: 'app',
    components: {
      'navbar': Navbar,
      'contacts': Contacts
    },
    data: () => ({
      city: "г. Брянск",
      address: "ул. Луначарного, 60",
      point: "ТЦ Дубрава",
      data: "с 21 марта",
      hours: "ежедневно с 10:00 до 20:00",
      phone: "(8 4832) 30-27-22 ",
      admin: "Коновалов Александр Александрович",
      admin_phone: "+7 925 85-00-297",
      admin_email: "dino9084@mail.ru",

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
    src: url('./assets/fonts/ice-age.ttf') format('truetype')
  @font-face
    font-family: 'lukomorje'
    src: url('./assets/fonts/lukomorje.ttf') format('truetype')

  .home
    //padding-top: 5%

  .fullpage
    height: 100vh
    width: 100%

  .col
    display: flex
    justify-content: center
    //align-items: center

  img
    min-width: 800px

  #main_info
    margin: 5% 0

  .banner
    width: 100%
    text-align: center
    vertical-align: center
    &-giganty
      .text
        font-family: 'giganty'
        color: #228DFF
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 70px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF
        .up
          font-size: 10vw
          margin-bottom: -14vh
        .down
          font-size: 4vw

    &-lukomorje
      .text
        font-family: 'lukomorje'
        color: green
        font-size: 5.5vw
        text-transform: uppercase
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 70px #ffc022, 0 0 100px #228DFF, 0 0 150px #228DFF

</style>