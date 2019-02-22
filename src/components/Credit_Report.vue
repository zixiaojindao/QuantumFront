<template>
    <div class="wrapper wrapper-content animated fadeInRight">

        <div class="row">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                         <el-select v-model="value" placeholder="请选择" style="left: -420px;">
                            <el-option
                            v-for="item in report_dates"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>总体摘要</h5>
                    </div>
                    <div class="ibox-content">
                        <h5>万科企业股份有限公司</h5>
                        <div class="ibox-content">
                            <table class="table table-bordered" >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th style="text-align: center;">{{rating[0].ratingName}}</th>
                                        <th style="text-align: center;">{{rating[1].ratingName}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>信用评级</td>
                                        <td>{{rating[0].rating}}</td>
                                        <td>{{rating[1].rating}}</td>
                                    </tr>
                                    <tr>
                                        <td>评级展望</td>
                                        <td>{{rating[0].ratingExpectation}}</td>
                                        <td>{{rating[1].ratingExpectation}}</td>
                                    </tr>
                                    <tr>
                                        <td>评级日期</td>
                                        <td>{{rating[0].ratingDate}}</td>
                                        <td>{{rating[1].ratingDate}}</td>
                                    </tr>
                                    <tr>
                                        <td>评级机构</td>
                                        <td>{{rating[0].ratingOrg}}</td>
                                        <td>{{rating[1].ratingOrg}}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <span>总体摘要:</span>
                        <p v-html='abstract' style="white-space: pre-line;text-align: left;"></p>
                    </div>
                </div>
            </div>
        </div>
         <div class="row">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>信用评分明细</h5>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover dataTables-example">
                                <thead>
                                    <tr >
                                        <th>*********</th>
                                        <th v-for="(item,index) in credit_detail " :key="index" >{{item.reportDate}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>盈利能力</td>
                                        <th v-for="(item,index) in credit_detail " :key="index" >{{item.earningsScore}}</th>
                                    </tr>
                                    <tr>
                                        <td>偿债能力</td>
                                        <th v-for="(item,index) in credit_detail " :key="index" >{{item.debtPaymentScore}}</th>
                                    </tr>
                                    <tr>
                                        <td>资本结构</td>
                                        <th v-for="(item,index) in credit_detail " :key="index" >{{item.capitalStructureScore}}</th>
                                    </tr>
                                    <tr>
                                        <td>营运能力</td>
                                        <th v-for="(item,index) in credit_detail " :key="index" >{{item.operatingScore}}</th>
                                    </tr>
                                    <tr>
                                        <td>绝对值信用分值</td>
                                        <th v-for="(item,index) in credit_detail " :key="index" >{{item.absScore}}</th>
                                    </tr>
                                    <tr>
                                        <td>总分值</td>
                                        <th v-for="(item,index) in credit_detail " :key="index" >{{item.relScore}}</th>
                                    </tr>
                                    <tr>
                                        <td>趋势信用分值</td>
                                        <th v-for="(item,index) in credit_detail " :key="index" >{{item.totalScore}}</th>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
         <div class="row">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>财务比率</h5>
                    </div>
                    <div class="ibox-content">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover dataTables-example" >
                                <thead>
                                    <tr>
                                        <th>报告期:{{value}}</th>
                                        <th>总资产(亿元)</th>
                                        <th>总负债(亿元)</th>
                                        <th>收入(亿元)</th>
                                        <th>毛利率</th>
                                        <th>总资产收益率</th>
                                        <th>经营活动净现金流利息保障倍数</th>
                                        <th>经营活动现金流/债务</th>
                                        <th>EBIT利息保障倍数</th>
                                        <th>EBIT/债务</th>
                                        <th>资产负债率</th>
                                        <th>债务/债务和权益</th>
                                        <th>流动比率</th>
                                        <th>存货周转率</th>
                                        <th>应收账款周转率</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                        <td>本企业</td>
                                        <th v-for="(item,index) in frs_ratio[0]" :key="index" >{{item}}</th>
                                        <!-- <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th>
                                        <th>{{frs_ratio.FRS.BS.TotalAsset}}</th> -->
                                  </tr>
                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['windCode'],
    data() {
        return {
            report_dates: [],
            abstract: '',
            rating: '',
            loading: true,
            errored: false,
            value: '',
            credit_detail: [],
            frs_ratio: []
        };
    },
  /* eslint-disable */
    created: function() {
            axios.get('/api/credit_report/summary/update_frs/wind_code/' + this.windCode)
            .then(response => {
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => this.loading = false)
    },
    mounted() {
          //axios.get('http://172.28.32.22:8080/quickcompanies')
          //axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
          axios.get('/api/credit_report/summary/get_frs_report_date_list/wind_code/' + this.windCode)
          .then(response => {
                this.value = response.data[0];
                response.data.forEach(data => {
                  let report_date = ({'value': data, 'label':data});
                  this.report_dates.push(report_date);
                });

               axios.get('/api/credit_report/get_summary/wind_code/' + this.windCode +'/report_date/' + this.value)
                .then(response => {
                    this.abstract = response.data;
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => this.loading = false)

                axios.get('/api/credit_report/get_credit_detail/wind_code/' + this.windCode +'/report_date/' + this.value)
                .then(response => {
                     this.credit_detail = [];
                     response.data.forEach(data => {
                      this.credit_detail.push(data);
                    });
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => this.loading = false)

                 axios.get('/api/credit_report/get_frs_ratio/wind_code/' + this.windCode +'/report_date/' + this.value)
                .then(response => {
                     this.frs_ratio = [];
                    console.log(response.data)
                    this.frs_ratio.push(response.data);
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => this.loading = false)
          })
          .catch(error => {
              console.log(error);
              this.errored = true;
          })
          .finally(() => this.loading = false)
    },

    watch: {
      'value': function() {
         axios.get('/api/credit_report/get_summary/wind_code/' + this.windCode +'/report_date/' + this.value)
          .then(response => {
              this.abstract = response.data;
          })
          .catch(error => {
              console.log(error);
              this.errored = true;
          })
          .finally(() => this.loading = false)

          axios.get('/api/credit_report/summary/get_credit_rating/wind_code/' + this.windCode +'/report_date/' + this.value)
          .then(response => {
              this.rating = response.data;
          })
          .catch(error => {
              console.log(error);
              this.errored = true;
          })
          .finally(() => this.loading = false)

          axios.get('/api/credit_report/get_credit_detail/wind_code/' + this.windCode +'/report_date/' + this.value)
          .then(response => {
                this.credit_detail = [];
                response.data.forEach(data => {
                this.credit_detail.push(data);
              });
          })
          .catch(error => {
              console.log(error);
              this.errored = true;
          })
          .finally(() => this.loading = false)
      }
    }
};
</script>
