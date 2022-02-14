# Is even code generator

Tired of writing endlessly long functions to check if a number is even? This is the perfect solution for you!

## Before:
```javascript
function IsEven(num:number){
  if (num == 1) return false;
  else if (num == 2) return true;
  else if (num == 3) return false;
  else if (num == 4) return true;
  else if (num == 5) return false;
  else if (num == 6) return true;
  else if (num == 7) return false; 
}

console.log(`Is 1 even? ${IsEven(1)}`);
```
## After:
```typescript
import { Generate } from '../src';

// convert generated string to function
const IsEven = (num:number) => eval("(" + Generate(0, 100) + ")")(num);
// run function
console.log(`Is 1 even? ${IsEven(1)}`);
``` 
 


_(please don't take it seriously)_

