var allCheckBoxes = document.querySelectorAll('input[type = checkbox]');
var allItems = Array.from(document.querySelectorAll('.col'));
var checked = {};

getChecked('buyitnow');
getChecked('auction');

Array.prototype.forEach.call(allCheckBoxes, function (el) {
    el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
    getChecked(e.target.name);
    setVisibility();
}

function getChecked(name) {
    checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
        return el.value;
    });
}

function setVisibility() {
    allItems.map(function (el) {
        var buyitnow = checked.buyitnow.length ? _.intersection(Array.from(el.classList), checked.buyitnow).length : true;
        var auction = checked.auction.length ? _.intersection(Array.from(el.classList), checked.auction).length : true;

        if (buyitnow || auction) {
            el.style.display = 'block';
        } else {
            el.style.display = 'block';
        }
    });
}





















/*function change() {
    let results = Array.from(document.querySelectorAll('.row > div'));

    let modelsChecked = document.querySelectorAll('.filter-search input.filter-search__filter__checkbox:checked');


    results.forEach(function (result) {
        result.style.display = 'none';
    });

    filterModel(modelsChecked);

    function filterModel(models_checked) {

        results = Array.from(models_checked).reduce(function (sum, input) {
            const attrib = input.getAttribute('rel');
            return sum.concat(results.filter(function (result) {
                return result.classList.contains(attrib);
            }));
        }, []);

    }

    results.forEach(function (result) {
        result.style.display = 'inline-block';
    });

}

change();*/