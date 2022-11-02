let selected;

function handleCategorySelcted(event){
    const selectedCategory = event.target.id
    const elements = document.getElementsByClassName('content');
    for(let el of elements){
        el.classList.remove("active");
        if(el.classList.toString().indexOf(selectedCategory) !== -1){
            selected = el
        }


    }

    if(selected){
        selected.classList.add("active")
    }


}

