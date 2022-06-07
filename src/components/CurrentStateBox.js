export const StateBox = ({currentState = 'Ready', currentRequest = 0, totalRequests = 0}) => {
    return(
        <div>
            <h3>Current State:</h3>
            <span><strong>{currentState}</strong></span>
            <br/>
            {currentRequest !== 0 && totalRequests !==0 &&
                <div>
                    <span>{currentRequest}</span> / <span>{totalRequests}</span> requests...
                </div>
            }
        </div>
    )
}
