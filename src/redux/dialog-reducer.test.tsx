import DialogReducer, {DialogActionType, DialogPageType, sendMessageActionCreator} from './dialog-reducer';
import girl from '../assets/images/girlImage.jpg';
import boy from '../assets/images/boyImage.png';

test('message was send success', () => {
    let state: DialogPageType = {
        dialogs: [
            {
                id: 1,
                name: 'Masha',
                ava: girl
            },
            {
                id: 2,
                name: 'Yulia',
                ava: girl
            },
            {
                id: 3,
                name: 'Katya',
                ava: girl
            },
            {
                id: 4,
                name: 'Andrew',
                ava: boy
            },
            {
                id: 5,
                name: 'Pavel',
                ava: boy
            },
            {
                id: 6,
                name: 'Sergey',
                ava: boy
            },
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Are you ok?'},
        ],
    };
    let action: DialogActionType = sendMessageActionCreator('it is the real treasure house');
    let newState = DialogReducer(state, action);

    expect(newState.messages.length).toBe(4);
});