import React, { useState } from 'react';
import moment from 'moment';

import Navigation from './components/Navigation';
import WeekDays from './components/WeekDays';
import MonthGrid from './components/MonthGrid';

import CalendarStyled from './Calendar.Styled';

const Calendar = () => {
    const [currentState, setCurrentState] = useState({
        date: moment(),
    });

    const onClickLeft = () => {
        setCurrentState({
            date: moment(currentState.date).subtract(1, 'month'),
        });
    };

    const onClickRight = () => {
        setCurrentState({
            date: moment(currentState.date).add(1, 'month'),
        });
    };

    return (
        <CalendarStyled>
            <Navigation
                currentState={currentState}
                onClickLeft={onClickLeft}
                onClickRight={onClickRight}
            />
            <WeekDays
                currentState={currentState}
                onClickLeft={onClickLeft}
                onClickRight={onClickRight}
            />
            <MonthGrid
                currentState={currentState}
                onClickLeft={onClickLeft}
                onClickRight={onClickRight}
            />
        </CalendarStyled>
    );
};

export default Calendar;
