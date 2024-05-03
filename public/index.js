
var from_lang="auto"
var to_lang = "en"
var input_text =""
function myFunction() {
    from_lang = document.getElementById("fromoption").value;
    to_lang = document.getElementById("tooption").value;
    console.log(from_lang,to_lang);
}

function textSubmit(){
    input_text = (document.getElementById("input_text").value).trim();
    async function hello(){
        const result = await fetch('http://localhost:5000/api/translator',{
            method:"POST",
            headers:{'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                "from":from_lang,
                "to":to_lang,
                "text":input_text
            })
        })
        const details = await result.json();
        if (!details) {
            console.log("something went wrong!")
            throw new Error("something went wrong!")
        }
        document.getElementById("result").innerText = details.text;
    }
    if (input_text){
        hello()
        .catch((err)=>{document.getElementById("result").innerText = "";})
    }
    document.getElementById("result").innerText = "";
    
    
}