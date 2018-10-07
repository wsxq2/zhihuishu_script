# zhihuishu_script

### 简介
本脚本用于在[智慧树网站](http://study.zhihuishu.com/)刷视频

功能：
* 自动播放下一集
* 自动处理偶尔弹出的测试对话框
* 播放视频时：1.5倍，流畅，无声（播放视频开始的一瞬间依然有声音，故建议直接将整个标签页静音）

### 测试相关
目前该脚本只在《创业基础》（**已学过**）一课中得到测试，由于已经看过，所以脚本不能完全适用于未看过的视频（但应该只需稍做修改即可）。
我当然想充分测试，但现在没有这个机会，等下次再遇到类似的网课作业的时候再说吧。

具体测试环境：
* 操作系统：Windows 10 家庭版
* 浏览器：Google Chrome 69.0.3497.100
* 测试网址：<http://study.zhihuishu.com/learning/videoList?recruitAndCourseId=425958514e5b435a424d5a51&studyStatus=1>
* 最后测试日期：2018-10-07


### 原理
使用`JavaScipt`获取网页中的各种信息，并根据获得的信息做相应的动作（如发现有弹出题目就自动答题，发现视频结束就点击“下一个”等等）

### 文件说明
* `a.js`：用于各种测试的文件
* `cyjc.js`：主文件

### 使用方法
首先使用谷歌浏览器进入看视频的网页，然后打开**开发者工具**，再打开**控制台**（`Console`），复制`cyjc.js`文件中的内容到**控制台**（`Console`）中，输入`main()`以运行主函数，等待7秒后脚本开始运行

