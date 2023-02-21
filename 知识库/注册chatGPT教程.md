最近ChatGPT很火，但有人注册会经常出现不服务当区域问题，现在把手教你解决。

## 小程序

如果你没有代理或者厌烦症，我在这里开发了一个微信小程序可以快速体验ChatGPT。

![https://bj.bcebos.com/baidu-rmb-video-cover-1/933bea53963421b0b220adef8275b239.jpeg](https://bj.bcebos.com/baidu-rmb-video-cover-1/933bea53963421b0b220adef8275b239.jpeg)

聊天爱盒子

## 准备

1. 代理，要求是，韩国，日本，印度，新加坡，美国这几个地址。其他的不太清楚，反正香港肯定不行。

2. 准备一个国外手机号，如果没有使用接入码平台也行，有一些接入码平台是无法接入的，所以我找了一个，[sms-activate.org](https://sms-activate.org/?ref=2684538)

3. 准备一个浏览器

![blob:chrome-extension://dbjbempljhcmhlfpfacalomonjpalpko/1803e82b-1e82-431b-8896-a2fc51500894](blob:chrome-extension://dbjbempljhcmhlfpfacalomonjpalpko/1803e82b-1e82-431b-8896-a2fc51500894)

## 开始

### 第一步 准备接码

打开密码平台[sms-activate.org](https://sms-activate.org/?ref=2684538)，注册一个账号

![https://bj.bcebos.com/baidu-rmb-video-cover-1/48b243bd616c2fdf64328192b5e819de.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/48b243bd616c2fdf64328192b5e819de.png)

注册

![https://bj.bcebos.com/baidu-rmb-video-cover-1/619b6e9529d671d4406affbfb8f7aafc.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/619b6e9529d671d4406affbfb8f7aafc.png)

充值，这里单位是卢布

接码OpenAi的一次费用是大概11卢布，人民币来看差不少是1块钱，不过只能充美金，就先充个1美金吧。

![https://bj.bcebos.com/baidu-rmb-video-cover-1/9e5acefd6995b686d869e786dbd35cf5.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/9e5acefd6995b686d869e786dbd35cf5.png)

充值完成需要等一会，就先放着，直接进行下一步。

### 第二部 注册OpenAI账号

首先是打开[ChatGPT的账号注册页面](https://beta.openai.com/signup)。谷歌注册或者邮箱注册都可以，无所谓，这里用邮箱注册做例子。

![https://bj.bcebos.com/baidu-rmb-video-cover-1/88bd51488003665298b6981d643e17c5.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/88bd51488003665298b6981d643e17c5.png)

使用邮箱注册后有一个验证邮件，进入邮箱，点开链接。

![https://bj.bcebos.com/baidu-rmb-video-cover-1/79d57d98e6fc51858e5733e1e7f580d7.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/79d57d98e6fc51858e5733e1e7f580d7.png)

现在开始一步步走就进行了。

当然，有些人会在这里遇到一个问题，会出现提示说不能在当前国家服务

![https://bj.bcebos.com/baidu-rmb-video-cover-1/91865bcdf60a7276bc1980d759bc9567.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/91865bcdf60a7276bc1980d759bc9567.png)

不用怕，我写这篇文章就是为了解决这个问题

来，给你一招。一般你出现这种问题，就是因为你的代理没有全部，或者你的位置不对。香港的代理是100%无法通过的。

但又有一些非常神奇的问题，只要你发现了这个提示，那么你接下来怎么切换代理，都是没有用的。现在教你一招解决。

#### 解决地区问题

首先，你要把你的代理切换到不是香港的地区，我这里选择韩国。

然后，先复制下面这段代码

```Plain Text
window.localStorage.removeItem(Object.keys(window.localStorage).find(i=>i.startsWith('@@auth0spajs')))
```

接着在地址栏里输入

```Plain Text
javascript:
```

注意，这里一定要输入，因为你复制的话是黏贴不了的。

然后再粘贴我们第一段复制的内容

![https://bj.bcebos.com/baidu-rmb-video-cover-1/c473427b435d47222a825160ed7cf043.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/c473427b435d47222a825160ed7cf043.png)

最后的结果是这样的

然后按下回车键，继续刷新页面，如果你的代理没有问题，就可以正常看到注册页面了。

### 填写手机号

![https://bj.bcebos.com/baidu-rmb-video-cover-1/d7ace9bb30c1148e9647b2407ab9f411.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/d7ace9bb30c1148e9647b2407ab9f411.png)

这里我们选择印度，然后到我们的链接网站上去。在左侧搜索OpenAi，然后点击印度。

![https://bj.bcebos.com/baidu-rmb-video-cover-1/65d8884642246f3daafee0c0a8bf2922.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/65d8884642246f3daafee0c0a8bf2922.png)

点击小黄车。

![https://bj.bcebos.com/baidu-rmb-video-cover-1/39d1f9bd4e764d7df036bee06fda9479.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/39d1f9bd4e764d7df036bee06fda9479.png)

然后我们再制作这个密码，粘贴过去。然后我们点击发送验证码就完成了。

等一会网站会提示验证码，我们复贴。

![https://bj.bcebos.com/baidu-rmb-video-cover-1/8cbdad05431e74b6f2fc626a0a168f44.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/8cbdad05431e74b6f2fc626a0a168f44.png)

这样就成功了，随随便便点一个进去完成事。

### 使用ChatGPT

注册完成后，我们去[ChatGPT网站](https://chat.openai.com/auth/login)去登陆。

![https://bj.bcebos.com/baidu-rmb-video-cover-1/0f2ef648ac6f5bacffcbfd2f06be2cad.png](https://bj.bcebos.com/baidu-rmb-video-cover-1/0f2ef648ac6f5bacffcbfd2f06be2cad.png)

