// 获取表头信息
function getTableColumns (arr:any, tableColumns: any) {
  let data:any = []
  arr.forEach((col:any) => data.push(tableColumns[col]))
  return data
}


export default {
  getTableColumns,
}