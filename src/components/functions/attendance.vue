<template>
    <div class="attendance">
        <div class="line flexS">
            <div class="search-item">
                准确时间段：
                <div class="block">
                    <el-date-picker v-model="value7" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2">
                    </el-date-picker>
                </div>
            </div>
            <div class="search-item">
                姓名：
                <div class="block">
                    <el-input v-model="value7" placeholder="请输入姓名"></el-input>
                </div>
            </div>
            <div class="search-item">
                状态：
                <el-dropdown>
                    <el-button>
                        选择状态
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>111</el-dropdown-item>
                        <el-dropdown-item>222</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="line flexS">
            <div class="search-item">
                快捷时间段：
                <el-dropdown>
                    <el-button>
                        选择时间
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>111</el-dropdown-item>
                        <el-dropdown-item>222</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="search-item">
                <el-button type="primary">查找</el-button>
            </div>
        </div>
        <div class="line">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="日期" width="120" fixed>
                </el-table-column>
                <el-table-column prop="name" label="儿童" fixed>
                </el-table-column>
                <el-table-column prop="attendance" label="出勤">
                </el-table-column>
                <el-table-column label="症状">
                    <template scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>详情: {{ scope.row.zhengzhuang }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag>{{ scope.row.zhengzhuang }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="处理方法" width="100">
                    <template scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>详情: {{ scope.row.chuli }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag>{{ scope.row.chuli }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="chixu" label="持续时间" width="100">
                </el-table-column>
                <el-table-column label="就诊情况" width="100">
                    <template scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>详情: {{ scope.row.jiuz }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag>{{ scope.row.jiuz }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="诊断情况" width="100">
                    <template scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>详情: {{ scope.row.zhend }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag>{{ scope.row.zhend }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="zongsj" label="总时间" width="100">
                </el-table-column>
                <el-table-column prop="xiuxue" label="已设定休学" width="120">
                </el-table-column>
                <el-table-column label="备注">
                    <template scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>详情: {{ scope.row.beiz }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag>{{ scope.row.beiz }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="150" fixed="right">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="line flexE">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentPage1: 5,
            value7: '',
            pickerOptions2:'',
            tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    attendance: '请假',
                    zhengzhuang: '发烧',
                    chuli: '请假回家',
                    chixu: '100min',
                    jiuz: '吃药',
                    zhend: '40度',
                    zongsj: '300min',
                    xiuxue: '否',
                    beiz: '注意休息'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    attendance: '请假',
                    zhengzhuang: '发烧',
                    chuli: '请假回家',
                    chixu: '100min',
                    jiuz: '吃药',
                    zhend: '40度',
                    zongsj: '300min',
                    xiuxue: '否',
                    beiz: '注意休息'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    attendance: '请假',
                    zhengzhuang: '发烧',
                    chuli: '请假回家',
                    chixu: '100min',
                    jiuz: '吃药',
                    zhend: '40度',
                    zongsj: '300min',
                    xiuxue: '否',
                    beiz: '注意休息'
                }
            ]
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>
<style scoped>
.attendance {
    padding: 20px;
}

.line {
    padding: 10px;
}

.pr {
    float: right;
}

.line .el-pagination {
    padding: 0;
    display: inline-block;
}

.flexS {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.flexE {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.search-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 20px;
}
</style>