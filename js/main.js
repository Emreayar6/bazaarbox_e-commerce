let x = document.querySelectorAll('.switch a');

x.forEach(i => {
    i.addEventListener('click',function () {
        let buttonBuyIt = document.querySelector('#buyItNowButton');
        let buttonAuction = document.querySelector('#AuctionButton');

        buttonAuction.classList.remove('active');
        buttonBuyIt.classList.remove('active');

        i.classList.add('active');


    })
})