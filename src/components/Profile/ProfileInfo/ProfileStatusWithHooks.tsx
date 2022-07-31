import React, {ChangeEvent, useEffect, useState} from 'react';

export type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status);

    useEffect(()=>{
       setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
       setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
                </div>
            }
        </div>
    );
};