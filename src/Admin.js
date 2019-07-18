import React, {useState, createContext} from 'react';
import Container from "./components/Container";
import DraggableElement from "./components/Draggable";

export const ElementsContext = createContext([]);

function useDraggableElements() {
    const [elements, setElements] = useState([]);

    function addElement(type = 'text') {
        let element = null;
        switch (type) {
            case "text":
                element = (
                    <DraggableElement id={elements.length + 1}>
                        <div>Text Element</div>
                    </DraggableElement>
                );
                break;
            default:
                break;
        }
        setElements([...elements, element]);
    }

    return [elements, addElement]
}

function ToolBar({addElement}) {
    // console.log(state);
    return (
        <div style={{position: 'absolute', right: 0,}}>
            <div onClick={() => addElement()}>Text</div>
            <div>Image</div>
        </div>
    )
}

function useFormHook() {
    const [state, setState] = useState({});

    function onChange(e) {
        let newState = {...state};
        newState[e.target.name] = e.target.value;
        setState(newState);
    }

    return [state, onChange];
}

export default function Admin() {
    const elementsData = {};
    const [state, onChange] = useFormHook();
    const [elements, addElement] = useDraggableElements();
    function addElementData(id, data) {
        elementsData[id] = data;
    }
    function elementsDataPrinter() {
        console.log(elementsData);
    }
    return (
        <ElementsContext.Provider value={{addElementData, printElements: () => console.log(elementsData)}}>
            <div>
                <Container>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={e => onChange(e)}/>
                    <button onClick={() => console.log('Website created')}>Submit</button>
                    <ToolBar addElement={addElement}/>
                    <button onClick={() => elementsDataPrinter()}>Submit stuff</button>
                    {elements}
                </Container>
            </div>
        </ElementsContext.Provider>
    )
}
