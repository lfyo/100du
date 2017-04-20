$(function () {
	
	// 处理nav图片位置
	(function () {
		// nav图片位置
		$('.nav li a').each(function (index, ele) {
			$(this).css('background-position',index * -66+'px 0');
		}).hover(function () {
			// console.log($(this).index())
			$(this).css('background-position',$(this).index('li a') * -66+'px -70px');
		}, function () {
			$(this).css('background-position',$(this).index('li a') * -66+'px 0');
		})	
	})();
	
	// 搜索框
	(function () {
		var data = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var search = $("#bar_search");
		var iNow = 0;
		
		search.val(data[iNow]);
		$(".menu li").each(function(){
			$(this).click(function (){
				$('.menu li').attr('class', 'gradient');
				$(this).addClass('active');
				iNow = $(this).index();
				search.val(data[iNow]);
			})
		});
		
		search.focus(function () {
			if ($(this).val() == data[iNow] ){
				search.val('');
			}
		})
		search.blur(function () {
			if (search.val() == '') {
				search.val(data[iNow]);
			}
		})
	})();
	
	// tabs 
	(function () {
		
		var data = [
		'<li><div class="img"><a href=""><img src="image/content/hot_list_pic1.gif" alt="内容图片"></a><div class="sheng"><img src="image/content/sheng.png"></div></div><div class="text"><h3><a href="">御舟和涵珍园国际酒店</a></h3><p>区域省：朝阳/CBD<br>人均：180元<br>人气：12321</p></div></li><li><div class="img"><a href=""><img src="image/content/hot_list_pic1.gif" alt="内容图片"></a><div class="sheng"><img src="image/content/sheng.png"></div></div><div class="text"><h3><a href="">御舟和涵珍园国际酒店</a></h3><p>区域省：朝阳/CBD<br>人均：180元<br>人气：12321</p></div></li><li><div class="img"><a href=""><img src="image/content/hot_list_pic1.gif" alt="内容图片"></a><div class="sheng"><img src="image/content/sheng.png"></div></div><div class="text"><h3><a href="">御舟和涵珍园国际酒店</a></h3><p>区域省：朝阳/CBD<br>人均：180元<br>人气：12321</p></div></li>',
		'<li><div class="img"><a href=""><img src="image/content/hot_list_pic2.gif" alt="内容图片"></a><div class="sheng"><img src="image/content/sheng.png"></div></div><div class="text"><h3><a href="">商务国际酒店</a></h3><p>区域省：朝阳/CBD<br>人均：180元<br>人气：12321</p></div></li><li><div class="img"><a href=""><img src="image/content/hot_list_pic2.gif" alt="内容图片"></a><div class="sheng"><img src="image/content/sheng.png"></div></div><div class="text"><h3><a href="">商务国际酒店</a></h3><p>区域省：朝阳/CBD<br>人均：180元<br>人气：12321</p></div></li><li><div class="img"><a href=""><img src="image/content/hot_list_pic2.gif" alt="内容图片"></a><div class="sheng"><img src="image/content/sheng.png"></div></div><div class="text"><h3><a href="">商务国际酒店</a></h3><p>区域省：朝阳/CBD<br>人均：180元<br>人气：12321</p></div></li>'
		];
		var dataQJ = [
			'<li class="title"><span class="tit1">商店名</span><span class="tit2">省</span><span class="tit3">打印</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li>',
			'<li class="title"><span class="tit1">商店名</span><span class="tit2">省</span><span class="tit3">打印</span></li><li><a href="">天津拔萝卜丝</a><span class="sheng">19%</span><span class="print">678</span></li><li><a href="">天津拔萝卜丝</a><span class="sheng">19%</span><span class="print">678</span></li><li><a href="">天津拔萝卜丝</a><span class="sheng">19%</span><span class="print">678</span></li><li><a href="">天津拔萝卜丝</a><span class="sheng">19%</span><span class="print">678</span></li><li><a href="">天津拔萝卜丝</a><span class="sheng">19%</span><span class="print">678</span></li>',
			'<li class="title"><span class="tit1">商店名</span><span class="tit2">省</span><span class="tit3">打印</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li><li><a href="">老北京一尊皇牛</a><span class="sheng">12%</span><span class="print">245</span></li>'
		];
		var dataImg = [
			'<img src="image/content/123.gif"/>',
			'<img src="image/content/456.jpg"/>'
		];
		var dataLife = [
			'<li class="title"><span class="tit1">标 题</span><span class="tit2">状态</span></li><li><span><s>【</s>美食<s>】</s></span><a href="">推荐几款性价比比较好的冰箱</a><img src="image/ico1.gif" alt=""></li><li><span><s>【</s>购物<s>】</s></span><a href="">生活中那些商品包装有缺陷</a><img src="image/ico2.gif" alt=""></li><li><span><s>【</s>美食<s>】</s></span><a href="">推荐几款性价比比较好的冰箱</a><img src="image/ico1.gif" alt=""></li><li><span><s>【</s>购物<s>】</s></span><a href="">生活中那些商品包装有缺陷</a><img src="image/ico2.gif" alt=""></li><li><span><s>【</s>美食<s>】</s></span><a href="">推荐几款性价比比较好的冰箱</a><img src="image/ico1.gif" alt=""></li>',
			'<li class="title"><span class="tit1">标 题</span><span class="tit2">状态</span></li><li><span><s>【</s>旅游<s>】</s></span><a href="">啦啦啦啦拉拉</a><img src="image/ico1.gif" alt=""></li><li><span><s>【</s>购物<s>】</s></span><a href="">啦啦啦啦拉拉</a><img src="image/ico2.gif" alt=""></li><li><span><s>【</s>旅游<s>】</s></span><a href="">啦啦啦啦拉拉</a><img src="image/ico1.gif" alt=""></li><li><span><s>【</s>旅游<s>】</s></span><a href="">啦啦啦啦拉拉</a><img src="image/ico2.gif" alt=""></li><li><span><s>【</s>美食<s>】</s></span><a href="">啦啦啦啦拉拉</a><img src="image/ico1.gif" alt=""></li>',
			'<li class="title"><span class="tit1">标 题</span><span class="tit2">状态</span></li><li><span><s>【</s>美食<s>】</s></span><a href="">推荐几款性价比比较好的冰箱</a><img src="image/ico1.gif" alt=""></li><li><span><s>【</s>购物<s>】</s></span><a href="">生活中那些商品包装有缺陷</a><img src="image/ico2.gif" alt=""></li><li><span><s>【</s>美食<s>】</s></span><a href="">推荐几款性价比比较好的冰箱</a><img src="image/ico1.gif" alt=""></li><li><span><s>【</s>购物<s>】</s></span><a href="">生活中那些商品包装有缺陷</a><img src="image/ico2.gif" alt=""></li><li><span><s>【</s>美食<s>】</s></span><a href="">推荐几款性价比比较好的冰箱</a><img src="image/ico1.gif" alt=""></li>'
		];
		
		tab($('.tabNav1 li'), $('.tabCon1'), 'click', data);
		tab($('.cupons .tabs li'), $('.cupons .list ul'), 'mouseenter', dataQJ)
		tab($('.tabNav2 li'), $('.tabCon2'), 'click', dataImg)
		tab($('.lifeStyle .tabs ul li'), $(".lifeStyle .list ul"), 'mouseenter', dataLife)
		
		function tab (tabNews, tabCon, ev, data) {
			$(tabNews).each(function () {
				$(this).on(ev, function (){
					$(tabNews).removeClass('active').addClass('gradient');
					$(this).addClass('active').removeClass('gradient');
					$(tabNews).find('a').attr('class', 'triangle_down_gray');
					$(this).find('a').attr('class', 'triangle_down_red');
					
					var con = $(tabCon).empty();
					con.html(data[$(this).index()]);
				});
			})
		}
	})();
	
	// 图片切换
	(function () {
		var silderContent= $(".recommend .slider ul li");
		var sliderController = $(".recommend .slider ol li");
		var len = sliderController.size();
		var con = $('.recommend .slider');	
		var sliderText = $(".recommend .slider ul li span");
		var data = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
		var iNow = 0;
		var timer = null;
		
		silderContent.hide().eq(0).show();
		autoPlay();
		sliderController.each(function () {
			$(this).on('click', function () {
				iNow = $(this).index();
				fnFade(iNow);
			});
		});

		function fnFade (index) {
			
			silderContent.fadeOut().eq(index).fadeIn();
			sliderController.removeClass('active').eq(index).addClass('active');
			sliderText.text(data[iNow]);
		};
		
		function autoPlay () {
			timer = setInterval(function () {
				iNow++;
				iNow = iNow%len;
				fnFade(iNow);
			},2000)
		}
		
		
		con.hover(function  () {
			clearInterval(timer);
		}, function () {
			autoPlay();
		})
		
	})();
	
	// 日历
	(function () {
		var todayInfo = $(".calendar .today_info");
		var img = $(".calendar ol .ctr img");
		var infoImg = todayInfo.find("img");
		var infoTit = todayInfo.find("i");
		
		var infoTxt = todayInfo.find("p");
		
		
		
		todayInfo.hide();
		img.hover(function () {
			var top = $(this).parent().position().top - 33;
			var left = $(this).parent().position().left + 55;
			todayInfo.show().css({
				'left': left,
				'top': top
			});
			infoImg.attr('src', $(this).attr('src'));
			infoTit.text($(this).attr('tit'));
			console.log($(this).attr('tit'));
			console.log(11);
			infoTxt.text($(this).attr('info'));
		}, function () {
			todayInfo.hide();
		});
			
	})();
	
	// 高亮选中
	(function () {
		$(".BBS ol li ").each(function () {
			$(this).on('mouseenter', function  () {
				$(".BBS ol li ").removeClass('active');
				$(this).addClass('active');
			})
		})
	})();
	
});