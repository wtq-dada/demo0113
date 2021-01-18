<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="success" size="mini" @click="$router.push('/user/add')">添加</el-button>
        <el-table :data="arr">
            <el-table-column prop="id" label="编号" ></el-table-column>
            <el-table-column prop="rolename" label="所属角色" ></el-table-column>
            <el-table-column prop="username" label="管理员名称" ></el-table-column>
            <el-table-column prop="status" label="状态">
                 <template slot-scope="item">
                    <el-tag v-if="item.row.status == 1">启用</el-tag>
                    <el-tag v-else>禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作"  width="150">
                <template slot-scope="item">
                    <el-button size="mini" type="primary" @click="$router.push('/user/'+item.row.uid)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="del(item.row.uid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background 
            :total="total" :page-size="2"
            layout="prev,pager,next"
            @current-change="pageChange"></el-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[],
            total:0,
            page:1
        }
    },
    mounted(){
        this.axios({
            url:'/api/usercount',
            // 设置请求头信息
            headers:{
                Authorization:this.$store.state.userinfo.token
            }
        }).then(res=>{
            if(res.data.code === 200){
                this.total = res.data.list[0].total
            }
         })
        this.getPageList();
    },
    methods:{
        getPageList(){
            this.axios({
                url:'/api/userlist',
                params:{size:2,page:this.page},
                headers:{
                    Authorization:this.$store.state.userinfo.token
                }
            }).then(res=>{
                this.arr=res.data.list
            })
        },
        pageChange(n){
            this.page=n;
            this.getPageList();
        },
        del(uid){
            this.$confirm('此操作将永久删除此管理员, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                axios.post('/api/userdelete',{uid}).then(res=>{
                    if(res.data.code === 200){
                        this.arr=res.data.list
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }else{
                        this.$message({
                            type: 'info',
                            message: res.data.msg
                        });
                    }
                })
            }).catch(()=>{})
        }
    }
}
</script>
<style scoped>
.el-pagination{
    margin-top: 15px;
    text-align: center;
}
</style>