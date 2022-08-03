import React, {useEffect, useState} from 'react';
import s from './Pagination.module.css';
import cn from 'classnames';

export type PaginationPropsType = {
    onPageChanged: (p: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    portionSize:number
}

export const Pagination: React.FC<PaginationPropsType> = ({
                                                              totalUsersCount,
                                                              pageSize,
                                                              currentPage,
                                                              onPageChanged,
                                                              portionSize
                                                          }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1);
            }}>PREV</button>}
            {}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span
                        className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                        key={p}
                        onClick={(e) => onPageChanged(p)
                        }>{p}</span>;
                })}
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1);
            }}>NEXT</button>}
        </div>
    );
};