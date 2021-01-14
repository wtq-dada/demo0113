<template>
    <div>
        <h1>学生信息页面</h1>
        <el-form style="width:400px" label-width="80px">
            <el-form-item label="姓名">
                <el-input placeholder="请输入姓名" v-model="info.name"></el-input>
            </el-form-item>
            <el-form-item label="学号">
                <el-input placeholder="请输入id" v-model="info.id"></el-input>
            </el-form-item>
            <el-form-item label="性别" >
                <el-radio v-model="info.radio" label="男">男</el-radio>
                <el-radio v-model="info.radio" label="女">女</el-radio>
            </el-form-item>
            <el-form-item label="所学科目">
                <el-select v-model="info.xueke"> 
                    <el-option label="web前端" value="web前端"></el-option>
                    <el-option label="UI" value="UI"></el-option>
                    <el-option label="Java" value="Java"></el-option>
                    <el-option label="数据库" value="数据库"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info:{
                id:'',
                name:'',
                radio:'男',
                xueke:'web前端'
            }
        }
    },
}
</script>