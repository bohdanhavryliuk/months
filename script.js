let iteration = true;

function months() {
    let str = prompt();
    if (!str) {
        iteration = false;
        return;
    }

    let arr = str.match(/\d{1,2}/g, " ");
    let result;
    if (arr.length == 1) {
        result = +arr[0] * 12;
    }
    if (arr.length == 2) {
        result = +arr[0] * 12 + +arr[1];
    }
    alert(result);

}

while (iteration) {
    months();
}