import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(option => {
                return (
                    <Button
                        key={option}
                        type="button"
                        onClick={() => onLeaveFeedback(option)}
                    >
                        {option}
                    </Button>
                );
            })}
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func,
};
