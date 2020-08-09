import React from 'react';
import moment from 'moment';
import NavigationStyled from './Navigation.Styled';

const Navigation = (props) => {
    const { currentState: { date }, onClickLeft, onClickRight } = props;
    return (
        <NavigationStyled>
            <div
                onClick={() => onClickLeft()}
                role="presentation"
            >
                {'<'}
            </div>
            <span>{moment(date).format('MMMM yy')}</span>
            <div
                onClick={() => onClickRight()}
                role="presentation"
            >
                {'>'}
            </div>
        </NavigationStyled>
    );
};

export default Navigation;
