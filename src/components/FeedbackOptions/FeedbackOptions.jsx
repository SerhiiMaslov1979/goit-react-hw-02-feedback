
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    <div>
        {options.map((name, i) => {
            return (
                <button key={name + i} onClick={() => onLeaveFeedback(name)}>
                    {name}
                </button>
            )} )}
    </div>
}