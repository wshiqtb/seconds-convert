# seconds-convert

Convert milliseconds or seconds to days, hours, minutes, seconds and milliseconds.  filesize is very small and no dependencies!

将一段秒数或者毫秒数，转换为天、时、分、秒、毫秒，支持配置需要转换到的单位，文件非常小，压缩后不到1k。而且没有其它依赖。

## Installation
```js
npm install seconds-convert
// or
yarn add seconds-convert
```

## Usage
```js
const secondsConvert = require('seconds-convert');

//只传一个整数，会作为秒数进行转换，转换的最高单位是天
console.log(secondsConvert(638273243));
//=> { milliseconds: 0, seconds: 23, minutes: 7, hours: 10, days: 7387 }
const res = secondsConvert(638273243);
console.log(`${res.days}天${res.hours}时${res.minutes}分${res.seconds}秒${res.milliseconds}毫秒`);
//=> 7387天10时7分23秒0毫秒

//第二个参数是字符串，表示整数是秒还是毫秒，秒:'sec':，毫秒:'ms':
console.log(secondsConvert(638273243, 'sec'));
//=> { milliseconds: 0, seconds: 23, minutes: 7, hours: 10, days: 7387 }
console.log(secondsConvert(638273243, 'ms'));
//=> { milliseconds: 243, seconds: 53, minutes: 17, hours: 9, days: 7 }

//第二个参数是Object, 其中unit可选值为'sec'、'ms'。tag的可选值为'days'、'hours'、'minutes'、'seconds'、'milliseconds'
console.log(secondsConvert(638273243, {unit:'sec', tag:'days'}));
//=> { milliseconds: 0, seconds: 23, minutes: 7, hours: 10, days: 7387 }
console.log(secondsConvert(638273243, {unit:'sec', tag:'hours'}));
//=> { milliseconds: 0, seconds: 23, minutes: 7, hours: 177298 }
console.log(secondsConvert(638273243, {unit:'ms', tag:'hours'}));
//=> { milliseconds: 243, seconds: 53, minutes: 17, hours: 177 }
```

## API

### secondsConvert(number, options)

#### number `Required`
Type: `Number`

#### options
Type: `Object`

Default: `{unit:'sec', tag:'days'}`

**unit** is the amount of milliseconds or seconds and can be one of(表示number是秒还是毫秒,可选值有:).
  + "ms" || "milliseconds"
  + "sec" || "seconds"
  + undefined (will default to milliseconds)

**tag** 结果转换的程度,可选值有:
  + "days": 转换截止到天
  + "hours": 转换截止到时
  + "minutes": 转换截止到分
  + "seconds": 转换截止到秒
  + "milliseconds": 转换截止到毫秒

**Returned object**:

```js
  { days: num, hours: num, minutes: num, seconds: num, milliseconds: num}
```
