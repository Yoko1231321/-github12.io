document.addEventListener("DOMContentLoaded", () => {
    let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    let today = new Date();

    const dates = document.querySelectorAll(".data-item");
    for (let date of dates) {
        date.innerHTML = String(today.getDate() + '.' + months[today.getMonth()] + "." + today.getFullYear());
    }

    // document.querySelectorAll(".data-item").forEach(item => {
    //     return item.innerHTML = today.getDate() + '.' + months[today.getMonth()] + "." + today.getFullYear();
    // })

    (function() {
        const date = new Date();

        const prevDay = date.setDate(date.getDate() - 1)


        const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']


        document.querySelector('.first-date').innerHTML = date.getDate() - 4 + '.' + month[date.getMonth()] + '.' + date.getFullYear();
        document.querySelector('.second-date').innerHTML = date.getDate() - 3 + '.' + month[date.getMonth()] + '.' + date.getFullYear();
        document.querySelector('.third-date').innerHTML = date.getDate() - 2 + '.' + month[date.getMonth()] + '.' + date.getFullYear();
        document.querySelector('.fourth-date').innerHTML = date.getDate() - 2 + '.' + month[date.getMonth()] + '.' + date.getFullYear();
        document.querySelector('.fifth-date').innerHTML = date.getDate() - 1 + '.' + month[date.getMonth()] + '.' + date.getFullYear();


    }())
})