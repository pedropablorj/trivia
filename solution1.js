// 1. Words only 
// O(n)
const wordsOnly = s => {
    const arr = s.split(' ');
    const reverse = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }

    return reverse.join(' ');
};


//2. Logical case
// O(n)
const logicalCase = s => {
    const arr = s.split(' ');
    let reverse = [];
    const map = [];

    //Creating map
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].charAt(0) === arr[i].charAt(0).toUpperCase()) {
            map[i] = true;
        } else {
            map[i] = false;
        }
    }

    //Reverse
    for(let i = arr.length - 1; i >= 0; i--) {
        const w = ((map[i]) ? arr[i].charAt(0).toUpperCase() : arr[i].charAt(0).toLowerCase()) + arr[i].slice(1);
        reverse.push(arr[i]);
    };


    return reverse.join(' ');
};

//3. Logical dot
// O(n)
const logicalDot = s => {
    const arr = s.split('.');
    const reverse = [];
    let reverseDot;

    //Reverse by dots
    for(let i = arr.length - 1; i >= 0; i--) {
        reverse.push(logicalCase(arr[i]));
    }

    reverseDot = reverse.join('.');

    if(reverseDot.length !== s.length){
        reverseDot = `.${reverse}`;
    }

    return reverseDot;
};

//4. 
// O(n)
const encode = s => {
    const code = [];
    let count = 1;

    for(let i = 0; i < s.length; i++) {
        if(s[i+1] && s[i] === s[i+1]) {
           count++; 
        } else {
            code.push(`${count}${s[i]}`)
            count = 1;
        }
    }

    return code.join('');
};

