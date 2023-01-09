const bcrypt = require('bcrypt')
async function hashPassword(plaintextPassword) {
  const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash
}
   
async function comparePassword(plaintextPassword, hash) {
  const result = await bcrypt.compare(plaintextPassword, hash);
  return result;
}

async function a(){
  const e = await hashPassword("admim")
  console.log(e)
  console.log(await comparePassword("admim", e))
}

a()