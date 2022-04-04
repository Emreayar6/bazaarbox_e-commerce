let x = document.querySelectorAll('.switch a');

x.forEach(i => {
    i.addEventListener('click',function () {
        let buttonBuyIt = document.querySelector('#buyItNowButton');
        let buttonAuction = document.querySelector('#AuctionButton');

        buttonAuction.classList.remove('active');
        buttonBuyIt.classList.remove('active');

        i.classList.add('active');

        let priceInp = document.querySelector('#priceInput');
        let bidInp = document.querySelector('#bidInput');
        let selector = document.querySelector('#selector');


        buttonAuction.classList.contains('active') ? bidInp.classList.add('active') & priceInp.classList.remove('active') & selector.classList.add('right') : priceInp.classList.add('active') & bidInp.classList.remove('active')& selector.classList.remove('right');


    })
})