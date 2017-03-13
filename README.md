# Jmask-1
a DIY mask
利用JS封装的一个简单的浮出层
使用时可以指定一些参数，可参考index.js

知识整理或者注意点：
a.类（Jmask）的本身属性，不同于this.XX和prototype.XX上的，可以被实例继承或者共享
b.IE8及以下不支持addEventListener,IE9及以上才支持，IE8及以下需要用attachEvent（'on'+type,..）
c.IE8下不管什么时候this指的是window对象，其他版本可正常对待
d.IE8受我一拜。。。
