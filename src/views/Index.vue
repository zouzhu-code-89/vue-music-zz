<template>
    <el-container>
        <!-- 头部 -->
        <el-header height='55px'>
            <HeaderComponent></HeaderComponent>
        </el-header>
        <!-- 内容部分 -->
        <el-container>
            <el-aside width='250px' class="page-aside">
                <!-- 推荐 --><!-- 我的音乐 --><!-- 创建的歌单 -->
                <div>
                    <AsideBaseClassNavComponent v-for="navClassOption in navClassData" :key="navClassOption.id"
                                                                                   :nav_class_title="navClassOption.nav_class_title"
                                                                                   :nav_class_list="navClassOption.nav_class_list">
                    </AsideBaseClassNavComponent>
                </div>
                <!-- 播放器组件 -->
                <AsideBaseVideoComponent></AsideBaseVideoComponent>
            </el-aside>
            <!-- 内容区域 -->
            <el-main class="context_main" style="background-color:white">
                <router-view></router-view>
            </el-main>
        </el-container>
        <!-- 尾部 -->
        <el-footer height='55px' style="background-color:white" class="page-footer">
            <FooterComponent></FooterComponent>
        </el-footer>
    </el-container>
</template>


<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import AsideBaseClassNavComponent from '@/components/aside/AsideBaseClassNavComponent.vue';
import AsideBaseVideoComponent from '@/components/aside/AsideBaseVideoComponent.vue';
import aside from '@/data/aside.json';

export default {
    name: 'IndexPage',
    components: {
        HeaderComponent: Header,
        FooterComponent: Footer,
        AsideBaseClassNavComponent: AsideBaseClassNavComponent,
        AsideBaseVideoComponent: AsideBaseVideoComponent
    },
    data: function(){
        return {
            navClassData: aside,            // 侧边栏分类数据
            navBgObject: null               // 记录侧边栏上一个拥有背景的对象
        }
    },
    created: function(){

    },
    mounted: function(){
        this.asideClickBgChange();
    },
    methods: {
        asideClickBgChange: function(){
            // const text = document.getElementsByClassName('.option').addEventListener('click', function(event){
            //     const a = event.target.innerHTML;
            //     console.log(a);
            // })
            // console.log(text);
        }
    }
    
}
</script>



<style scoped>
    .page-aside{
        border-right: 1px solid #d3d3d3;
        height: 650px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .page-footer{
        border-top: 1px solid #d3d3d3;
    }
    .context_main{
        white-space: normal;
        overflow-y: auto;
        height: 650px;
    }
    /*滚动条样式*/
    .context_main::-webkit-scrollbar {/*滚动条整体样式*/
        width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
        background-color: white;
    }
    .context_main::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #999999;
        height: 10px !important;
    }
    .context_main::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: white;
    }
</style>