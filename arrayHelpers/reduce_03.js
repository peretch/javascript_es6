/**
 * In this example we will make a function to determine
 * if the parens are balance
 * ()   =   BALANCED
 * (()) =   BALANCED
 * (()  =   UNBALANCED
 */

 function balancedParens(text){
     /**
      * With split, we convert the string into an array of characters.
      */
     return !text.split('').reduce((prev, char) => {
        /** This condition avoid ")(" */
        if (prev < 0) { return prev; }
        
        /** this is the count of balance */
        if (char === '(') { return ++prev; }
        if (char === ')') { return --prev; }
        
        /** Last return is in case that a character is not a parens */
        return prev;
     }, 0);
 }

 console.log(balancedParens('(())'));
 console.log(balancedParens(')('));
 console.log(balancedParens('if(i == 0)'));
 console.log(balancedParens('if(((i == 0)'));