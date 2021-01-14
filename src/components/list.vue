<template>
  <div>
    <h1>课程管理</h1>
    <el-container>
      <el-table :data="tableData" border style="100%">
        <el-table-column prop="date" label="时刻"> </el-table-column>
        <el-table-column prop="one" label="周一"> </el-table-column>
        <el-table-column prop="two" label="周二"> </el-table-column>
        <el-table-column prop="thire" label="周三"> </el-table-column>
        <el-table-column prop="four" label="周四"> </el-table-column>
        <el-table-column prop="five" label="周五"> </el-table-column>
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
          date: "上午",
          one: "敲代码",
          two: "敲代码",
          thire: "敲代码",
          four: "敲代码",
          five: "敲代码",
        },
        {
          date: "上午",
          one: "敲代码",
          two: "敲代码",
          thire: "敲代码",
          four: "敲代码",
          five: "敲代码",
        },
        {
          date: "中午",
          one: "",
          two: "休",
          thire: "",
          four: "息",
          five: "",
        },
        {
          date: "下午",
          one: "改BUG",
          two: "改BUG",
          thire: "改BUG",
          four: "改BUG",
          five: "改BUG",
        },
        {
          date: "下午",
          one: "改BUG",
          two: "改BUG",
          thire: "改BUG",
          four: "改BUG",
          five: "改BUG",
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