import {formatcurrency} from '../Scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');
if(formatcurrency(2095) === '20.95'){
    console.log('passed');
} else{
    console.log('failed');
}
console.log('works with 0');
if(formatcurrency(0) === '0.00'){
    console.log('passed');
}
else {
    console.log('failed')
}
console.log('rounds up to the neares cent');
if(formatcurrency(2000.5) === '20.01'){
    console.log('passed')
}else{
    console.log('failed');
}
console.log('rounds down to the neares cent');
if(formatcurrency(2000.4) === '20.00'){
    console.log('passed');   
}else{
    console.log('failed');
}