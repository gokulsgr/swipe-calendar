import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { chunk } from 'lodash';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';

import MonthGridStyled, { WeekRowStyled, DateCellStyled } from './MonthGrid.Styled';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const DateCell = ({ date }) => (
    <DateCellStyled>
        { moment(date).date()}
    </DateCellStyled>
);

const WeekRow = ({ weekRow }) => (
    <WeekRowStyled>
        {weekRow.map((date) => (
            <DateCell
                key={date}
                date={date}
            />
        ))}
    </WeekRowStyled>
);
const MonthGrid = (props) => {
    const { currentState: { date }, onClickLeft, onClickRight } = props;

    const [index, setIndex] = useState(0);
    const [swipeState] = useState({ date });

    useEffect(() => {
        setIndex(moment(date).diff(moment(swipeState.date), 'months'));
    }, [date]);

    const calcWeekArray = (tempDate) => {
        const startDate = moment(tempDate).clone();
        const monthArray = [];
        for (let i = 0; i < 42; i += 1) {
            monthArray.push(startDate.clone().add(i, 'day'));
        }
        return chunk(monthArray, 7);
    };

    const slideRenderer = (args) => {
        const { index: ind, key } = args;
        let tempDate = moment();
        if (ind < 0) {
            tempDate = moment(swipeState.date).clone().subtract(Math.abs(ind), 'month').startOf('month')
                .startOf('week');
        } else {
            tempDate = moment(swipeState.date).clone().add(Math.abs(ind), 'month').startOf('month')
                .startOf('week');
        }
        return (
            <MonthGridStyled key={key}>
                {calcWeekArray(tempDate).map((row, i) => (
                    <WeekRow key={`row-${i}`} weekRow={row} />
                ))}
            </MonthGridStyled>
        );
    };

    return (
        <VirtualizeSwipeableViews
            index={index}
            enableMouseEvents
            onChangeIndex={(i, indexLatest) => {
                if (i < indexLatest) {
                    onClickLeft();
                } else {
                    onClickRight();
                }
            }}
            slideRenderer={slideRenderer}
        />
    );
};

export default MonthGrid;
