<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

</script>

<template>
  <swiper :slides-per-view="3" :space-between="50" centered-slides loop>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<style lang="less" scoped>
.swiper {
  width: 928px;
  height: 268px;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

:deep(.swiper-wrapper) {
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }
}
</style>