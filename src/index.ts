import dotenv from 'dotenv-safe';
import sum from '@src/ma/sum/add';

dotenv.config();

const value = sum(4, 9);

console.log(value);

console.log(process.env.MY_NAME);
console.log(process.env.INTERNAL_URL);
