<template>
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row" style="margin-top: 150px;">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content text-center p-md">
                        <h2><span class="text-navy" style="font-size: 45px;">量子企业信用工具</span></h2>
                         <div style="width: 1000px;margin: 0 auto;padding-top: 35px;">
                           <el-autocomplete
                            class="inline-input"
                            v-model="searchcompany"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入公司名称、人名、品牌名称等关键词"
                            :trigger-on-focus="false"
                            style="width: 600px;"
                            >
                            </el-autocomplete>
                            <el-button slot="append" style="margin-left: -9px;width: 105px;" @click="handleSelect()">搜索一下</el-button>
                         </div>
                        <h2>
                             <span class="text-navy" style="font-size: 15px;">热点搜索  人人网  腾讯  马蜂窝  百度外卖  子弹短信  美团点评  京东数科  当当网  海航科技  趣头条  蔚来汽车  滴滴出行
                             陌陌科技  中国金融期货交易所
                             </span>
                        </h2>
                        <div style="margin-top: 25px;padding-left: 19px;font-size: 0;text-align: center;overflow: hidden;">
                          <div style="display: inline-block;width: 44px;height: 44px;    overflow: hidden;border: 1px solid rgba(255, 255, 255, 0.5);    margin-right: 10px;padding-top: 4px;font-size: 14px;    line-height: 14px;color: #e0e0e0;background: rgba(255, 255, 255, 0.15);">
                          </div>
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
            companys: [],
            restaurants: [],
            searchcompany: '',
            timeout: null,
            info: null,
            loading: true,
            errored: false
        };
    },
    methods: {
        querySearch(queryString, cb) {
            let companys = this.companys;
            let results = queryString ? companys.filter(this.createFilter(queryString)) : companys;
            cb(results);
        },
        createFilter(queryString) {
            return (company) => {
                return (company.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
         /* eslint-disable */
        handleSelect() {
            let self = this;
            for(let i = 0; i < self.companys.length; i++) {
                if(self.companys[i].value == self.searchcompany) {
                   console.log(self.companys[i].value);
                   console.log(self.companys[i].windCode);
                   self.windCode = self.companys[i].windCode;
                   break;
                }
            }
            self.$emit('setwindCode',self.windCode);
            self.$router.push({name: 'CompanyInfo', query: {windCode: self.windCode}});
        }
    },
    /* eslint-disable */
    mounted() {
        //axios.get('http://172.28.32.22:8080/quickcompanies')
        //axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        axios.get('/api/quickcompanies')
        .then(response => {
            response.data.forEach(data => {
                let company = {'value': data.companyName, 'windCode':data.windCode};
                this.companys.push(company);
            });
        })
        .catch(error => {
            console.log(error);
            this.errored = true;
        })
        .finally(() => this.loading = false)
    }
};
</script>
