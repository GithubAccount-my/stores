node是一个让JavaScript运行在服务器端的开发平台
node的优点:
			1:单线程
			2:RESTFUL API
			3:node可以在不新增额外线程的请况下,依然对任务进行并发处理
			4:非阻塞IO
			5:V8虚拟机
			6:事件驱动
模块分为三种:内置模块 自定义模块 第三方模块
var fs = require("fs")  内置模块
以 '/' 为前缀的模块是文件的绝对路径。 例如，require('/home/marco/foo.js') 会加载 /home/marco/foo.js 文件。
fs.writeFile("路径","要添加的文字",回调函数)  添加文字

	fs.exists("路径",回调函数)  查找文件
	fs.exists(path,callback)检查指定路径的文件或者目录是否存在
	
fs.mkdir("./文件夹名",回调函数)  创建文件夹
fs.rmdir("./文件夹名",回调函数)  移除文件夹
fs.unlink("./book/文件名",回调函数)  移除文件
fs.readFile("路径","utf8",回调函数)  异步读取文件
fs.readFileSync("路径","utf8",回调函数)  同步读取文件
fs.rename("要修改的文件名","修改的文件名")  修改文件名
var path = require("path")  内置模块
path.join  链接路径
path.resolve  解析路径
path.dirname  返回路径中代表文件夹的部分
path.basename  返回路径中最后一部分
path.extname  返回路径中文件的后缀名
path.parse  将路径返回为对象
path.format  将对象返回为路径
__dirname  显示当前脚本所在的目录
		在 /Users/mjr 目录下运行 node example.js：
		console.log(__dirname);
		// 输出: /Users/mjr
		console.log(path.dirname(__filename));
		// 输出: /Users/mjr
__filename  显示当前脚本的文件名
HTTP请求:
		请求行
		请求头
		空行
		实体
HTTP响应:
		状态行
		响应头
		空行
		响应体
HTTP状态码:由三位数字组成,第一个数字定义了响应的类别共有五种.
		1xx:指示信息--表示请求已接收,继续处理
		2xx:成功--表示请求已被成功接收
		3xx:重定向--表示要完成请求必须进行更进一步的操作
		4xx:客户端错误--请求有语法错误或请求无法实现
		5xx:服务器端错误--服务器未能实现合法的请求
		例: 200:客户端请求成功
			400:客户端请求有语法错误,不能被服务器端理解
			401:请求未经授权
			403:服务器收到请求,但拒绝服务
			404:请求资源不存在
			500:服务器发生不可预知的错误
			503:服务器当前不能处理客户端的请求
HTTP请求方法:
		get 请求指定的页面信息,并返回实体主体
		post 向指定资源提交数据进行处理请求
