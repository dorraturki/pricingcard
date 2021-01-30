// * Slider
let cslider = document.getElementById('myRange')
let pageviews = document.getElementById('pageviews')
let price = document.getElementById('price')
let checkbox = document.getElementById('checkbox')


function calcvalue(){
    let range = cslider.value
    let nrange = calcnrange()
    function calcnrange(){
        if (checkbox.checked) {
            let nrange = (range - (range*(25/100)))
            return nrange
         } else {
             let nrange = range
            return nrange
        }
    }
    if (range == 8) {
            cslider.style.background = 'hsl(224, 65%, 95%)'
            pageviews.innerHTML = '10K PAGEVIEWS'
            price.innerHTML = '$'+nrange+'.00'
        } else if (range == 12){
            let bg = ((12-8)*100)/28
            cslider.style.background = 'linear-gradient(to right, var(--Soft-cyan) 0%, var(--Soft-cyan)'+bg+'%,hsl(224, 65%, 95%)' +bg+'%,hsl(224, 65%, 95%) 100%)';
            pageviews.innerHTML = '50K PAGEVIEWS'
            price.innerHTML = '$'+nrange+'.00'
        } else if (range == 16){
            let bg = ((16-8)*100)/28
            cslider.style.background = 'linear-gradient(to right, var(--Soft-cyan) 0%, var(--Soft-cyan)'+bg+'%,hsl(224, 65%, 95%)' +bg+'%,hsl(224, 65%, 95%) 100%)';
            pageviews.innerHTML = '100K PAGEVIEWS'
          price.innerHTML = '$'+nrange+'.00'
     } else if (range == 20){
         cslider.value = 16
    } else if (range == 24){
        let bg = ((24-8)*100)/28
        cslider.style.background = 'linear-gradient(to right, var(--Soft-cyan) 0%, var(--Soft-cyan)'+bg+'%,hsl(224, 65%, 95%)' +bg+'%,hsl(224, 65%, 95%) 100%)';
         pageviews.innerHTML = '500K PAGEVIEWS'
        price.innerHTML = '$'+nrange+'.00'
    } else if (range == 28){
        cslider.value = 24
    } else if (range == 32){
         cslider.value = 36
    }else if (range == 36){
         cslider.style.background = 'hsl(174, 77%, 80%)'
         pageviews.innerHTML = '1M PAGEVIEWS'
         price.innerHTML = '$'+nrange+'.00'
    }

}

checkbox.addEventListener('change' , calcvalue , false)
cslider.addEventListener('input' , calcvalue , false)