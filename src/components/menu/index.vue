<template>
    <div>
        <h1>菜单管理页面</h1>
        <el-button type="success" size="mini" @click="$router.push('/menu/add')">添加</el-button>
        <el-table :data="arr" style="width:1000px">
            <el-table-column prop="id" label="编号"></el-table-column>
            <el-table-column prop="title" label="菜单名称"></el-table-column>
            <el-table-column prop="type" label="菜单类型">
                <template slot-scope="item">
                    <el-tag v-if="item.row.type == 1">目录</el-tag>
                    <el-tag v-else>菜单</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="icon" label="菜单图标"></el-table-column>
            <el-table-column prop="url" label="菜单地址"></el-table-column>
            <el-table-column prop="status" label="状态">
                 <template slot-scope="item">
                    <el-tag v-if="item.row.status == 1">启用</el-tag>
                    <el-tag v-else>禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作"  width="150">
                <template>
                    <el-button size="mini" type="primary">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            arr:[]
        }
    },
    mounted(){
        axios.get('/api/menulist').then(res=>{
            this.arr=res.data.list
        })
    }
}
</script>
<style scoped>
    h1{
        font-size: 30px;
    }
</style>