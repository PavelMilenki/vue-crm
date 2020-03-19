export default function currencyFilter (value, currency = 'BYN') {
return new Intl.NumberFormat('ru-RU',{
  style:'currency',
  currency
}).format(value)
}
