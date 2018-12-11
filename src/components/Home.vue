<template>
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row" style="margin-top: 150px;">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content text-center p-md">
                         <h2><span class="text-navy" style="font-size: 45px;">量子企业信用工具</span></h2>
                         <div style="width: 1000px;margin: 0 auto;padding-top: 35px;">
                            <el-autocomplete
                            v-model="state4"
                            :fetch-suggestions="querySearchAsync"
                            placeholder="请输入公司名称、人名、品牌名称等关键词"
                            @select="handleSelect"
                            class="input-with-select"
                            ></el-autocomplete>
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
export default {
    data() {
        return {
            restaurants: [],
            state4: '',
            timeout: null
        };
    },
    methods: {
        loadAll() {
            return [
            { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
            { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
            { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
            { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
            { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
            { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
            { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
            { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' },
            { 'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107' },
            { 'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号' },
            { 'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号' },
            { 'value': '新麦甜四季甜品炸鸡', 'address': '嘉定区曹安公路2383弄55号' },
            { 'value': 'Monica摩托主题咖啡店', 'address': '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' }
            ];
        },
        querySearchAsync(queryString, cb) {
            let restaurants = this.restaurants;
            let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
        }
    },
    mounted() {
        this.restaurants = this.loadAll();
    }
};
</script>
