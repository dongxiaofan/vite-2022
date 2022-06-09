<template>
  <div class="clearfix">
    <div class="pall-24 bg-white">
      <a-table :row-selection="rowSelection" :columns="tableColumns" :data-source="dataSource.data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'action'">
            <a-tag>{{record.name}}</a-tag>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, reactive } from 'vue'
import common from '@/libs/common';
import { theadObj } from './tableHead.js'
import { getList } from './service';


const rowSelection = computed(() => {
  return {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: { name: string; }) => ({
      props: {
        disabled: record.name === 'Disabled User',
        name: record.name,
      },
    }),
  };
})

const columns = ['name', 'serverName', 'status', 'action']
const tableColumns = common.getTableColumns(columns, theadObj)
const dataSource = reactive({
  data: [] as any[],
  total: 0 as Number,
})

const query = () => {
  getList({pageIndex: 1, pageSize: 10}).then((res: any) => {
    console.log('resp: ', res)
    dataSource.data = res.data
    dataSource.total = res.total
  })
}

onMounted(() => {
  query()
})
</script>