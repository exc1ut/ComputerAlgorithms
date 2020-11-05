const swap = (arr, a, b) => {
  var temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const partition = (arr, low, high) => {
  let pivot = arr[high];
  i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
};

const arraySort = (nums) => {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

module.exports = arraySort;
