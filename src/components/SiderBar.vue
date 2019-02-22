<template>
    <div id="wrapper" style="margin-top: -60px">
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <span>
                                <img alt="image" class="img-circle" src="../../static/img/profile_small.jpg" />
                            </span>
                            <a data-toggle="dropdown" class="dropdown-toggle">
                                <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
                                </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a @click='gohome()'><i class="fa fa-diamond"></i> <span class="nav-label">首页</span></a>
                    </li>
                    <li>
                        <a @click='gocompanyInfo()'><i class="fa fa-diamond"></i> <span class="nav-label">公司信息</span></a>
                    </li>
                    <li>
                        <a @click='gocreditReport()'><i class="fa fa-diamond"></i> <span class="nav-label">信用报告</span></a>
                    </li>
                </ul>
          </div>
        </nav>
        <div id="page-wrapper" class="gray-bg">
            <router-view v-bind:windCode="windCode" @setwindCode="setwindCode"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windCode: ''
        };
    },
    methods: {
        gohome: function() {
            this.$router.push({name: 'Home', activeClass: 'active', query: {windCode: this.windCode}});
        },
        gocompanyInfo: function() {
            this.$router.push({name: 'CompanyInfo', activeClass: 'active', query: {windCode: this.windCode}});
        },
        gocreditReport: function() {
            this.$router.push({name: 'CreditReport', activeClass: 'active', query: {windCode: this.windCode}});
        },
        setwindCode: function(data) {
            this.windCode = data;
        }
    }
};
</script>
