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
                            v-model="state2"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            @select="handleSelect"
                            style="width: 600px;"
                            >
                            </el-autocomplete>
                            <el-button slot="append">天眼一下</el-button>
                         </div>
                        <h2>
                             <span class="text-navy" style="font-size: 15px;">热点搜索  人人网  腾讯  马蜂窝  百度外卖  子弹短信  美团点评  京东数科  当当网  海航科技  趣头条  蔚来汽车  滴滴出行  
                             陌陌科技  中国金融期货交易所
                             </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            companys: [],
            restaurants: [],
            state2: '',
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
        handleSelect(item) {
        }
    },
    /* eslint-disable */
    mounted() {
        //axios.get('http://172.28.32.22:8080/quickcompanies')
        //axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        axios.get('/api/quickcompanies')
        .then(response => {
            response.data.forEach(data => {
                let company = {'value': data.companyName};
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
