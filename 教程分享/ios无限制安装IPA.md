# IOS无限制安装IPA

因为iOS封闭系统的原因，导致无法任意安装软件，想装破解软件就非常的麻烦，可是，现在漏洞频出，牛人辈出，有人站出来了，天下苦ios久矣。



### ios14 - 15.4.1（2022年）

因为漏洞的原因iOS14-15.4.1系统，还有15.5bate版本，15.6bate版本，这些版本都可以无限制的安装IPA程序，使用轻松签+（[官网下载点我](https://esign.yyyue.xyz/)）就可以方便的实现！



### ios15 - 16.2.1（2023年）

目前这个阶段的版本系统可以通过比较抽象的办法来实现无限制的IPA安装，其中需要注意的是不支持iOS15.7.2及以后系统。

在这里就要介绍到两个最新的软件了！



#### 1.

**突破ID签名安装IPA3个限制**，apple id签名ipa可以免越狱安装ipa文件，有效期7天，通过**WDBRemoveThreeAppLimit**这个软件即可实现突破限制！

- 大佬的开源地址：

​		https://github.com/zhuowei/WDBRemoveThreeAppLimit

- 蓝奏云地址：

​		https://lanzoul.com/ijt9M0movybi

- 用法：当你利用ID签名安装，当提示超过3个以上时，直接打开WDBRemoveThreeAppLimit，点击GO即可，突破限制了（还不行重启手机再点击GO）

  

#### 2.

解决证书过期**Blacklist**，这个软件可以实现的效果非常简单，就是你的APP签名过期了，用这个软件可以一次全部激活所有APP，让他们继续工作，而不是变灰闪退！

- 蓝奏云地址：

​		https://lanzoul.com/iaOS90mkvwof

- 支持 **iOS15-16.1.2** 系统(不包括iOS15.7.2及以后系统)

- 用法：当ID签名7天失效后，自签安装 Blacklist ，点击 Fix Blacklist ，页面会显示Done即可，失效的APP即可正常打开。

  

#### 3.

这也就意味着，你使用这套方案
**① ID 签：**使用的是Apple ID签名方式签名的APP，默认只能签名**3个APP**，**7天后**会失效，需要重新签名！
**② 突破 3个限制：**利用WDBRemoveThreeAppLimit 可以突破ID签只能签名3个APP限制，每个Apple ID可签名10个APP，不够就用新ID继续签名。(所以首先就要签名这个啦)
**③ 破解 7天限制：**利用 Blacklist 可以破解过期证书，使证书过期的APP也可以正常打开使用。(也就是需要7天后证书失效后，你再用ID签名Blacklist)



## 自签IPA推荐使用SideLoadly

当然电脑上的爱思助手（[官网点我跳转](https://www.i4.cn/)，[教程点我跳转](http://pc.i4.cn/news_detail_38195.html)），或者手机上的牛蛙助手（[官网点我](https://ios222.com/)），都可以实现同样的功能，不过这个软件操作更复杂，所以给这个做个教程，牛蛙和爱思官网都有教程，这里就不说了！



#### 网友推荐教程

1. 下载轻松签ipa包，用牛蛙签名安装。

2. 等轻松签刷新出企业证书或者自己找个企业证书导入轻松签
3. 在牛蛙签名的轻松签里面用企业证书安装轻松签，这时候卸载牛蛙的轻松签，留企业证书的。
4. 以后就用企业证书的轻松签安装ipa
5. 牛蛙签名证书修复Blacklist
6. 安装的ipa打不开了就点一下证书修复以后只需要用牛蛙7天签一次证书修复，而且安装ipa没有限制



#### 教程开始

首先你需要下载并安装SideLoadly（[官网下载点我](https://sideloadly.io/)），Windows运行内存小于4G安装32位版，大于4G的则安装64位版。Mac则安装Mac版，实测Mac版稳定性更佳。

随后将你的手机连接到你的电脑上，Windows电脑需要你有iPhone的驱动，可以安装iTunes解决。Mac电脑自带iPhone的驱动。



iTunes下载地址如下：[https://support.apple.com/zh-cn/HT210384](https://support.apple.com/zh-cn/HT210384)

也可以通过爱思助手，工具箱内有iTunes修复工具！



![img](https://pic3.zhimg.com/80/v2-450f674c87e9872471d31aaa5d832736_720w.webp)



成功连接后电脑会显示出你的机器名称和系统版本（在括弧中）

我在这里试图签一个内置插件版的治国软件，将ipa拖入到软件中，或者点击那个写着ipa的图标在文件夹中选取。



![img](https://pic2.zhimg.com/80/v2-569b24ef444f704cad0c169f4c240ac9_720w.webp)



随后输入你的Apple ID在“Enter your Apple ID here”中，我个人建议出于安全考虑不要将主要用于iCloud的Apple ID使用在上面。 随后点击“Start”



![img](https://pic1.zhimg.com/80/v2-0a1d7a5022b4473c59316e12c7467d44_720w.webp)



输入Apple ID的密码。



![img](https://pic3.zhimg.com/80/v2-5cc48a84ee218486996eeca19f7c1efe_720w.webp)



输入两步认证的手机验证码。（若你的Apple ID没有两步验证就不需要了）



![img](https://pic4.zhimg.com/80/v2-45ed06b15a5fc60d3218f6052cdb3eeb_720w.webp)



随后稍等片刻，等待界面出现“Done”的字样，这就意味着已经安装完成。



![img](https://pic2.zhimg.com/80/v2-82e596d46c28c662b23e45b0d8404ad9_720w.webp)

之后你需要在手机的“设置-通用-描述文件和设备管理”中找到你自己的Apple ID 随后点击“信任”即可。



![img](https://pic3.zhimg.com/80/v2-936dcedec326781679e9408bdf50e2be_720w.webp)



若你的系统版本较高，你可能在信任后依然无法在桌面上看到你通过Sideloadly安装的App，此时你可以通过重启来解决。



## 总结

整个教程就到此结束了！

其实总结一下就是破解了id签名3个数量的限制，然后安装了很多软件，但是7天以后要失效，所以就用另一个破解失效的工具让APP再次可用，但是这个破解工具还要签名，哈哈哈，就是听起来比较麻烦，其实操作起来按照步骤不复杂，而且基本就是最开始麻烦这一下，后面就简单了。

比如我要用的话，就用电脑sideloadly签名安装工具安装一大堆我要的APP，然后手机上装上牛蛙助手，以后失效了，只需要签名破解失效的软件就行了，还是比较方便的。