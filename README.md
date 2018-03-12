# 图书跟踪应用

## 项目概述

在该项目中，我创建了一个书架应用，能够选择和归类我阅读过的图书、正在阅读的图书以及想要阅读的图书。 

## 安装，启动步骤

* 安装该项目有两种方法：

1. 可以 fork 并且 clone [起始代码模板 ](https://github.com/udacity/reactnd-project-myreads-starter)

2. 使用 create-react-app 创建一个新的应用。即使从头自己创建应用，依然需要使用[起始代码模板](https://github.com/udacity/reactnd-project-myreads-starter)中包含的 booksAPI.js 文件与后端 API 互动。

* 启动该项目步骤如下：

1. npm install create-react-app

2. create-react-app my_reads

3. 从命令行进入到项目所在文件夹

4. 输入命令npm start， 即可启动该项目

## 应用功能

在此应用中，主页面显示了一个“书架”列表（即类别），每个书架都包含一个图书数量。三个书架分别为：

* 当前阅读

* 想要阅读

* 已经阅读

1. 每本图书都有一个控件，能够为该图书选择书架。当选择其他书架时，图书就移到该书架上。注意，控件的默认值应该始终为图书当前所在书架。如下图所示：

![pic1](https://raw.githubusercontent.com/ShiHaiou/Udacity-MyReads/master/my_reads/images/pic1.PNG)

2. 主页面还有一个“搜索”链接，该链接是一个搜索页面，能够查找图书并将其添加到书库中。

搜索页面具有一个文本输入框，可以用来查找图书。当文本输入的值更改后，与该查询匹配的图书将显示在页面上，以及将该图书添加到书库中的控件。如下图所示：

![pic2](https://raw.githubusercontent.com/ShiHaiou/Udacity-MyReads/master/my_reads/images/pic2.PNG)

3. 注意：当图书位于书架上时，它在主应用页面和搜索页面上的状态应该相同。当我们从搜索页面返回主页面时，就立即可以看到在书库的搜索页面所做的所有选择。

## 参考文献

* [React教程](http://www.runoob.com/react/react-tutorial.html)




