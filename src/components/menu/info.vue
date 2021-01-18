<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/menu' }">菜单管理</el-breadcrumb-item>
            <el-breadcrumb-item>菜单{{tip}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :model="info" :rules="rules" ref="menuform" style="width:500px;" label-width="80px">
            <el-form-item label="上级菜单" prop="pid">
                <el-select v-model="info.pid" @change="pidChange">
                    <el-option label="顶级菜单" :value="0"></el-option>
                    <el-option v-for="menuitem of menuarr"
                                :key="menuitem.id"
                                :label="menuitem.title"
                                :value="menuitem.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="菜单名称" prop="title">
                <el-input placeholder="请输入菜单名称" v-model="info.title"></el-input>
            </el-form-item>
            <el-form-item label="菜单类型">
                <el-radio-group v-model="info.type">
                    <el-radio :label="1">目录</el-radio>
                    <el-radio :label="2">菜单</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="菜单图标" v-show="info.type == 1">
                <el-input placeholder="请输入菜单图标" v-model="info.icon"></el-input>
            </el-form-item>
            <el-form-item label="菜单地址" v-show="info.type == 2">
                <el-input placeholder="请输入菜单地址" v-model="info.url"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-switch v-model="info.status" :active-value='1' :inactive-value='2'></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tip:'添加',
            info:{
                pid:'',
                title:'',
                type:1,
                icon:'',
                url:'',
                status:1
            },
            rules:{
                pid:[
                    {required:true,message:'请选择'}
                ],
                title:[
                    {required:true,message:'请输入'},
                    {min:3,max:20,message:"名称应为3~20个字符之间"}
                ],
            },
            menuarr:[]
        }
    },
    mounted(){
        if(this.$route.params.id){
            this.tip='编辑'
            this.axios.get('/api/menuinfo',{params:{id:this.$route.params.id}}).then(result=>{
                this.info = result.data.list
            })
        }
        this.axios.get('/api/menulist?pid=0').then(res=>{
            this.menuarr=res.data.list
        })
    },
    methods:{
        submit(){
            this.$refs['menuform'].validate((val)=>{
                if(val){
                    var url = '/api/menuadd'
                    if(this.$route.params.id){
                        //如果是编辑操作，则执行修改的接口，并添加接口需要的必要参数
                        url = '/api/menuedit'
                        this.info.id = this.$route.params.id
                    }
                    this.axios.post(url,this.info).then(res=>{
                        if(res.data.code === 200){
                             this.$router.push('/menu')
                        }
                    })
                }
            })
        },
        pidChange(n){
        this.info.type = n==0 ? 1 : 2;
        }
    }
}
</script>