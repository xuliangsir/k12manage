<template>
    <div class="attendanceAdd">
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="考勤时间">
                <el-col :span="10">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col :span="4" class="txtC">
                    <span> - </span>
                </el-col>
                <el-col :span="10">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="症状">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="处理方法">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="时间">
                <el-col :span="4" class="txtC">
                    <span>持续时间</span>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="form.desc"></el-input>
                </el-col>
                <el-col :span="4" class="txtC">
                    <span>总时间</span>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="form.desc"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="就诊情况">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="诊断情况">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="已设定休学">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
<style lang="css" scoped>
.attendanceAdd {
    width: 800px;
    padding: 20px;
}

.txtC {
    text-align: center;
}
</style>