export const FetchStateBox = ({rangeName, fetchTime}) => {
    const milliSecondsToSeconds = (ms) => {
        return ((ms % 60000) / 1000).toFixed(4);
    }

    return (
        <p>Fetched <strong>{rangeName}</strong> took <strong>{milliSecondsToSeconds(fetchTime)}</strong> seconds</p>
    )
};
