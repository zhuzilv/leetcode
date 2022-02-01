class Solution {
    public String reversePrefix(String word, char ch) {
        //找到截取下标
        int index = word.indexOf(ch);
        //如果大于等于0执行
        if (index >= 0) {
            //转数组
            char[] arr = word.toCharArray();
            int left = 0, right = index;
            //双指针，0位到index位翻转
            while (left < right) {
                char temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                //指针移动
                left++;
                right--;
            }
            //数组转字符转
            word = new String(arr);
        }
        return word;
    }
}