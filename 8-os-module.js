const os = require('os')
//if uer infor
console.log(os.userInfo())
//uptime
console.log(`The system uptime ${os.uptime()}`)
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
