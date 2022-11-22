const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

// show system uptime in seconds
console.log(`system uptime in seconds ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
