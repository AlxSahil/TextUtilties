import React, {useState} from 'react'


export default function Textform(props) {
const[text, setText]=useState("");



const uclickfunction= ()=>{
let newValue=text.toUpperCase();
setText(newValue);
props.showAlert("Your text is converted to uppercase", "success");
}


const lclickfunction= ()=>{
let newValue=text.toLowerCase();
setText(newValue);
props.showAlert("Your text is converted to lowercase", "success");
}


const cclickfunction = ()=>{
navigator.clipboard.writeText(text);
props.showAlert("Your text is copied to clipboard", "success");
}
const ccclickfunction = ()=>{
    setText('');
    props.showAlert("Your space is cleared now", "success");
}


const changefunction= (event)=>{
   setText(event.target.value);
}


const fclickfunction = ()=> {
    if (!text || typeof text !== 'string') {
        setText(text);
    }

    // Split into paragraphs while preserving line breaks
    const paragraphs = text.split(/\n\s*\n/);

    // Process each paragraph separately
    const formattedParagraphs = paragraphs.map(paragraph => {
        // Trim whitespace and normalize spaces within paragraph
        let formatted = paragraph.trim().replace(/\s+/g, ' ');

        // Check if paragraph is all uppercase or all lowercase
        const isAllUpper = formatted === formatted.toUpperCase() && formatted !== formatted.toLowerCase();
        const isAllLower = formatted === formatted.toLowerCase() && formatted !== formatted.toUpperCase();

        // If paragraph is all uppercase or all lowercase, normalize case first
        if (isAllUpper || isAllLower) {
            formatted = formatted.toLowerCase();
            
            // Capitalize first letter of the paragraph
            if (formatted.length > 0) {
                formatted = formatted[0].toUpperCase() + formatted.slice(1);
            }
        }

        // Ensure sentences end with punctuation
        formatted = formatted.replace(/([^.!?])\s*$/g, '$1.');
        
        // Capitalize first letter after sentence-ending punctuation
        formatted = formatted.replace(/([.!?]\s+)([a-z])/g, (match, p1, p2) => {
            return p1 + p2.toUpperCase();
        });
        
        // Capitalize first letter of every sentence (even without proper punctuation)
        formatted = formatted.replace(/(?:^|[.!?]\s+)([a-z])/g, (match, p1) => {
            return match.replace(p1, p1.toUpperCase());
        });
        
        // Fix common punctuation issues
        formatted = formatted.replace(/\s+([.,!?;:])/g, '$1'); // Remove space before punctuation
        formatted = formatted.replace(/([.,!?;:])([A-Za-z])/g, '$1 $2'); // Add space after punctuation
        
        // Fix common grammatical contractions
        formatted = formatted.replace(/\b(can not|won't|don't|doesn't|isn't|aren't|wasn't|weren't|haven't|hasn't|hadn't|wouldn't|couldn't|shouldn't|mightn't|mustn't)\b/gi, (match) => {
            const contractions = {
                'can not': 'cannot',
                'won\'t': 'will not',
                'don\'t': 'do not',
                'doesn\'t': 'does not',
                'isn\'t': 'is not',
                'aren\'t': 'are not',
                'wasn\'t': 'was not',
                'weren\'t': 'were not',
                'haven\'t': 'have not',
                'hasn\'t': 'has not',
                'hadn\'t': 'had not',
                'wouldn\'t': 'would not',
                'couldn\'t': 'could not',
                'shouldn\'t': 'should not',
                'mightn\'t': 'might not',
                'mustn\'t': 'must not'
            };
            return contractions[match.toLowerCase()] || match;
        });
        
        // Fix common capitalization issues for proper nouns
        const properNouns = ['I', 'JavaScript', 'English', 'Monday', 'Tuesday', 'Wednesday', 
                            'Thursday', 'Friday', 'Saturday', 'Sunday', 'January', 'February', 
                            'March', 'April', 'May', 'June', 'July', 'August', 'September', 
                            'October', 'November', 'December'];
        
        properNouns.forEach(noun => {
            const regex = new RegExp(`\\b${noun.toLowerCase()}\\b`, 'g');
            formatted = formatted.replace(regex, noun);
        });
        
        // Fix spacing around quotes
        formatted = formatted.replace(/"\s*([^"]+?)\s*"/g, '"$1"');
        formatted = formatted.replace(/'s\b/g, '\'s'); // Fix possessive apostrophes

        return formatted;
    });

    // Join paragraphs with double line breaks
    setText(formattedParagraphs.join('\n\n'));
    props.showAlert("Your text is in well format", "success");
}




  return (
   <>
   <div className='mb-3 my-3'>
    <label for="Mybox" className={`form-label text-${props.mode==="dark"? "white": "black"}`} ><h2>{props.heading}</h2></label>
    <textarea className={`form-control bg-${props.mode} text-${props.mode==="dark"? "white": "black"}`} value={text} onChange={changefunction} id='Mybox' rows="9"> </textarea>
    <p className={`text-${props.mode==="dark"? "white": "black"}`}>Summary: charracter={text.length}, words={text.trim() === "" ? 0 : text.trim().split(/\s+/).length}, It will take {0.008*(text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} minutes to read</p>

    <button disabled= {text.length===0 || text.trim() === ""} className={`btn btn-outline-${props.mode==="dark"? "light": "dark"} my-1 mx-1`} onClick={uclickfunction}>Convert to Uppercase</button>
    <button disabled= {text.length===0 || text.trim() === ""} className={`btn btn-outline-${props.mode==="dark"? "light": "dark"} my-1 mx-1`}  onClick={lclickfunction}>Convert to Lowercase</button>
    <button disabled= {text.length===0 || text.trim() === ""} className={`btn btn-outline-${props.mode==="dark"? "light": "dark"} my-1 mx-1`}  onClick={fclickfunction}>Format the Text</button>
    <button disabled= {text.length===0 || text.trim() === ""} className={`btn btn-outline-${props.mode==="dark"? "light": "dark"} my-1 mx-1`} onClick={cclickfunction}>Copy Text</button>
    <button disabled= {text.length===0 || text.trim() === ""} className={`btn btn-outline-${props.mode==="dark"? "light": "dark"} my-1 mx-1`}  onClick={ccclickfunction}>Clear Text</button>
   </div>
   
   </>
  )
}

