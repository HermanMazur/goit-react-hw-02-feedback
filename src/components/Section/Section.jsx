import PropTypes from 'prop-types';
import { Container } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <>
            <Container>
                <h1>{title}</h1>
                {children}
        </Container>
        </>
    )
}

Section.protoType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}