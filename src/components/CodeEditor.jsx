import { useState } from 'react';
import { motion } from 'framer-motion';
import CodeMirror from "@uiw/react-codemirror";
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { javascript } from '@codemirror/lang-javascript';
import js from '../assets/images/js.png';
import game from '../assets/images/game.png';
import run from '../assets/images/run.svg';
import { FaCross } from 'react-icons/fa6';
import { ImCross } from 'react-icons/im';

const CodeEditor = () => {
    const games = {
        snake: 'https://ayoubbourhfella.github.io/snake-game/',
    };

    const [toggle, setToggle] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [gameMatch , setGameMatch] = useState('');
    const [code, setCode] = useState(`const Knowledge = {
        frontEnd:       ['HTML', 'CSS', 'Tailwind', 'BootStrap', 'JavaScript'],
        backEnd:        ['PHP', 'Firebase', 'SQL', 'PostgreSQL', 'MongoDB', 'Node.js', 'Express.js'],
        FrameWorks:     ['React', 'React Native', 'Flutter'],
        languages:      ['Python' , 'Dart'],
        design:         [ 'Figma', 'Adobe Illustrator'],
        tools:          ['Git', 'GitHub', 'Microsoft Office', 'Linux'],
        softSkills:     ['Fluent in Arabic', 'Fluent in French', 'Fluent in English']
    }

    console.log('More is coming soon!');`);

    const codeSnippet1 = `const Knowledge = {
frontEnd:       ['HTML', 'CSS', 'Tailwind', 'BootStrap', 'JavaScript'],
backEnd:        ['PHP', 'Firebase', 'SQL', 'PostgreSQL', 'MongoDB', 'Node.js', 'Express.js'],
FrameWorks:     ['React', 'React Native', 'Flutter'],
languages:      ['Python' , 'Dart'],
design:         [ 'Figma', 'Adobe Illustrator'],
tools:          ['Git', 'GitHub', 'Microsoft Office', 'Linux'],
softSkills:     ['Fluent in Arabic', 'Fluent in French', 'Fluent in English']
}

console.log('More is coming soon!')
;`
    const codeSnippet2 = `// type the game name you want and press start
current_games = ['snake'] `
    const handleToggle = (value) => {
        setToggle(value);
        setCode(value ? codeSnippet1 : codeSnippet2);
    };

    const handleRunClick = () => {
        console.log("Running the code:", code); 
        
        const gameKeys = Object.keys(games);
        setGameMatch(gameKeys.find((gameKey) => code.includes(gameKey)))
    
        if (gameMatch) {
            console.log(`Opening the modal for ${gameMatch} game`);
            setIsModalOpen(true);
        } else {
            console.log("No matching game in the code, no modal to open.");
        }
    };
    

    const onClose = () => {
        setIsModalOpen(false); // Close the modal
    };
    const handleCodeChange = (newCode) => {
        if (newCode.trim() === '') {
            setCode(codeSnippet2);
        } else {
            setCode(newCode);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 200, scale: 1.1 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
                x: { duration: 1, ease: "easeOut" },
                opacity: { duration: 0.8, ease: "easeIn" },
                scale: { delay: 1, duration: 0.5, type: "spring", stiffness: 100, damping: 10 },
            }}
            className="xl:w-1/2 w-full px-9 xl:px-0 h-full flex flex-col justify-center items-start"
        >
            <div className="flex flex-row justify-start items-start w-full h-full">
                <button
                    onClick={() => handleToggle(true)}
                    className={`${toggle ? 'bg-backhight' : 'bg-backhightlight'} text-white flex items-center justify-start p-1 px-5 rounded-t-sm`}
                >
                    <img src={js} alt="JS" className="w-4 h-4 m-auto mr-2" />
                    start.js
                </button>
                <button
                    onClick={() => handleToggle(false)}
                    className={`${toggle ? 'bg-backhightlight' : 'bg-backhight'} text-white flex items-center justify-start p-1 px-5 rounded-t-sm`}
                >
                    <img src={game} alt="game" className="w-4 h-4 m-auto mr-2" />
                    start.game
                </button>
                <button onClick={handleRunClick} className="ml-auto z-50">
                    <img src={run} className="w-5 h-5 ml-auto" alt="run" />
                </button>
            </div>

            <CodeMirror
                value={code}
                maxHeight="40vh"
                height="40vh"
                className="w-full"
                onChange={handleCodeChange}
                theme={tokyoNight}
                options={{
                    lineNumbers: true,
                    tabSize: 4,
                    highlightActiveLine: true,
                }}
                extensions={[javascript({ jsx: true })]}
            />

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-backhightlight p-5 rounded-none w-full h-full m-0">
                        <div className="flex justify-end">
                            <button onClick={onClose} className="text-red-500"><ImCross/></button>
                        </div>
                        <iframe
                           src={games[gameMatch]}
                            title="Snake Game"
                            width="100%"
                            height="100%"
                            className="border-0"
                        ></iframe>
                    </div>
                </div>
            )}

        </motion.div>
    );
};

export default CodeEditor;
