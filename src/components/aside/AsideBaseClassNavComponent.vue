<!-- 菜单组件 -->

<template>
    <div class="aside-class-nav-component">
        <h6>{{ nav_class_title }}</h6>
        <nav>
            <router-link v-for="option in nav_class_list" :key="option.id" class="option" :to="option.url" >
                <img :src="option.imgUrl">
                <span>{{ option.name }}</span>
                <slot name="add_ico"></slot>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'AsideBaseClassNavComponent',
    props: {
        nav_class_title: {
            type: String,
            default: '请输入侧边栏导航分类'
        },
        nav_class_list: {
            type: Array,
            default: function(){
                return [
                    { id: 1, name: '发现音乐', imgUrl: 'www.baidu.com', url: 'www.baidu.com' },
                    { id: 2, name: '私人FM', imgUrl: 'www.baidu.com', url: 'www.baidu.com' },
                    { id: 3, name: 'LOOK直播', imgUrl: 'www.baidu.com', url: 'www.baidu.com' },
                    { id: 4, name: '视频', imgUrl: 'www.baidu.com', url: 'www.baidu.com' },
                    { id: 5, name: '朋友', imgUrl: 'www.baidu.com', url: 'www.baidu.com' }
                ]
            }
        }
    }
}
</script>

<style scoped>
.aside-class-nav-component{
    margin-bottom: 20px;
}
h6{
    margin: 10px;
    font-size: 13px;
    font-weight: 400;
    color: #666666;
}
.option{
    display: block;
    font-size: 13px;
    color: #666666;
    text-decoration: none;
    line-height: 35px;
    padding-left: 20px;
}
.option:hover{
    background-color: #eeeeee;
}
.option:hover span{
    color: #222222;
}
.option img{
    margin-right: 10px;
}
</style>