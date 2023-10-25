import { TypeAnimation } from 'react-type-animation';
 
export default function TypingText () {
  return (
    <>
    <TypeAnimation
      sequence={[
        1000, 
        "hi, i'm ", 
      ]}
      wrapper="span"
      cursor={false}
      speed={15}
      style={{ fontSize: '3rem', display: 'inline-block' ,color: '#B2D2A4', marginRight: '20px'}}
    />
    <TypeAnimation
      sequence={[
        2500,
        "yeab", // Types 'One'
      ]}
      wrapper="span"
      cursor={true}
      speed={15}
      style={{ fontSize: '3rem', fontWeight: 'bold', display: 'inline-block' ,color: '#4dff00'}}
    />
    </>
  );
  
};


