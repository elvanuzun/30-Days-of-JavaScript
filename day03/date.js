const date = new Date()

let year = date.getFullYear(),
month = date.getMonth(),
day = date.getDate(),
hour = date.getHours(),
minutes = date.getMinutes(),
seconds = date.getSeconds()
dayNumber = date.getDay()

let months = [
    'Ocak',
    'Şubat',
    'Mart', 
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz', 
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]

let days= [
  'Pazartesi', 
  'Salı', 
  'Çarşamba', 
  'Perşembe',
  'Cuma',
  'Cumartesi',
  'Pazar' 
    
]

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minutes}:${seconds}`

console.log(humanReadableDate)