//1.冒泡排序
function bubbleSort(myArray) {
    var len = myArray.length;
    var i;
    var j;
    var stop;

    for (i = 0; i < len - 1; i++) {
        for (j = 0, stop = len - 1 - i; j < stop; j++) {
            if (myArray[j] > myArray[j + 1]) {
                swap(myArray, j, j + 1);
            }
        }
    }
    return myArray;
}

function swap(myArray, p1, p2) {
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}

//2.选择排序
function selectionSort(myArray) {

    var len = myArray.length,
        min;

    for (i = 0; i < len; i++) {

        // 将当前位置设为最小值
        min = i;

        // 检查数组其余部分是否更小
        for (j = i + 1; j < len; j++) {
            if (myArray[j] < myArray[min]) {
                min = j;
            }
        }

        // 如果当前位置不是最小值，将其换为最小值
        if (i != min) {
            swap(myArray, i, min);
        }
    }

    return myArray;
}

function swap(myArray, p1, p2) {
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}

//3.插入排序
function insertionSort(myArray) {

    var len = myArray.length, // 数组的长度
        value, // 当前比较的值
        i, // 未排序部分的当前位置
        j; // 已排序部分的当前位置

    for (i = 0; i < len; i++) {

        // 储存当前位置的值
        value = myArray[i];

        /*
         * 当已排序部分的当前元素大于value，
         * 就将当前元素向后移一位，再将前一位与value比较
         */
        for (j = i - 1; j > -1 && myArray[j] > value; j--) {
            myArray[j + 1] = myArray[j];
        }

        myArray[j + 1] = value;
    }

    return myArray;
}

//4.快速排序
var quickSort = function(myArray) {
    // 当被分的数组只剩一个时，退出递归
    if (myArray.length <= 1) {
        return myArray;
    }

    //中间基准值的index
    var pivotindex = Math.floor(myArray.length / 2);
    //基准值
    var pivot = myArray.splice(pivotindex, 1)[0];
    var left = [];
    var right = [];
    //小的放左边，大的放右边
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] < pivot) {
            left.push(myArray[i]);
        } else {
            right.push(myArray[i]);
        }
    }
    // 递归
    // 把数组合并在一起
    return quickSort(left).concat([pivot], quickSort(right));
}