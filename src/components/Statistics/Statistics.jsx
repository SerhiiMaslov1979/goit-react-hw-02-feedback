// import PropTypes from 'prop-types';
export const Statistics = ({ options, total, positivePercentage }) => {
    console.log(options);
    const { good, neutral, bad } = options;
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>PositivaPercentage: {positivePercentage}%</p>
        </div>
    );

    
};


