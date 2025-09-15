/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

solution: function missingNumber(nums){
    let n = nums.length;
    let totalSum = n* (n+1)/2;
    
    let sum_of_array = 0;

    for (let num of nums) {
        sum_of_array += num;
    }
    return totalSum - sum_of_array;

}
    let arr=[3,2,1,0,3];
    console.log(missingNumber(arr));

    
*/
