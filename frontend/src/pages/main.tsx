import 'katex/dist/katex.min.css'; // Import the CSS file
import { InlineMath, BlockMath } from 'react-katex'; 
import { useState } from 'react';

function Main() {

	const [String,setString] = useState('');

	const renderMath = (input: string) => {
    	// Split the input into parts based on $ and render lateX when found
    	const parts = input.split(/(\$[^\$]*\$)/g); 
    return (
      <>
        {parts.map((part, index) => {
          // Check if the part is wrapped in $...$
          if (part.startsWith('$') && part.endsWith('$')) {
            const mathContent = part.slice(1, -1); // Remove the $ from both ends
            return <InlineMath key={index} math={mathContent} />; // Render as laTex
          } else {
            return <span key={index}>{part}</span>; // Return raw text if not in $
          }
        })}
      </>
    );
  };

	return (
		<div>
			<input type="text" onChange={(e)=>{
        		setString(e.target.value)}}/>
      		<div className="output-container">
          		{renderMath(String)}
      		</div>
		</div>
	);
}

export default Main;
