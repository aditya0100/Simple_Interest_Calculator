console.log("Hello WOrld")
const rangeEl= document.getElementById("myRange");
const span= document.getElementById("percentageSpan")

const amount= document.getElementById("amount")
// const interest= document.getElementById("interest")
const years= document.getElementById("years")

const display= document.getElementById("display")
const btn= document.getElementById("btn")

// console.log(`${amount.value} ${rangeEl.value} ${years.value}`);
rangeEl.addEventListener('input',range)
function range()
{
    span.innerText=`${rangeEl.value}%`
}
amount.addEventListener('input',fetchAmount)
function fetchAmount()
{
    console.log(`${amount.value}`)
}
years.addEventListener('input',fetchYears)
function fetchYears()
{
    console.log(`${years.value}`)
}

btn.addEventListener('click',displayText)
function displayText()
{
    const year=2022+Number(years.value);
    let si= (amount.value*years.value*rangeEl.value)/100;
    const originalText=`If you deposit ${amount.value} \nat an interest rate of ${rangeEl.value}% \nYou will receive an amount of ${si} \nin the year ${year}`
    if (amount.value>0)
    {
        const w=amount.value 
        const x= rangeEl.value
        const y= si
        const z= year
        const regexp=new RegExp(w,'g')
        const regexp1=new RegExp(x,'g')
        const regexp2=new RegExp(y,'g')
        const regexp3=new RegExp(z,'g')
        displayText=originalText.replace(regexp,`<mark>${w}</mark>`)
        displayText=displayText.replace(regexp1,`<mark>${x}</mark>`)
        displayText=displayText.replace(regexp2,`<mark>${y}</mark>`)
        displayText=displayText.replace(regexp3,`<mark>${z}</mark>`)
        display.innerHTML=displayText
    }
    else
    {
        alert("Enter a positive number");
    }
}
btn.addEventListener('click',highlightAmt)
function highlightAmt()
{
    // hd
}




