import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleInputChange} 
      />
      <ReactMarkdown children={markdown} />
    </div>
  );
};

export default MarkdownEditor;
function reverseSentence(sentence) {
    // Reverse the sentence
    let reversed = sentence.split(' ').reverse().join(' ');
  
    // Ensure the first character is uppercase
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);
  
    return reversed;
  }
  let sentence = "the quick brown fox jumps over the lazy dog";
let reversed = reverseSentence(sentence);
console.log(reversed);  // Outputs: "Dog lazy the over jumps fox brown quick the"
//const reversedSentence = markdown.split(' ').reverse().join(' ');
//const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
//console.log(capitalizedSentence);
const data = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Bob' },
];

const names = data.map(item => item.name);
console.log(names);  // Outputs: ["John", "Jane", "Bob"]
const nestedData = [
    [
        { name: 'John' },
        { name: 'Jane' },
        { name: 'Bob' },
    ],
    [
        { name: 'Alice' },
        { name: 'Eve' },
        { name: 'Charlie' },
    ],
];

names = nestedData.flatMap(array => array.map(item => item.name));
console.log(names);  // Outputs: ["John", "Jane", "Bob", "Alice", "Eve", "Charlie"]