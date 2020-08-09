import React from 'react';
import moment from 'moment';

import WeekDaysStyled from './WeekDays.Styled';

const WeekDays = () => (
    <WeekDaysStyled>
        {moment.weekdaysShort().map((day) => (
            <span key={day}>
                {day}
            </span>
        ))}
    </WeekDaysStyled>
);

export default WeekDays;
