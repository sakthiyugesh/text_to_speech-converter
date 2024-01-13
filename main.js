let text = document.getElementById('textInput')
    let button = document.getElementById('btn')
    let textValue = text.value

    button.addEventListener('click',(e)=>{

        if (text.value === ""){let utterance = new SpeechSynthesisUtterance('kindly enter something');
            speechSynthesis.speak(utterance)
            console.log(utterance)
            

            
        }
        else{
            let utterance = new SpeechSynthesisUtterance(text.value);
            speechSynthesis.speak(utterance)
            console.log(utterance)

        }
        
    })