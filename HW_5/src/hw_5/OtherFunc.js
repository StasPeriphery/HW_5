function factorial(numb) {
    if (numb === null || numb === undefined || numb < 0){
        return numb;
    }
    if (numb != 1)
        return numb * factorial(--numb);
    return 1;
}

function getCounter(){
    let count = 0;
    return function () {
        return ++count;
    }
}

function quickSort(vec, left, right) {
    if (vec === null || vec === undefined || vec === undefined ){
        return vec;
    }
    let index;
    if (vec.length > 1)
    {
        index = partition(vec, left, right);
        if (left < index - 1)
            quickSort(vec, left, index - 1);

        if (index < right)
            quickSort(vec, index, right);
    }
    return vec;
}

function swap(vec, firstIndex, secondIndex){
    const temp = vec[firstIndex];
    vec[firstIndex] = vec[secondIndex];
    vec[secondIndex] = temp;
}

function partition(vec, left, right) {
    let pivot   = vec[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (vec[i] < pivot)
            i++;

        while (vec[j] > pivot)
            j--;

        if (i <= j)
        {
            swap(vec, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function fibonachi(value){
    if (value === null || value === undefined || value <= 0){
        return value;
    }
    return value <= 1 ? value : fibonachi(value - 1) + fibonachi(value - 2);
}