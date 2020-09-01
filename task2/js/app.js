window.addEventListener('DOMContentLoaded',function(){

let url = new URL('http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd&');

console.log(url.protocol);
console.log(url.host);

let size = url.searchParams.getAll("size");
let color = url.searchParams.getAll("color");
let manufacturer = url.searchParams.getAll("manufacturer");

let obj = {
    size,color,manufacturer,
}

loaderFilter();
function loaderFilter() {
     obj.color.forEach(function (element) {

        let check = document.getElementById(`color-${element}`);
        check.checked = "true";

    })

    obj.size.forEach(function (element) {

        let loverCaseElem = element.toLocaleLowerCase();
        let check = document.getElementById(`size-${loverCaseElem}`);
        check.checked = "true";

    })

    obj.manufacturer.forEach(function (element) {

        let check = document.querySelector(`#manufacturer option[value="${element}"]`);
        check.selected = "true";

    })
}

let elemColor = document.getElementsByClassName('filter-el');


[].forEach.call(elemColor, function (item, i) {
    item.addEventListener('change', function () {

        url.searchParams.delete('color');
        url.searchParams.delete('manufacturer');
        for (let k = 0; elemColor.length > k; k++){

                if(elemColor[k].classList.contains("brand-el") && elemColor[k].selected){

                    url.searchParams.append('manufacturer',elemColor[k].value);

                } else if(elemColor[k].checked && elemColor[k].classList.contains("color-el")){

                    url.searchParams.append('color',elemColor[k].value);

                } else if (elemColor[k].checked && elemColor[k].classList.contains("size-el")){

                    let value = elemColor[k].value;

                    let valueUpper = value.toUpperCase();
                    url.searchParams.set('size',valueUpper)
                }

             }

               console.log(url.href)

         })


    })


})
