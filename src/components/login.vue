<template>
    <div class="page">
        <el-form class="form" :model="info" :rules="rules" ref="login">
            <h2>登录页面</h2>
            <el-form-item prop="username">
                <el-input placeholder="请输入用户名" v-model="info.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="info.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="dologin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info:{username:'',password:''},
            rules:{
                username:[
                    { required:true,message:'请填写用户名' },
                    { min:3,max:20,message:'用户名应该在3~20个字符之间' }
                ],
                password:[
                    { required:true,message:'请填写密码' },
                    { min:2,max:15,message:'密码长度为2~15个字符之间' }
                ]
            }
        }
    },
    methods:{
        dologin(){
            this.$refs.login.validate(value=>{
                if(value){
                    this.axios({
                        url:'/api/userlogin',
                        method:'post',
                        data:this.info
                    }).then(res=>{
                        if(res.data.code !==200){
                            this.$message(res.data.msg)
                        }else{
                            this.$store.commit('setUserInfo',res.data.list)
                            this.$router.replace('/')
                        }
                    })
                }
            })
        }
    }
}
</script>
<style scoped>
    .page{
        width: 100vw;
        height: 100vh;
        background:#E1FFFF;
        position: fixed;
    }
    .form{
        width: 500px;
        height: 300px;
        background: #ADD8E6;
        margin: 150px auto;
        border-radius: 20px;
    }
    h2{
        text-align: center;
        margin: 20px;
    }
    .el-input{
        width: 80%;
    }
    .el-button{
        width: 80%;
    }
    .el-form-item{
        margin-left: 100px;
    }
</style>