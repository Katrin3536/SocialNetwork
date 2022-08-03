import React from 'react';

type ComponentsPropsType={}
export const withSuspense = (Component:React.FC) => {
    return (props:ComponentsPropsType)=>{
       return <React.Suspense fallback={<div>Loading...</div>}><Component {...props}/></React.Suspense>
    }
}