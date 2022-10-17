const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))


const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

async function makeColorGradient(frequency1, frequency2, frequency3,
    phase1, phase2, phase3,
    center, width, len)
    {
        
        if (center == undefined)   center = 90;
        if (width == undefined)    width = 70;
        if (len == undefined)      len = Infinity;
        
        for (var i = 0; i < len; ++i)
        {
        await sleep(20)
        var red = Math.sin(frequency1*i + phase1) * width + center;
        var grn = Math.sin(frequency2*i + phase2) * width + center;
        var blu = Math.sin(frequency3*i + phase3) * width + center;

        
        // document.getElementById("glow2").style.boxShadow = `0 0 14px rgb(${red}, ${grn}, ${blu})`
        let rgbstuff = document.querySelectorAll('#glow2')
        rgbstuff.forEach((rgb) => {
            rgb.style.boxShadow = `0 0 15px 4px rgb(${red}, ${grn}, ${blu})`
        })
        
    }
}

makeColorGradient(.3,.3,.3,0,2,4);