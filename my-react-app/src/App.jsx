import "./app.css";
import { useState, useEffect } from "react";

function App() {

    const [currentFile, setCurrentFile] = useState("html");

    const [codeData, setCodeData] = useState({

        html: `<!DOCTYPE html>
<html>
<head>
     <title>Page Title</title>
</head>
<body>
    
</body>
</html>`,

        css: ``,

        js: ``
    });

    const [code, setCode] = useState(codeData.html);

    useEffect(() => {

        setCode(codeData[currentFile]);

    }, [currentFile]);

    function switchFile(fileName) {

        setCodeData(prev => ({
            ...prev,
            [currentFile]: code
        }));

        setCurrentFile(fileName);
    }

    function handleChange(e) {

        const value = e.target.value;

        setCode(value);

        setCodeData(prev => {

            const updated = {
                ...prev,
                [currentFile]: value
            };

            return updated;
        });
    }

    const finalCode = `
<!DOCTYPE html>
<html>

<head>
<style>
${codeData.css}
</style>
</head>

<body>

${codeData.html}

<script>
${codeData.js}
<\/script>

</body>

</html>
`;

    return (

        <div className="container">

           

            <div className="sidebar">

                <div>

                    <div className="logo">
                        <h1>CodeForge</h1>
                    </div>

                    <div className="files">

                        <h3>FILES</h3>

                        <div
                            className={`file ${currentFile === "html" ? "active-file" : ""}`}
                            onClick={() => switchFile("html")}
                        >
                            📄 index.html
                        </div>

                        <div
                            className={`file ${currentFile === "css" ? "active-file" : ""}`}
                            onClick={() => switchFile("css")}
                        >
                            🎨 style.css
                        </div>

                        <div
                            className={`file ${currentFile === "js" ? "active-file" : ""}`}
                            onClick={() => switchFile("js")}
                        >
                            ⚡ script.js
                        </div>

                    </div>

                </div>

            </div>

      

            <div className="main">

                

                <div className="topbar">

                    <div className="tabs">

                        <div className={`tab ${currentFile === "html" ? "active-tab" : ""}`}>
                            index.html
                        </div>

                        <div className={`tab ${currentFile === "css" ? "active-tab" : ""}`}>
                            style.css
                        </div>

                        <div className={`tab ${currentFile === "js" ? "active-tab" : ""}`}>
                            script.js
                        </div>

                    </div>

                </div>

   

                <div className="workspace">

               

                    <div className="editor-panel">

                        <div className="editor-header">
                            Live Editor
                        </div>

                        <textarea
                            value={code}
                            onChange={handleChange}
                        ></textarea>

                    </div>

                    

                    <div className="preview-panel">

                        <div className="preview-header">
                            Live Preview
                        </div>

                        <iframe
                            title="preview"
                            srcDoc={finalCode}
                        ></iframe>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default App;