<template>
  <div class="dataStatistics">
    <el-row>
      <div class="dataStatistics_title">
        <span><i class="el-icon-date"></i> 教练端</span>
      </div>
      <el-col :span="4">
        <el-card class="card">
          <div class="card_title">
            <span>今日新增</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>今日活跃</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>今日营收</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>ARPU</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>次日留存</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <div class="dataStatistics_title" style="margin-top: 30px">
        <span><i class="el-icon-date"></i> SaaS端</span>
      </div>
      <el-col :span="4">
        <el-card class="card">
          <div class="card_title">
            <span>今日新增</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>今日活跃</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>今日营收</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>ARPU</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>次日留存</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <div class="dataStatistics_title" style="margin-top: 30px">
        <span><i class="el-icon-date"></i> 相机端</span>
      </div>
      <el-col :span="4">
        <el-card class="card">
          <div class="card_title">
            <span>今日新增</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>今日活跃</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>今日营收</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>ARPU</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="card">
          <div class="card_title">
            <span>次日留存</span>
          </div>
          <div class="card_number">
            <span>99,999,999</span>
          </div>
          <div class="card_rate">
            <span>90%</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto;margin-top: 30px"></div>
    </el-row>
    <el-row>
      <el-table :data="tableData" border style="width: 100%;text-align: left;margin-top: 30px">
        <el-table-column prop="date" label="日期">
        </el-table-column>
        <el-table-column prop="newUsers" label="新增用户">
        </el-table-column>
        <el-table-column prop="activeUsers" label="活跃用户">
        </el-table-column>
        <el-table-column prop="activeUsers" label="活跃用户">
        </el-table-column>
        <el-table-column prop="activeUsers" label="活跃用户">
        </el-table-column>
        <el-table-column prop="activeUsers" label="活跃用户">
        </el-table-column>
        <el-table-column prop="activeUsers" label="活跃用户">
        </el-table-column>
        <el-table-column prop="activeUsers" label="活跃用户">
        </el-table-column>
      </el-table>
      <div class="page_control_container_dataStatistics">
        <el-pagination small layout="prev, pager, next" :total="50" class="page_control_dataStatistics">
        </el-pagination>
      </div>
    </el-row>
  </div>
</template>
<script>
  export default{
    created(){
      $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {
        Highcharts.chart('container', {
          chart: {
            zoomType: 'x'
          },
          title: {
            text: '产品数据管理'
          },
          subtitle: {
            text: '用户使用情况'
          },
          xAxis: {
            type: 'datetime'
          },
          yAxis: {
            title: {
              text: '用户量'
            }
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            area: {
              fillColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
                },
                stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
              },
              marker: {
                radius: 2
              },
              lineWidth: 1,
              states: {
                hover: {
                  lineWidth: 1
                }
              },
              threshold: null
            }
          },

          series: [{
            type: 'area',
            name: '当前用户数量',
            data: data
          }]
        });
      });
    },
    data(){
      return{
        currentDate: new Date(),
        tableData: [{
          date: '2016-05-02',
          newUsers: '99,999,999',
          activeUsers: '99,999,999'
        }, {
          date: '2016-05-04',
          newUsers: '99,999,999',
          activeUsers: '99,999,999'
        }, {
          date: '2016-05-01',
          newUsers: '99,999,999',
          activeUsers: '99,999,999'
        }, {
          date: '2016-05-03',
          newUsers: '99,999,999',
          activeUsers: '99,999,999'
        }]
      }
    }
  }
</script>
<style scoped>
  .dataStatistics{
    margin-left: 10px;
    width: 98%;
    text-align: center;
    height: 100%;
  }
  .dataStatistics_title{
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    letter-spacing: 1px;
    color: #8492A6;
  }
  .card div span{

    line-height: 20px;

  }
  .card{
    background: linear-gradient(to bottom, #F9FAFC, #EFF2F7);
  }
  .card_title{
    color: #8492A6;
    font-size: 20px;
    border-bottom: solid 1px rgb(209, 219, 229);
    padding-bottom: 10px;
  }
  .card_number{
    margin-top: 10px;
    color: #8492A6;
    font-size: 25px;
  }
  .card_rate{
    margin-top: 10px;
    text-align: right;
    font-weight: 400;
    color: #FF4949;
  }
  .page_control_container_dataStatistics{
    padding-top: 10px;
    padding-bottom: 10px;
    width: 99.8%;
    text-align: right;
    border: solid 1px rgb(223, 230, 236);
    border-top: none;
  }
  .page_control_dataStatistics{
    padding-right: 15px;
  }
</style>
