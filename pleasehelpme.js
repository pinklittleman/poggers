// const sleep = (time) => {
//     return new Promise((resolve) => setTimeout(resolve, time))
// }

// async function makeColorGradient(frequency1, frequency2, frequency3,
//     phase1, phase2, phase3,
//     center, width, len)
//     {
        
//         if (center == undefined)   center = 90;
//         if (width == undefined)    width = 70;
//         if (len == undefined)      len = Infinity;
        
//         for (var i = 0; i < len; ++i)
//         {
//         await sleep(40)
//         var red = Math.sin(frequency1*i + phase1) * width + center;
//         var grn = Math.sin(frequency2*i + phase2) * width + center;
//         var blu = Math.sin(frequency3*i + phase3) * width + center;

//         setTimeout(() => {
//             document.getElementById("glow2").style.textShadow = `0 0 14px rgb(${red}, ${grn}, ${blu})`
//         }, 500);
//     }
// }

// makeColorGradient(.3,.3,.3,0,2,4);
