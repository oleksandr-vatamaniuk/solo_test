export const CurrentStateBox = ({currentState = 'Ready', currentRequest = 0, totalRequests = 0}) => {
    return(
        <div>
            <h3>Current State:</h3><strong>{currentState}</strong>
            <br/>
            {currentRequest !== 0 && totalRequests !==0 &&
                <div>
                    <span>{currentRequest}</span> / <span>{totalRequests}</span> requests
                </div>
            }
        </div>
    )
}
