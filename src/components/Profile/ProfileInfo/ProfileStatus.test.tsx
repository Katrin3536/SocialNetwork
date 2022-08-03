import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component',  () => {
    test('status from props should be in the state', () => {
        const mockCallback = jest.fn()
        const instance = create(<ProfileStatus status={'at home'} updateStatus={mockCallback}/>).root;
        expect(instance.props.status).toBe('at home');
        expect(mockCallback.mock.calls.length).toBe(0);
    });

    test('after creation span component should be displayed', async() => {
        const component = create(<ProfileStatus status={'at home'} updateStatus={() => {alert('hello')}}/>)
        const instance = component.root;
        let span = await instance.findByType('span')
        expect(span).not.toBeNull();
    });

    test('after creation span should contains correct status', async() => {
        const component = create(<ProfileStatus status={'at home'} updateStatus={() => {alert('hello')}}/>)
        const instance = component.root;
        let span = await instance.findByType('span')
        expect(span.children[0]).toEqual("at home");
    });

    test('input should be displayed instead of span', async() => {
        const component = create(<ProfileStatus status={'at home'} updateStatus={() => {alert('hello')}}/>)
        const instance = component.root;
        let span = await instance.findByType('span')
        span.props.onDoubleClick();
        let input = await instance.findByType('input')
        expect(input.props.value).toBe("at home");
    });
});