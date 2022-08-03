import React from 'react';
import {create} from 'react-test-renderer';
import {Pagination} from './Pagination';

describe('Paginator component tests', () => {
    test('pages count is 11 but should be showed only 10', async () => {
        const component = create(<Pagination totalUsersCount={11} pageSize={1} portionSize={10} currentPage={2} onPageChanged={()=>alert('hi')}/>)
        const root = component.root;
        let spans = await root.findAllByType('span');
        expect(spans.length).toBe(10);
    });

    test('if pages count is more than 10 button NEXT should be present', async () => {
        const component = create(<Pagination totalUsersCount={11} pageSize={1} portionSize={10} currentPage={2} onPageChanged={()=>alert('hi')}/>)
        const root = component.root;
        let button = await root.findAllByType('button');
        expect(button.length).toBe(1);
    });
})