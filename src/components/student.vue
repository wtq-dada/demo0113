<template>
  <div>
    <h1>学生管理</h1>
    <el-button type="primary" @click="$router.push('/user/add')">添加</el-button>
    <el-container>
      <el-table :data="tableData" border style="100%">
        <el-table-column prop="id" label="学号"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="radio" label="性别"> </el-table-column>
        <el-table-column prop="xueke" label="学科"> </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 100021,
          name: "王",
          radio: "男",
          xueke:'web前端'
        },
        {
          id: 100022,
          name: "李",
          radio: "女",
           xueke:'UI'
        },
        {
          id: 100023,
          name: "常",
          radio: "女",
           xueke:'Java'
        },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  font-size: 30px;
}
</style>