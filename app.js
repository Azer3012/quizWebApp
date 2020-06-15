let result=document.querySelector(".result")
let suallar=[ 
    {a:2.5,   b:2,   c:1,    d:"undefined", cavab: "1"},
    {a:"string",   b:"boolean",   c:"object",    d:"number",cavab:"boolean"},
    {a:'br',   b:"hr",   c:"p",    d:"h",cavab: "hr"},
    {a:"font-size",   b:"font-family",   c:"text-transform",    d:"font-color",cavab:"font-size"},
    {a:"azer",   b:"vaqif",   c:"vusal",    d:"hec biri",cavab:"vaqif"},
    {a:"font-color",   b:"text-color",   c:"color",    d:"fontcolor",cavab:"color"},
    {a:"class",   b:"tag",   c:"first",    d:"id",cavab:"id"},
    {a:"font-size",   b:"font-family",   c:"text-transform",    d:"font",cavab:"font-family"},
    {a:"letter-spacing",   b:"word-spacing",   c:"word-space",    d:"text-spacing",cavab:"word-spacing"},
    {a:"margin",   b:"padding",   c:"border",    d:"margin-width",cavab: "margin"}
]

function check(){
    let correct=0;  ///global deyisen olsa eger bir duz cavab varsa her klikde onu artiracaq ona gore lokal deyisen etdim
    let inputlar=document.querySelectorAll("input:checked") //id changed to input:checked

    for(let i=0;i<inputlar.length;i++){    
        
        for(let j=0;j<10;j++){
            
        if(inputlar[i].value==suallar[j].cavab){
                    correct++              
                }  
        }
        
    }

result.innerHTML="sizin duzgun cavablarin sayi " + correct;
}

