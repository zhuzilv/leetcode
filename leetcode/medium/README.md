# medium题目快速整理

- 162 寻找峰值
> 二分查找例题，非有序二分查找，辨别了[] [）

- 739 每日温度
> 单调栈例题，第一次接触单调栈行为，2454的简单版本，进入的元素如果大于栈顶，则栈顶弹出给结果数组赋值

- 1038 从二叉搜索树到更大的树
> 需要复习

- 1094 拼车
> 模拟能做，但答案是差分数组+前缀

- 1109 航班预订统计
> 这才是差分数组啊，下面罗列了性质，可以用来复习，模拟行为会超时，只能用差分数组

> 差分数组对应的概念是前缀和数组，对于数组 [1,2,2,4][1,2,2,4][1,2,2,4]，其差分数组为 [1,1,0,2][1,1,0,2][1,1,0,2]，差分数组的第 iii 个数即为原数组的第 i−1i-1i−1 个元素和第 iii 个元素的差值，也就是说我们对差分数组求前缀和即可得到原数组。

> 差分数组的性质是，当我们希望对原数组的某一个区间 [l,r][l,r][l,r] 施加一个增量inc\textit{inc}inc 时，差分数组 ddd 对应的改变是：d[l]d[l]d[l] 增加 inc\textit{inc}inc，d[r+1]d[r+1]d[r+1] 减少 inc\textit{inc}inc。这样对于区间的修改就变为了对于两个位置的修改。并且这种修改是可以叠加的，即当我们多次对原数组的不同区间施加不同的增量，我们只要按规则修改差分数组即可。

- 1276 汉堡制作方案
> 数学，通过xy表示出来

- 1423 可获得的最大点数
> 滑动窗口/逆向思维，res = sum - min

- 1657 确定两个字符串是否接近
> 计数+排序，做麻烦了，答案貌似有更优解法，先两个map统计两个字符串所有key的出现次数，然后sort比较是否相等。

- 1901 寻找峰值2
> 二维数组中寻找峰值，先列中二分，然后行中找最大，判断，然后继续二分。

- 1962 移除石子使总数最小
> 构建堆，然后每次移动维持大根堆，需要复习堆章节

- 2336 无限集中的最小数字
> 维持删除数字的集合，巧妙用set和min 相关标签是优先队列，答案很妙

- 2342 数位和相等数对的最大和
> 先搞个求数位和的函数，然后存个hash持续更新max，最后返回max，数位和函数一个while就可以实现

- 2381 字母移位2
> 差分数组+字母移位，差分数组要抽象一层，然后搞个字母移位函数，最后返回移位后的字符

- 2406 将区间分为最少组数
> 差分数组+ 前缀和变原来+遍历一次

- 2661 找出叠涂元素
> 先构建map 每个数字对应自己的二维下标，然后遍历涂色数组，一旦有行和列被涂了长度的次数，则返回下标

- LCR 184 设计自助结算系统
> 搞个单调队列，非严格递减，同239 题

- 198 打家劫舍
> dp题目，dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])

- 102 二叉树的层序遍历
> 二叉树层序遍历 但需要输出多数组， 递归求出每次清空队列后的数组push进去