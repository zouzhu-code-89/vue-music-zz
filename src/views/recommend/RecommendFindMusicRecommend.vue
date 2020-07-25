<template>
    <div>
        <div class="lunbo">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/swiper/swiper-1.png" alt="swiper-1.png">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/swiper/swiper-2.png" alt="swiper-1.png">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/swiper/swiper-3.png" alt="swiper-1.png">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/swiper/swiper-4.png" alt="swiper-1.png">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/swiper/swiper-5.png" alt="swiper-1.png">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/swiper/swiper-6.png" alt="swiper-1.png">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/swiper/swiper-7.png" alt="swiper-1.png">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/swiper/swiper-8.png" alt="swiper-1.png">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/swiper/swiper-9.png" alt="swiper-1.png">
                        </a>
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <!-- nav title -->
        <div class="mt-20">
            <div class="nav2 zz-flex zz-flex-between zz-flex-middle">
                <h2>推荐歌单</h2>
                <a href="#">更多></a>
            </div>
            <div class="mt-20">
                <BaseSongComponent></BaseSongComponent>
            </div>
        </div>
        <!-- nav title -->
        <div class="mt-80">
            <div class="nav2 zz-flex zz-flex-between zz-flex-middle">
                <h2>独家放送</h2>
                <a href="#">更多></a>
            </div>
        </div>
        <!-- nav title -->
        <div class="mt-80">
            <div class="nav2 zz-flex zz-flex-between zz-flex-middle">
                <h2>最新音乐</h2>
                <a href="#">更多></a>
            </div>

        </div>
        <!-- nav title -->
        <div class="mt-80">
            <div class="nav2 zz-flex zz-flex-between zz-flex-middle">
                <h2>推荐MV</h2>
                <a href="#">更多></a>
            </div>
        </div>
        <!-- nav title -->
        <div class="mt-80">
            <div class="nav2 zz-flex zz-flex-between zz-flex-middle">
                <h2>主播电台</h2>
                <a href="#">更多></a>
            </div>
        </div>
        <!-- nav title -->
        <div class="mt-80">
            <div class="nav2 zz-flex zz-flex-between zz-flex-middle">
                <h2>LOOK直播</h2>
                <a href="#">更多></a>
            </div>
        </div>
        <!-- nav title -->
        <div class="mt-80">
            <div class="nav2 zz-flex zz-flex-between zz-flex-middle">
                <h2>LOOK直播</h2>
                <a href="#">更多></a>
            </div>
        </div>
        <!-- nav title -->
        <div class="mt-80">
            <div class="nav2 zz-flex zz-flex-between zz-flex-middle">
                <h2>LOOK直播</h2>
                <a href="#">更多></a>
            </div>
        </div>
        <div style="height:3000px;"></div>
    </div>
</template>

<script>
import Swiper from '@/static/js/swiper.min.js';
import BaseSongComponent from '@/components/BaseSongComponent.vue';
import '@/static/css/swiper.min.css';


export default {
    name: 'RecommendFindMusicRecommend',
    data: function(){
        return {

        }
    },
    components: {
        BaseSongComponent
    }
    ,
    mounted: function(){
        this.swiperInit();
    },
    methods: {
        swiperInit(){
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项

                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },

                // 如果需要滚动条
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
                // 自动切换
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                // 网格布局
                centeredSlides: true,
                slidesPerView: 1.7,
                // 切换效果
                effect : "coverflow",
                loop: true
            })
        }
    }
}
</script>

<style>
.lunbo{
    width: 100%;
    height: 210px;
}
.swiper-container {
    width: 100%;
    height: 210px;
} 
.swiper-container .swiper-slide a img{
    height: 100%;
    width: 580px;
}
.nav2{
    border-bottom: 1px solid #EAEAEA;
}
.nav2 h2{
    font-size: 17px;
    font-weight: 400;
    color: #333333;
    margin: 10px 0px;
}
.nav2 a{
    font-size: 13px;
    font-weight: 400;
    color: #333333;
}
</style>