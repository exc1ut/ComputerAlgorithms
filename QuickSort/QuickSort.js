var setColors = function (nums) {
  console.log(nums);

  quickSort(nums, 0, nums.length - 1);
  console.log(nums);
  return nums;
};

const swap = (arr, a, b) => {
  var temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;

  for (j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};
// function partition(items, left, right) {
//   var pivot = items[Math.floor((left + right) / 2)], //middle element
//     i = left, //left pointer
//     j = right; //right pointer
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j); //swap two elements
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// const quickSort = (nums, low, high) => {
//   if (low < high) {
//     let partitionIndex = partition(nums, low, high);
//     quickSort(nums, low, partitionIndex);
//     quickSort(nums, partitionIndex + 1, high);
//   }
// };

function quickSort(arr, low, high) {
  if (low < high) {
    pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return;
}

module.exports = setColors;
