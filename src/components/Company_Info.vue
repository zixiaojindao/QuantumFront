<template>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>公司介绍</h5>
                        </div>
                        <div class="ibox-content">
                            <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="8">
                                <thead>

                                </thead>
                                <tbody v-for="(item,index) in companysinfo" :key="index">
                                    <tr>
                                        <td class="col-md-2">{{item.key}}</td>
                                        <td  class="col-md-10" style="text-align: left;" v-if="item.value==='null'"></td>
                                        <td  class="col-md-10" style="text-align: left;" v-if="item.value!=='null'">{{item.value}}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                  <tr>
                                      <td colspan="5">
                                          <ul class="pagination pull-right"></ul>
                                      </td>
                                  </tr>
                                </tfoot>
                            </table>
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
            companysinfo: [],
            loading: true,
            errored: false
        };
    },
   /* eslint-disable */
    mounted() {
          //axios.get('http://172.28.32.22:8080/quickcompanies')
          //axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
          axios.get('/api/companyInfo/' + this.windCode)
          .then(response => {
              response.data.forEach(data => {
                this.companysinfo.push(data);
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
