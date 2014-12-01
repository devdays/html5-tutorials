/* Pi is an irrational number (a number that repeats and never ends). While it has been calculated 
to trillions of decimal places, most of us only need a few decimal places. Pi can be found using 
many methods, including complex formulas discovered by mathematicians. 
One such formula is Leibniz's formula, which is Pi = 4/1 -- 4/3 + 4/5 -- 4/7 + 4/9 + 4/11 + ... .

Read more: How Do You Calculate Pi? http://www.ehow.com/how_5157582_calculate-pi.html#ixzz2M22FiFwb */


function calculatePi() {
    var result = 0;
    var denominator = 1;
    var add = true;
    var newresult = 0;
    while (true) {
        if(add) {
            result = result + 4/denominator;
            add = false;
        } else {
            result = result - 4/denominator;
            add = true;
        }
        this.postMessage(result);
        denominator = denominator + 2;
    }
}

calculatePi();