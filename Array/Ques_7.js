/* Given a binary array nums, return the maximum number of consecutive 1’s in the array.
 solution:  function ConsOnes(nums){
    let currCount=0;
    let maxCount=0;

    for(let i=0;i<nums.length;i++){
            if(nums[i] === 1){
                currCount++;
            }else{
                maxCount = Math.max(maxCount,currCount);
                currCount=0;
            }
            
    }
    return Math.max(maxCount,currCount);
}

let nums= [1,1,0,1,1,1];
console.log(ConsOnes(nums));
*/

            