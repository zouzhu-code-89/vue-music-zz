import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'

import RecommendFindMusic from '@/views/recommend/RecommendFindMusic.vue';
import RecommendFindMusicRecommend from '@/views/recommend/RecommendFindMusicRecommend.vue';
import RecommendFindMusicSongList from '@/views/recommend/RecommendFindMusicSongList.vue';
import RecommendFindMusicRadio from '@/views/recommend/RecommendFindMusicRadio.vue';
import RecommendFindMusicRankingList from '@/views/recommend/RecommendFindMusicRankingList.vue';
import RecommendFindMusicSinger from '@/views/recommend/RecommendFindMusicSinger.vue';
import RecommendFindMusicNew from '@/views/recommend/RecommendFindMusicNew.vue';
import RecommendPrivateMusic from '@/views/recommend/RecommendPrivateMusic.vue';
import RecommendLookStream from '@/views/recommend/RecommendLookStream.vue';
import RecommendVideo from '@/views/recommend/RecommendVideo.vue';
import RecommendFriend from '@/views/recommend/RecommendFriend.vue';

import MyLocalMusic from '@/views/local/MyLocalMusic.vue';
import MyDownloadMusic from '@/views/local/MyDownloadMusic.vue';

import MyLive from '@/views/song_list/MyLive.vue';



Vue.use(VueRouter)

const routes = [
  { 
    path: '/zz-mic', 
    name: 'Index', 
    component: Index, 
    children: [
      { 
        // 栏目1：推荐音乐路由
        path: "recommend/find/", 
        component: RecommendFindMusic, 
        children: [
          { path: "f1", component: RecommendFindMusicRecommend },
          { path: "f2", component: RecommendFindMusicSongList },
          { path: "f3", component: RecommendFindMusicRadio },
          { path: "f4", component: RecommendFindMusicRankingList },
          { path: "f5", component: RecommendFindMusicSinger },
          { path: "f6", component: RecommendFindMusicNew },
        ] 
      },
      { path: "recommend/private/p1", component: RecommendPrivateMusic },
      { path: "recommend/look/l1", component: RecommendLookStream },
      { path: "recommend/video", component: RecommendVideo },
      { path: "recommend/friend", component: RecommendFriend },

      // 栏目2：本地音乐路由
      { path: "local/local-dist", component: MyLocalMusic },
      { path: "local/download", component: MyDownloadMusic },

      // 栏目3：我喜欢的音乐
      { path: "song/live", component: MyLive }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
