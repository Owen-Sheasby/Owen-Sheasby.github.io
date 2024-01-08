const div = document.querySelector(".text")
        var text = "Welcome" // this holds the welcome text
        
        //<const text style ="color:#000000">Welcome</const> //changing color

        function textTypingEffect(element, text, i =0){
            if (i === 0){
                element.textContent = "";
                
            }
                        
            element.textContent += text[i];

            if (i === text.length - 1) {
                return;
            }
            
            setTimeout(() => textTypingEffect(element, text, i + 1), 50);
        }
        
        textTypingEffect(div, text);






function myFunction() {alert("you chose mental health");}
function openProductivity() {location.href='productivity.html';}
function openWealth() {location.href='wealth.html';}
function openMentalHealth() {location.href='mentalhealth.html';}
function openHealthNFitness() {location.href='healthandfitness.html';}
function openMakingDecisions() {location.href='makingdecisions.html';}


 


function healthNFitnessFunction(){
    

    const div = document.querySelector(".text")
    var text = "You chose health & fitness" // this holds the text that will be typed out 
    
    

    function textTypingEffect(element, text, i =0){
        if (i === 0){
            element.textContent = "";
            
        }
                    
        element.textContent += text[i];

        if (i === text.length - 1) {
            return;
        }
        
        setTimeout(() => textTypingEffect(element, text, i + 1), 50);
    }
    
    textTypingEffect(div, text);}








function mentalHealthFunction(){
        
        const div = document.querySelector(".text")
        var text = "You chose mental health" // this holds the welcome text
        
        
        
        function textTypingEffect(element, text, i =0){
            
            if (i === 0){
                
                element.textContent = "";
            
        }
                    
            element.textContent += text[i];

            if (i === text.length - 1) {
                return;
        }
        
        setTimeout(() => textTypingEffect(element, text, i + 1), 50);
    }
    
    textTypingEffect(div, text);}









function choiceFunction(){choice = "Wealth"
    console.log("You chose fitness")
    alert("You chose fitness");}


        console.log("hello")
        if (choice = "Wealth"){
        //print("OK")}
        function openWealth(){
            // document.getElementById("test").innerHTML = "Goodbye"
            // <a href="wealth.html" style="border-radius: 1000px;">WEALTH</a>
            
        }
        
        


    

    if (choice = "wealth"){
    
        const div = document.querySelector(".text")
        var text = "You chose wealth. press 'X' to go back"


        function textTypingEffect(element, text, i =0){
            if (i === 0){
                element.textContent = "";
                
            }
                        
            element.textContent += text[i];

            if (i === text.length - 1) {
                return;
            }
            
            setTimeout(() => textTypingEffect(element, text, i + 1), 50);
        }
        
        textTypingEffect(div, text);}




    else if (choice = "mental health"){
    
        const div = document.querySelector(".text")
        var text = "You chose mental health. press 'X' to go back";
        console.log(text)


        function textTypingEffect(element, text, i =0){
            if (i === 0){
                element.textContent = "";
                
            }
                        
            element.textContent += text[i];

            if (i === text.length - 1) {
                return;
            }
            
            setTimeout(() => textTypingEffect(element, text, i + 1), 50);
        }
        
        textTypingEffect(div, text);}
        
            }



    
    
    
    else if (choice = "making descisions"){
    
    const div = document.querySelector(".text")
    var text = "You chose making descitions. press 'X' to go back";
    console.log(text)


    function textTypingEffect(element, text, i =0){
        if (i === 0){
            element.textContent = "";
            
        }
                    
        element.textContent += text[i];

        if (i === text.length - 1) {
            return;
        }
        
        setTimeout(() => textTypingEffect(element, text, i + 1), 50);
    }
    
    textTypingEffect(div, text);}