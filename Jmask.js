
/****************我的思路*****************************/
(function(global){
	var defaultOpts = {
		width : null,
		height : null,
		message : "嘎嘎嘎嘎嘎嘎",
		title:''
	};
	
	//获取浏览器屏幕宽高信息
	var clientWH = function(){
		var w = document.body.clientWidth;
		var h = document.body.clientHeight;
		// console.log('w: ',w," h: ",h);
		return{
			cw:w,
			ch:h
		}
	}
	
	var Jmask = function(selfOpts){
		var opts = selfOpts || defaultOpts;
		//可自定义属性
		this.width = opts.width;//控制maskDiv的宽高
		this.height = opts.height;
		this.message = opts.message;
		this.title = opts.title;

		//非自定义属性
		this.showBtn = false;
		
		var create = function(instance){
			console.log('in the create function');
			
			var cWH = clientWH();
			if(!instance.width)
				console.log('in the this.width');
				instance.width = Math.round(cWH.cw * 4 / 10);
			if(!instance.height)
				
				instance.height = 'auto';
			if(instance.title)
				instance.showTitle = true;
			
			var jmaskWrap = document.createElement('div');
			//IE8及以下无法使用opacity，需要用filter:
			var htmlStr = "<div  style='position:fixed;top:0;left:0;bottom:0;right:0;background-color:#000;z-index:998;opacity:0.45;filter:alpha(opacity=45)'"+"></div>";
		    htmlStr +=("<div  style='position:absolute;top:12%;left:50%;width:"+instance.width+"px;height:"+instance.height+"px;margin-left:"+(-instance.width/2)+"px;background-color:#fff;z-index:999'"+">");
			if(instance.showTitle){
				htmlStr += "<p style='display:block;margin:0;height:44px;color:#fff;padding-left:3px;text-align:left;line-height:44px;background-color:#28a745;font-size:18px;'>";
				htmlStr += instance.title;
				htmlStr += "</p>";
			}			  
			htmlStr += ("<p style='text-align:center;font-size:20px;'>"+instance.message+"</p>");
			if(instance.showBtn){
				htmlStr +=("<button id='Jmask_okBtn'>知道了</Button>");
				instance.okBtn = document.getElementById('Jmask_okBtn');
			}	
			htmlStr += "</div>";
			jmaskWrap.innerHTML = htmlStr;
			document.body.appendChild(jmaskWrap);
			return jmaskWrap;	 
		}
		
		if(!Jmask.layer){
			// console.log('in the Jmask.layer');
			Jmask.layer = create(this);
		}
	
	}
	/************属性layer用于控制单利模式***********************/
	Jmask.layer = null;
	
	function setVisible(ele,visible){
		return ele.style.visibility = visible;
	}
	
	
	Jmask.prototype.jshow = function(){
		setVisible(Jmask.layer,'visible');
		eventHandler(Jmask.layer,'click',function(event){
			// setVisible(this,'hidden');//IE8下，this指的是window
			setVisible(Jmask.layer,'hidden');
		});
	}
	
	Jmask.prototype.jclose = function(){
		setVisible(Jmask.layer,'hidden');
	}
	
	function eventHandler(ele,type,func){
		if(ele.addEventListener){
			return ele.addEventListener(type,func,false);
		}else if(ele.attachEvent){
			return ele.attachEvent('on'+type,func);
		}
	} 
	global.Jmask = Jmask;
})(this);