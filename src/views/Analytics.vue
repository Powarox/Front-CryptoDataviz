<template lang="html">
    <div id="analytics">
        <h2>Analytics</h2>
        <button @click="draw()">draw graph</button>
        <div id="ApexBarLine"></div>
    </div>
</template>

<script>
    import ApexCharts from 'apexcharts';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Analytics',
        components: {
        },
        data() {
            return {

            }
        },
        methods: {
            draw() {
                var options = {
                    series: [{
                        name: 'series1',
                        data: [31, 40, 28, 51, 42, 109, 100]
                    }, {
                        name: 'series2',
                        data: [11, 32, 45, 32, 34, 52, 41]
                    }],
                    chart: {
                        height: 350,
                        type: 'area'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                    },
                    tooltip: {
                        x: {
                            format: 'dd/MM/yy HH:mm'
                        },
                    },
                };

                var chart = new ApexCharts(document.querySelector("#ApexBarLine"), options);
                chart.render();

            }
        },
        computed: {
            ...mapGetters([
                'getLoadData', 'getLoadPrice', 'getData'
            ]),
        }
    }
</script>

<style lang="css" scoped>
    #analytics {
        padding: 30px;
    }
</style>
