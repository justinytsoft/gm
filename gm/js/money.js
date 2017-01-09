mui.ready(function(){
	
	mui.init();
	
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('main'));
	
	// 指定图表的配置项和数据
	option = {
		title: {
			text:"9636.00",
			subtext:"总金额",
			top:"center",
			left:"center",
			itemGap:5,
			textStyle:{
				color:"#CF2D28",
				fontSize:20
			},
			subtextStyle:{
				color:"#323232",
				fontSize:18
			},
		},
		color:['#ffb400', '#2196f3', '#ffb400', '#546570'],
	    tooltip: {
	        trigger: 'item',
	        confine: true,
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['可提现','结算中']
	    },
	    series: [
	        {
	            name:'资金',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: true,
	                    position: "outside",
	                    formatter: '{b} : {c}元'
	                },
	                emphasis: {
	                    show: false
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: true
	                }
	            },
	            data:[
	                {value:2000, name:'可提现'},
	                {value:7636, name:'结算中'}
	            ]
	        }
	    ]
	};
	
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
});