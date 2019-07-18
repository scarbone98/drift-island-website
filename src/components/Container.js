import React, {useHooks} from 'react';
import './container.css';
function Container({children}) {
    return (
        <div className="container-outer">
            <div className="container-inner">
                {children}
            </div>
        </div>
    )
}

export default Container;
