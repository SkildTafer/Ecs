let fs = require('fs')
let A = [2, 31, 1, 4, 632, 16, -6, 0, 24, 931]
let B = [
  768, 31, 2316, 6123, 876, 60, 6, 31, 352, 254385, 2441, 5, 86, 8754, 214,
]
let maxa = A[0]
let ia = 0
let maxb = B[0]
let ib = 0
for (let i = 1; i < 10; i++) {
  if (A[i] > maxa) {
    maxa = A[i]
    ia = i
  }
}
for (let i = 1; i < 15; i++) {
  if (B[i] > maxb) {
    maxb = B[i]
    ib = i
  }
}
let otvet
if (ia < ib) {
  otvet =
    'Максимальное число из первого массива (' +
    maxa +
    ') находится ближе к началу, чем из второго (' +
    maxb +
    ') ' +
    ia +
    ' - ' +
    ib
} else if (ia > ib) {
  otvet =
    'Максимальное число из второго массива (' +
    maxb +
    ') находится ближе к началу, чем из первого (' +
    maxa +
    ') ' +
    ib +
    ' - ' +
    ia
} else {
  otvet =
    'Максимальное число из первого массива (' +
    maxa +
    ') и максимальноке число из второго массива (' +
    maxb +
    ') находятся на равных индексах' +
    ib
}
console.log(otvet)

fs.readFile('otvet.txt', 'utf8', function (err, data) {
  if (!err) {
    fs.writeFile('otvet.txt', data + otvet, function (err) {
      if (err) {
        console.log('ошибка записи файла')
      }
    })
  } else {
    console.log('ошибка чтения файла')
  }
})
