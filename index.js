import findNumberOfPerfectSquareSubSets from './src/js/numberOfPerfectSquareSubsets'
import './src/css/style.scss'

const form = document.getElementById('form')
let start = document.getElementsByName('start')[0]
let stop = document.getElementsByName('stop')[0]
const submitButton = document.getElementsByName('calculate')[0]
let answer = document.getElementsByClassName('answer')[0]

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let startValue = parseInt(start.value)
    let stopValue = parseInt(stop.value)
    answer.innerHTML = findNumberOfPerfectSquareSubSets(startValue, stopValue)
})