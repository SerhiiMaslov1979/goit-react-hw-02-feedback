// import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(onLeaveFeedback);
    return (
         <div>
        {options.map((option) => {
            return (
                <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            )
        })}
        
    </div>
    )
   
}