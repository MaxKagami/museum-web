<template>
  <div>
    <div class="flex-container">
      <div>
        <b-card class="contacts_card rounded_corners shadow-lg">
          <p class="card-head">Контакты</p>
          <div class="card-content">
            <p><v-icon name="map-marker-alt"/> {{ CITY }}, {{ ADDRESS }}</p>
            <p><v-icon name="calendar-alt"/> {{ DATE_FROM }}{{ DATE_TO }}</p>
            <p><v-icon name="clock"/> {{ HOURS }}</p>
            <p><v-icon name="phone-alt"/> {{ PHONE }}</p>
          </div>
        </b-card>

        <b-card class="contacts_card rounded_corners shadow-lg">
          <p class="card-head">Цена билетов</p>
          <div class="card-content">
            <p><v-icon name="male"/>Взрослый</p>
            <p><v-icon name="child"/>Детский</p>
            <p><v-icon name="baby"/>До 3-х лет</p>
            <p><v-icon name="camera"/>Съёмка</p>
          </div>
        </b-card>

        <b-card class="contacts_card rounded_corners shadow-lg">
          <p class="card-head">Организатор</p>
          <div class="card-content">
            <p><v-icon name="user-tie"/>{{ NAME }}</p>
            <p><v-icon name="envelope"/> <a href="mailto:${ admin_info.email }">{{ EMAIL }}</a></p>
            <p><v-icon name="phone-alt"/><a href="tel:${ admin_info.phone_raw }">{{ ADMIN_PHONE }}</a></p>
          </div>
        </b-card>
      </div>
      <div>
        <b-card class="map_card rounded_corners shadow-lg">
          <yandexMap style="height: 800px; width: 100%"
                     :coords="LOCATION"
                     :zoom="ZOOM"
                     :controls="['zoomControl', 'fullscreenControl', 'routeEditor', 'geolocationControl']"
          >
            <ymapMarker :coords="LOCATION"
                        :icon="marker_icon"
            />
          </yandexMap>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  import { yandexMap, ymapMarker } from "vue-yandex-maps"
  export default {
    name: 'contacts',
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
    computed: mapGetters("main", ["ADDRESS", "CITY", "DATE_FROM", "DATE_TO", "HOURS", "LOCATION", "PHONE", "ZOOM"])
  }
</script>

<style lang="sass">
  .contacts_card
    margin-bottom: 4%

  .map_card
    .card-body
      padding: 0 !important
</style>
