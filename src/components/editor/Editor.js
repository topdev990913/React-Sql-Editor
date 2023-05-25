import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";


const Editor = ({ setQuery, value, setValue }) => {

    const [editorTheme, setEditorTheme] = useState("github");
    const [tableName, setTableName] = useState("");

    const onChange = (newValue) => {
        setValue(newValue);
    };

    const onSubmit = () => {
        let res = value.toLowerCase().slice(value.indexOf("from") + "from".length);
        setQuery(res.split(" ")[1]);
    };

    return (
        <div className="mt-10 mx-20 flex justify-start items-center flex-1 overflow-x-hidden">
            <aside className="flex-0.3 mr-20">
                <div className="mb-5">
                    <label htmlFor="Select Table">Select Table:</label>
                    <select 
                        id="Select Table" 
                        className="w-full h-8 pl-2 bg-white border-2 border-gray-600 rounded-lg" 
                        onChange={(e) => {
                            setTableName(e.target.value);
                            setValue(`select * from ${e.target.value}`);
                        }}
                        value={tableName}
                    >
                        <option value="categories">categories</option>
                        <option value="customers">customers</option>
                        <option value="employee_territories">employee territories</option>
                        <option value="employees">employees</option>
                        <option value="order_details">order details</option>
                        <option value="orders">orders</option>
                        <option value="products">products</option>
                        <option value="regions">regions</option>
                        <option value="shippers">shippers</option>
                        <option value="suppliers">suppliers</option>
                        <option value="territories">territories</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="change theme">Change Theme:</label>
                    <select 
                        id="change theme" 
                        className="w-full h-8 pl-2 bg-white border-2 border-gray-600 rounded-lg"
                        onChange={(e) => setEditorTheme(e.target.value)}
                        value={editorTheme}
                    >
                        <option value="github">github</option>
                        <option value="monokai">monokai</option>
                        <option value="tomorrow">tomorrow</option>
                        <option value="kuroir">kuroir</option>
                        <option value="twilight">twilight</option>
                        <option value="xcode">xcode</option>
                        <option value="textmate">textmate</option>
                        <option value="solarized_dark">solarized_dark</option>
                        <option value="solarized_light">solarized_light</option>
                        <option value="terminal">terminal</option>
                    </select>
                </div>
                <div>
                    <button
                        className="w-full py-1.5 bg-violet-800 hover:bg-violet-600 transition-all text-white font-semibold rounded-lg"
                        onClick={onSubmit}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <title id="run">run query</title>
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                            />
                        </svg>{" "}
                        Run Query
                    </button>
                </div>
            </aside>
            <aside className="flex-0.5 border-2 border-indigo-400">
            <AceEditor
                mode="mysql"
                theme={editorTheme}
                width="1100px"
                onChange={onChange}
                value={value}
                name={'SQL Editor'}
                fontSize={16}
                minLines={12}
                maxLines={12}
                placeholder="Write your Query here..."
                showGutter={true}
                // wrapEnabled={true}
                showPrintMargin={false}
                showLineNumbers={true}
                highlightActiveLine={true}
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                }}
            />
            </aside>
        </div>
    );
}

export default Editor;