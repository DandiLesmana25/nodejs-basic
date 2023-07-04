const initialMemoryUsage = process.memoryUsage().heapUsed;    //todo 1

const yourName = process.argv[2];  //todo 2
const environtment = process.env.NODE_ENV; //tod 3


for( let i=0; i<=10000; i++) {

}


const currentMemoryUsage = process.memoryUsage().heapUsed;


console.log(`hai, ${yourName}`);
console.log(`Mode environment : ${environtment}`);
console.log(`Penggunaan memori dari : ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
