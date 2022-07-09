<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="groupName" label="模板组名" width="180">
      </el-table-column>
      <el-table-column prop="tplName" label="模板名称" width="180">
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.status === '0' ? 'success' : 'danger'"
            disable-transitions
            >{{ scope.row.status === '0' ? "启用" : "停止" }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="tplType" label="模板类型"> </el-table-column>
      <el-table-column prop="remark" label="备注"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { tplList, updateTpl } from "../api/tpl";
export default {
  data() {
    return {
      tableData: [],
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      tplList().then((res) => {
        this.tableData = res.data;
      });
    },

    changeStatus(value, data) {
      let updateData = {
        ...data,
      };
      console.log(value, data);
      updateData.status = value ? 1 : 0;
      updateTpl(updateData);

      this.getData();
    },
  },
};
</script>