import styled from 'styled-components';

const MonthGridStyled = styled.div`
    user-select: none;
`;

const WeekRowStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    margin-bottom: 10px;
`;

const DateCellStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export default MonthGridStyled;

export { WeekRowStyled, DateCellStyled };
