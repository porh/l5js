(()=>{
    const a = parseFloat(prompt('Enter A'));
    const b = parseFloat(prompt('Enter B'));
    const c = parseFloat(prompt('Enter C'));
    
    var result = solveQuadraticEq(a, b, c);
    alert(result);
    
    function solveQuadraticEq(a, b, c) {
        const d = calcDiskr(a, b, c);
        if (d > 0) {
            let x1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a);
            let x2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a);
            return `Два корені: x1=${x1}, x2=${x2}`;
        } else if (d == 0) {
            let x1 = -(b/(2*a));
            return `Один корінь: x1=${x1}`;
        } else {
            return `Коренів серед дійсних чисел немає`;
        }
    }
    function calcDiskr(a, b, c) {
        return b*b - 4*a*c;
    }
})();
(()=>{
    document.querySelector("#diskrForm").addEventListener("submit", (evt)=>{
        evt.preventDefault();
        let solveDiscrim = (a,b,c) => {
            let d = b*b - 4*a*c;
            if (d > 0) {
                let x1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a);
                let x2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a);
                return `Два корені: x1=${x1}, x2=${x2}`;
            } else if (d == 0) {
                let x1 = -(b/(2*a));
                return `Один корінь: x1=${x1}`;   
            } else {
                return `Коренів серед дійсних чисел немає`;   
            }
        }
        
        if (1) {
            let args = [];
            ["a","b","c"].forEach((k)=> args.push(parseFloat(document.querySelector("#"+k).value)));
            document.querySelector("#result").innerText = solveDiscrim.apply(null, args);
        } else {
            let a = parseFloat(document.querySelectorAll("#a").value);
            let b = parseFloat(document.querySelectorAll("#b").value);
            let c = parseFloat(document.querySelectorAll("#c").value);
            document.querySelector("#result").innerText = solveDiscrim(a,b,c);
        }
    });
})();