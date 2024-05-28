function twoSum(nums, target) {
    for (i = 0; i < nums.length-1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}





// Beispielverwendung:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log("Beispiel 1:", twoSum(nums1, target1));

const nums2 = [3, 2, 4];
const target2 = 6;
console.log("Beispiel 2:", twoSum(nums2, target2));

const nums3 = [3, 3];
const target3 = 6;
console.log("Beispiel 3:", twoSum(nums3, target3));
