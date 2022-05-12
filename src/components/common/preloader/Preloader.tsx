import preloader from '../../../assets/images/loading-2.gif';
import React from 'react';

export const Preloader=()=> {
    return <div>
        <img style={{width: '190px', height: '100px'}} src={preloader}/>
    </div>
}