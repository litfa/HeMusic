<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { ElImage } from 'element-plus'
import bannerApi from '@/apis/banner'
import { ref } from 'vue'

const banners = ref([])
const show = ref(false)

const getBanner = async () => {
  const { data: res } = await bannerApi()
  banners.value = res.banners
  // 获取数据后刷新组件
  show.value = true
}
getBanner()
</script>

<template>
  <swiper
    slides-per-view="auto"
    centered-slides
    :space-between="50"
    loop
    :looped-slides="1"
    v-if="show"
  >
    <swiper-slide v-for="i in banners" :key="i.encodeId">
      <el-image :src="i.imageUrl" />
    </swiper-slide>
  </swiper>
</template>

<style lang="less" scoped>
.swiper {
  width: 928px;
  height: 200px;
}

.swiper-container {
  width: 100%;
}

:deep(.swiper-wrapper) {
  .swiper-slide {
    width: 380px !important;
    height: 188px !important;
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
    transform: scale(0.7);
    .el-image {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }
}
</style>