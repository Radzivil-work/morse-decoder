const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }

    let morse = [];
    for(let i = 0; i < arr.length; i++) {
        let x = '';
        for(let j = 0; j < arr[i].length; j += 2) {
            if(arr[i][j] + arr[i][j + 1] == 10) {
                x += '.';
            }
            if(arr[i][j] + arr[i][j + 1] == 11) {
                x += "-";
            }
            if(arr[i][j] + arr[i][j + 1] == '**') {
                x = '**';
            }
        }
        morse.push(x);
    }
    let result = '';
    for (let i = 0; i < morse.length; i++){
        if(morse[i] == '**') {
            result += ' ';
        } else {
            result += MORSE_TABLE[morse[i]]
        }
    }
    return result;
}

module.exports = {
    decode
}