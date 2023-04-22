export const Statistics = ({ good, neutral, bad, total, positivaPercentage }) => {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>PositivaPercentage: {positivaPercentage}</p>
        </div>
    );

    
};