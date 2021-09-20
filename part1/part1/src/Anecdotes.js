
import anecs from './Anecdotes.module.css'
const Anecdotes = (props) => {
    
    
    const anecdotes = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
        "Programmer: A machine that turns coffee into code.",
        "Computers are fast; programmers keep it slow.",
        "When I wrote this code, only God and I understood what I did.Now only God knows.",
        "A son asked his father(a programmer) why the sun rises in the east, and sets in the west.His response ? It works, don’t touch!",
        "How many programmers does it take to change a light bulb ? None, that’s a hardware problem.",
        "Programming is like sex: One mistake and you have to support it for the rest of your life.",
        "Programming can be fun, and so can cryptography; however, they should not be combined.",
        "Programming today is a race between software engineers striving to build bigger and better idiot - proof programs, and the Universe trying to produce bigger and better idiots.So far, the Universe is winning.",
        "Copy - and - Paste was programmed by programmers for programmers actually.",
        "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
        "Debugging is twice as hard as writing the code in the first place.Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Algorithm: Word used by programmers when they don’t want to explain what they did.",
        "Software and cathedrals are much the same — first we build them, then we pray.",
        "There are two ways to write error - free programs; only the third works.",
        "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
        "99 little bugs in the code. 99 little bugs in the code.Take one down, patch it around. 127 little bugs in the code …",
        "Remember that there is no code faster than no code.",
        "One man’s crappy software is another man’s full - time job.",
        "No code has zero defects.",
        "A good programmer is someone who always looks both ways before crossing a one - way street.",
        "Deleted code is debugged code.",
        "Don’t worry if it doesn’t work right.If everything did, you’d be out of a job.",
        "It’s not a bug — it’s an undocumented feature.",
        "It works on my machine.",
        "It compiles; ship it.",
    ];
   
    //sending generated random number to the a
    props.sendLength(anecdotes.length);
    return (
        <p className={anecs.anecdotes}>{anecdotes[props.rand]}
        </p>
    );
}
export default Anecdotes;