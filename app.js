let timeMode = localStorage.getItem('timeMode')
const toggleBtn = document.querySelector('#checkbox')
const month = document.querySelector('.month')
const prices = document.querySelectorAll('.price')



const enableYearMode = () => {
    const year = document.querySelectorAll('#year')
    const prices = document.querySelectorAll('.price')

    year.forEach((year) => {
        year.innerHTML = '/mo'
    })

    prices.forEach((price, index) => {
        price.innerHTML = prices[index].innerHTML / 11
    }
    )

    localStorage.setItem('timeMode', 'enabled')
}

const enableMonthMode = () => {
    const year = document.querySelectorAll('#year')
    const prices = document.querySelectorAll('.price')

    year.forEach((year) => {
        year.innerHTML = '/year'
    })

    prices.forEach((price, index) => {
        price.innerHTML = prices[index].innerHTML * 11
    }
    )

    localStorage.setItem('timeMode', null)
}

toggleBtn.addEventListener('click', () => {
    let timeMode = localStorage.getItem('timeMode')
    if (timeMode !== 'enabled') {
        enableYearMode()
    } else {
        enableMonthMode()
    }
})