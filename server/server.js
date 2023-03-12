import express from 'express';
import cors from 'cors';

let app = express();
app.use(cors());

app.listen(3000, ()=> {
    console.log('listening on port 3000')
});

 function add (a,b) {
            return a + b;

        }

        function subtract (a,b) {
            if (a<b) {
                return "result must be positive..."
            }else {
                return a-b;
            }
            
        }

        function multiply (a,b) {
            return a*b;
        }

        function devide (a,b) {
            if(b===0) {
                return "can't devide by zero stupid..."
        
            }else{
                return a/b;
            }
            
        }


        let mathFunctions = {
            'add': add,
            'subtract': subtract,
            'multiply': multiply,
            'devide': devide
        }

//using ":" in url indicates a dynamic url
app.get('math/:fnName', (request,response) => {
    let fn = mathFunctions[request.params.fnName];
    let a = Number(request.query.a);
    let b= Number(request.query.b);

    let result = fn(a,b)

    res.json({
        res: result
    });
});
 
 
 
 
 
 
 
 
