 //初始化Swiper组件
	  var mySwiper = new Swiper('.swiper-container',{//选定容器
	    loop: true,//可以让图片循环播放
		autoplay: 2000,//每2秒循环播放一次
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',//实现上一页点击
    	prevButton: '.swiper-button-prev',
    	scrollbar: '.swiper-scrollbar',
    	
    	paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
	  });