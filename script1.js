setTimeout(
  () => {
    console.log('ahoj')
    // načti data
  },
  1000
)

console.log('čau')
// vypsat data
// Promise

let global = null

const prom = new Promise((resolve, reject) => {
  // resolve('ahoj')
  // reject('error')
  setTimeout(() => {
    if (5 > 3) {
      global = 5
      resolve('my data')
    } else {
      reject('error !!!')
    }
  }, 1000)
})

// promises are thenable

console.log(global) // null
prom
  .then((resolvedData) => {
    console.log(global)
    console.log(resolvedData)
  })
  .catch((rejectedData) => {
    console.log(rejectedData)
  })

