const pagingArr = (len, arr) => {
    if (len >= arr.length) {
        return [arr];
    }
    return [arr.slice(0, len), ...pagingArr(len, arr.slice(len))];
};

// let res = pagingArr(3,[1,2,3,4,5,6,6,6,6,6,6,6,6])
let res1 = pagingArr(3, [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6]);
console.log(res1);
