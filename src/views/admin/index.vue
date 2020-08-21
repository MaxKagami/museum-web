<template>
  <div id="admin">
    <b-card no-body>
      <b-tabs card>

        <b-tab title="Контакты">
          <b-form @submit.prevent="update('main', main)">
            <b-form-group label="Город">
              <b-form-input v-model="main.city"/>
            </b-form-group>
            <b-form-group label="Адрес">
              <b-form-input v-model="main.address"/>
            </b-form-group>
            <b-form-group label="Дата начала">
              <b-form-input v-model="main.date_from"/>
            </b-form-group>
            <b-form-group label="Дата окончания">
              <b-form-input v-model="main.date_to"/>
            </b-form-group>
            <b-form-group label="Часы работы">
              <b-form-input v-model="main.hours"/>
            </b-form-group>
            <b-form-group label="Место нахождения">
              <b-form-input v-model="main.point"/>
            </b-form-group>
            <b-form-group label="Телефон">
              <b-form-input v-model="main.phone"/>
            </b-form-group>
            <yandexMap style="height: 800px; width: 100%"
                       :coords="main.location"
                       :zoom="main.zoom"
                       :controls="['zoomControl', 'fullscreenControl', 'routeEditor', 'geolocationControl']"
                       @click="changeCoords"
            >
              <ymapMarker :coords="main.location"
                          :icon="marker_icon"
              />
            </yandexMap>
            <b-button type="submit">Обновить</b-button>
          </b-form>
        </b-tab>

        <b-tab title="Цены">
          <b-form @submit.prevent="update('prices', prices)">
            <b-form-group label="Взрослые">
              <b-form-input v-model="prices.adult"/>
            </b-form-group>
            <b-form-group label="Дети">
              <b-form-input v-model="prices.child"/>
            </b-form-group>
            <b-button type="submit">Обновить</b-button>
          </b-form>
        </b-tab>
        <b-tab title="Ссылки">
          <b-form @submit.prevent="update('links')">
            <b-form-group label="ВКонтакте">
              <b-form-input v-model="links.vk"/>
            </b-form-group>
            <b-form-group label="Instagram">
              <b-form-input v-model="links.instagram"/>
            </b-form-group>
            <b-form-group label="Розыгрыш">
              <b-form-input v-model="links.prize"/>
            </b-form-group>
            <b-button type="submit">Обновить</b-button>
          </b-form>
        </b-tab>

        <b-tab title="Организатор">
          <b-form @submit.prevent="update('admin', admin)">
            <b-form-group label="ФИО">
              <b-form-input v-model="admin.name"/>
            </b-form-group>
            <b-form-group label="Телефон">
              <b-form-input v-model="admin.phone"/>
            </b-form-group>
            <b-form-group label="Email">
              <b-form-input v-model="admin.email"/>
            </b-form-group>
            <b-button type="submit">Обновить</b-button>
          </b-form>
        </b-tab>

      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import { yandexMap, ymapMarker } from "vue-yandex-maps"
  import { contentCollection } from "@/firebase"
  export default {
    name: "admin",
    components: { yandexMap, ymapMarker },
    data: () => ({
      marker_icon: {
        layout: 'default#imageWithContent',
        imageHref: require('@/assets/icons/point.png'),
        imageSize: [43, 43],
        imageOffset: [0, 0],
        contentOffset: [0, 15]
      }
    }),
    computed: mapState(["main", "admin", "prices", "links"]),
    methods: {
      changeCoords (e) {
        this.main.location = e.get("coords")
      },
      async update(id, obj) {
        await contentCollection.doc(id).update(obj)
        location.reload()
      }
    },
  }
</script>

<style lang="sass">@import "style"</style>