http: 网络协议 https 加密协议//www 二级域名.jd.com 域名:80 端口号/aa 路径/123.html 具体文件?id=222 参数
HTTP功能:搭建一个web服务器,发起一个http请求作为客户端去请求别的服务器
HTTP:
	var sit = http.createServer(function(req,res)  创建一个服务器
	req: 用户的请求信息
	res: 服务器响应的方法
	res.write() 返回响应的内容
	res.end() 结束响应
	
	/* 搭建一个http的服务器，用于处理用户发送的http请求 */
	
	例:var http = require("http");
       var fs = require("fs");
       var mime = require("mime");
       var sit = http.createServer(function(req,res){
			if(req.url != "/favicon.ico"){
				console.log(req,res);
       		fs.readFile("./html"+req.url,"utf8",function(err,data){
       			if(!err){
       				res.writeHead(200,{'Content-Type':mime.getType(req.url)});
       				res.write(data);
       				res.end(); 
       			}else{
       				res.writeHead(404,{'Content-Type':mime.getType(req.url)});
       				res.write("not found");
       				res.end();
       			}
       		})
       		
			}
       	
		})
		sit.listen(999,function(){
			console.log("服务器启动成功 端口号是999")
		})
		
express框架:
		基于node.js平台,快速,开放,极简法人web开发框架
常用模块:
		npm install express --save  安装express框架
		npm install ejs --save  安装ejs模板引擎
		npm install cnpm-registry=https://registry.npm.taobao.org -g  安装cnpm
		express-generator -g  自动搭建express模板
		express --view ejs 文件名  自动生成一个简易服务器
		npm install multer --save 上传文件/接收文件
		npm install cors --save  跨域用的
		npm install pagination-api --save  生成分页
		npm install ueditor --save 上传图片百度提供的编辑器
		
		npm install vue-cli --g  //安装脚手架工具
		vue init webpack 项目名   创建vue项目
		npm install element-ui --save  饿了么前端组件库；
		npm install vuex --save  vue状态管理
		npm install axios --save 基于promise用于浏览器和nodejs的HTTP客户端；
		npm install mysql 链接MySQL数据库；
		npm install node-sass --save-dev  sass-loader依赖；
		npm install sass-loader --save-dev 解析sass/scss文件
		
		AJAX:是一种无需加载整个网页的情况下,能够更新部分页面的技术
作用:前后台交互
运行在浏览器端
	跨域例:	$.ajax({
			url:"http://127.0.0.1:9999/xf",
			type:"get",
			data:{id:123},
			success:function(ms){
				console.log(ms);
				if(ms!=undefined){
					alert("数据载入成功");
				}else{
					alert("数据载入失败");
				}
			}
		})
	上传图像例:	var ff=new FormData(f);
				$.ajax({
					url:"/wenjian",
					type:"post",
					data:ff,
					processData:false,  //以post传值让他形成json数据
					contentType:false,  //不让其与jq起冲突  contentType: false设置的目的是让ajax不要操作content-type
					success:function(ms){
						console.log(ms);
						if(ms!=undefined){
							alert("文件上传成功");
						}else{
							alert("文件上传失败");
						}
					}
					
				})
Mysql:
	初始化密码:root
语句:
	show databases; 查看现有数据库
	create database 库名; 创建数据库
	use 库名; 查看单独一个库
	show tables; 查看所有表
	desc 表名; 查看表结构
	insert into 表名(字段)values(内容); 增加
	delete from 表名 where id=删除的id; 删除
	update 表名 set 字段="修改的值" where id=修改的id; 修改
	select * from 表名 where id=查找的id; 查询
	
	
Vue:是一套用于构建用户界面的渐进式MVVM框架

	常用语法:{{}}:渲染纯文本,简单的运算+,-,*,/,三元表达式
			v-html:渲染带有标签的文本
			v-bind:变量属性如 src href  简写为“:” 
			v-for:循环数组
			v-on:事件绑定->写在methods下  简写为 “@事件名称”
			v-model:input中的value值
			v-show:通过判断，是否显示该内容。如果值为true，则显示。否则就隐藏。
			v-if:判断是否加载固定的内容。如果为真，则加载；为假时，则不加载。
			v-else:如同判断语句一般 必须紧跟在v-if后面，否则他不能被识别。表示：当v-if的条件不成立的时候执行。
			v-else-if:~~~~
			computed:计算属性,与data同级
	修饰符:
			.stop:阻止事件冒泡
			.prevent:阻止标签默认事件
			.capture:事件捕获
			.once:只触发一次
	按键修饰符:
			.enter:按下回车键后触发
			.delete:按下删除键后触发
			.space:按下空格键后触发
			.tab:按下Tab键后触发
			.esc:按下Esc后触发
			上下左右:按下上下左右键后触发
	命名子路由:children:[
						{
						path: "vue文件",
						component:vue文件
						}
					]
	命名子路由时要在父路由下配置<router-view></router-view>出口
				子路由例:	{
						path:'/list',
						component:list,
						meta: { requiresAuth: true },//访问该界面需要先经过验证
						redirect:"/list/ge",
						children:[
							{
								path:'ge',
								component:ge,
							}
							]
						}
				父路由抒写例: <div id="st">
								<ul>
									<li><router-link to="/list/ge">用户主页</router-link></li>
									<li><router-link to="/list/fu">复选页</router-link></li>
									<li><router-link to="/list/bian">编辑页</router-link></li>
								</ul>
							</div>
							<div id="liu">
								路由出口：<router-view></router-view>
							</div>
				默认显示的路由:redirect
						例:	redirect:"/list/ge",
				双向数据绑定原理围绕:difineproperties
				Axios:是基于promise的HTTP库,可以用在浏览器和node.js中
				导航守卫:有全局的 单个路由独享的 组件级的
				父组件传给子组件：子组件通过props方法接受数据;
				子组件传给父组件：$emit方法传递参数
				兄弟组件传值:创建一个vue实例 $emit $on
				vue生命周期:它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑
				vue生命周期的钩子函数:
									beforeCreate (创建前) 这个阶段的时候data和method都是拿不到的（通常在实例以外调用）
									created (创建后) 这个可以调用实例的数据和实例的方法（带异步数据请求的方法可以放在这里）
									beforeMount  (载入前) 在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上
									mounted (载入后) 用于初始数据的dom渲染（需要操作dom的方法放这里）
									beforeUpdate (更新前) 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程
									updated (更新后)用于对数据更新做统一处理 （如果想分别区分不同的数据更新，同时进行dom操作就使用
									beforeDestroy(销毁前)销毁一些定时器之类的数据
									destroyed (销毁后) 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。
				第一次加载页面会触发: 下面这几个beforeCreate, created, beforeMount, mounted钩子函数
				DOM 渲染在 mounted 中完成
				MVVM 是 Model-View-ViewModel 的缩写
				Model代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑
				View 代表UI 组件，它负责将数据模型转化成UI 展现出来
				ViewModel 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View
				
				Vue与Angular以及React的区别:
						与AngularJS的区别:	相同点:	都支持指令：内置指令和自定义指令；都支持过滤器：内置过滤器和自定义过滤器；都支持双向数据绑定；都不支持低端浏览器
						  
											不同点：AngularJS的学习成本高，比如增加了Dependency Injection特性，而Vue.js本身提供的API都比较简单、直观；在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢；Vue.js使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的
											
						与React的区别:	相同点：React采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用；中心思想相同：一切都是组件，组件实例之间可以嵌套；都提供合理的钩子函数，可以让开发者定制化地去处理需求；都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载；在组件开发中都支持mixins的特性
							 
											不同点：React采用的Virtual DOM会对渲染出来的结果做脏检查；Vue.js在模板中提供了指令，过滤器等，可以非常方便，快捷地操作Virtual DOM
											
				vue路由的钩子函数:	首页可以控制导航跳转，beforeEach，afterEach等，一般用于页面title的修改。一些需要登录才能调整页面的重定向功能。

				beforeEach主要有3个参数to，from，next：
				
				to：route即将进入的目标路由对象，
				
				from：route当前导航正要离开的路由
				
				next：function一定要调用该方法resolve这个钩子。执行效果依赖next方法的调用参数。可以控制网页的跳转
				Vuex:	在main.js引入store，注入。新建了一个目录store，….. export 。
						应用场景有：单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车
						state:
						Vuex 使用单一状态树,即每个应用将仅仅包含一个store 实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。
						mutations:
						mutations定义的方法动态修改Vuex 的 store 中的状态或数据。
						getters:
						类似vue的计算属性，主要用来过滤一些数据。
						action :
						actions可以理解为通过将mutations里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据。view 层通过 store.dispath 来分发 action。
						modules:
						项目特别复杂的时候，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。
				
				css只在当前组件起作用: 在style标签中写入scoped即可 例如：<style scoped></style>
				
				v-if 和 v-show 区别: v-if按照条件是否渲染，v-show是display的block或none
				
				$route和$router的区别: $route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。而$router是“路由实例”对象包括了路由的跳转方法，钩子函数等。
				
				vue.js的两个核心是什么: 数据驱动、组件系统
				
				vue常用的修饰符:.prevent: 提交事件不再重载页面；
							   .stop: 阻止单击事件冒泡；
							   .self: 当事件发生在该元素本身而不是子元素的时候会触发；
							   .capture: 事件侦听，事件发生的时候会调用
							   
				v-on 可以绑定多个方法
				
				vue等单页面应用及其优缺点:
									优点：Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。
									
									缺点：不支持低版本的浏览器，最低只支持到IE9；不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；第一次加载首页耗时相对长一些；不可以使用浏览器的导航按钮需要自行实现前进、后退。