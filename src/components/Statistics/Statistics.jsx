import ProtoTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <>
        <List>
            <li>
                <p>Good:{good}</p>
            </li>
            <li>
                <p>Neutral:{neutral}</p>
            </li>
            <li>
                <p>Bad:{bad}</p>
            </li>
            <li>
                <p>Total:{total}</p>
            </li>
            <li>
                <p>Positive feedback: {positivePercentage}%</p>
            </li>
        </List>
        </>
    )
}

Statistics.prototype = {
    good: ProtoTypes.number.isRequired,
    neutral: ProtoTypes.number.isRequired,
    bad: ProtoTypes.number.isRequired,
    total: ProtoTypes.number.isRequired,
    positivePercentage: ProtoTypes.number.isRequired,
}