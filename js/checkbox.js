function change() {
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
        result.style.display = 'block';
    });

}

change();