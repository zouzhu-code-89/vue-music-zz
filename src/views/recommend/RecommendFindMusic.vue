<template>
    <div class="recommend">
        <div class="nav" id="nav">
            <router-link to="f1">个性推荐</router-link>
            <router-link to="f2">歌单</router-link>
            <router-link to="f3">主播电台</router-link>
            <router-link to="f4">排行榜</router-link>
            <router-link to="f5">歌手</router-link>
            <router-link to="f6">最新音乐</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'RecommendFindMusic',
    data: function(){
        return {
            beforeClickObject: null,
            i:1
        }
    },
    mounted: function(){
        this.navClickEffect();
    },
    methods: {
        navClickEffect(){
            $('body').on('click', '#nav a', function(event){
                $(this).addClass('red_border');
            });
        }
    }
}
</script>

<style scoped>
    .nav{
        text-align: center;
        border-bottom: 1px solid #C1C1C1;
    }
    .nav a{
        margin-right: 15px;
        display: inline-block;
        width: 65px;
        padding-bottom: 10px;
        text-align: center;
        font-size: 15px;
    }
    .red_border{
        border-bottom: 2px solid #C7473D;
    }
    .nav a:hover{
        color: #C7473D;
    }
</style>