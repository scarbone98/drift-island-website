import React, {useState, useEffect} from 'react';
import Draggable from 'react-draggable';
import {ElementsContext} from "../Admin";

function useDraggableHook(initialPosition = {x: 0, y: 0}) {
    const [position, setPosition] = useState(initialPosition);

    function onDrag(e, data) {
        setPosition(data);
    }

    return [position, onDrag]
}

export default function DraggableElement({children, id}) {
    const defaultPosition = {x: 0, y: 0};
    const [position, onDrag] = useDraggableHook(defaultPosition);
    const [isHovered, setHovered] = useState(false);
    const [isBeingEdited, setEdited] = useState(false);
    return (
        <ElementsContext.Consumer>
            {data => (
                <Draggable
                    defaultPosition={defaultPosition}
                    onDrag={onDrag}
                    disabled={isBeingEdited}
                    id={'test'}
                    formData={'formTest'}
                    bounds={{top: -0, left: 0, right: 1024}}
                >
                    <div style={{position: 'absolute'}}>
                        <div style={{backgroundColor: 'red', position: 'relative'}} onMouseEnter={() => setHovered(true)}
                             onMouseLeave={() => setHovered(false)}>
                            {isHovered && <div style={{position: 'absolute', top: -20}}>
                                <button
                                    onClick={() => setEdited(!isBeingEdited)}>{!isBeingEdited ? 'Edit' : 'Cancel'}</button>
                            </div>}
                            <div>{'x: ' + position.x + ' y: ' + position.y}</div>
                            {children}
                        </div>
                        <button onClick={() => {
                            data.addElementData(id, position);
                        }}>Add Element</button>
                    </div>
                </Draggable>
            )}
        </ElementsContext.Consumer>
    )
}
