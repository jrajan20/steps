import { useState } from "react";


const messages = [
    "Learn React","Apply for Jobs", "Invest your new income!"
]

export default function App() {
return(
  <div>
    <Steps/>
    {/* <Steps/> */}
  </div>
)
}

function Steps(){
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);


  function handlePrevious(){
    if(step > 1){
      setStep((s) => s - 1);

    }
  }
  function handleNext(){
   if (step < 3){
    setStep((s) => s + 1);

   }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
      { 
        isOpen && (<div className="steps">
      <div className="numbers">
        <div className={step >= 1? "active" : ""}>1</div>
         <div className={step >=2? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">Step {step} : {messages[step -1]}</p>
      <div className="buttons">  
        <Button bgColor="#7950f2" textColour="#fff" onClick={handlePrevious}>
         Previous <span>👈</span>
        </Button>
        <Button bgColor="#7950f2" textColour="#fff" onClick={handleNext}>
          Next <span>👉</span>
        </Button> 
      </div>
       
    </div>
   
    )}
     </div>
      
    
  );
}

function Button({textColour, bgColor, onClick, text, children}){
  return <button onClick ={onClick}style={{backgroundColor: bgColor, color: textColour}}>
    {children}
  </button>
}


