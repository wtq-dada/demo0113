<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>角色管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="success" size="mini" @click="$router.push('/role/add')">添加</el-button>
        <el-table :data="arr">
            <el-table-column prop="id" label="编号" ></el-table-column>
            <el-table-column prop="rolename" label="角色名称" ></el-table-column>
            <el-table-column prop="status" label="状态">
                 <template slot-scope="item">
                    <el-tag v-if="item.row.status == 1">启用</el-tag>
                    <el-tag v-else>禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作"  width="150">
                <template slot-scope="item">
                    <el-button size="mini" type="primary" @click="$router.push('/role/'+item.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="del(item.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[]
        }
    },
    mounted(){
        this.axios.get('/api/rolelist').then(res=>{
            this.arr=res.data.list
        })
    },
    methods:{
        del(id){
            this.$confirm('此操作将永久删除此角色, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.axios.post('/api/roledelete',{id}).then(res=>{
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
</style>