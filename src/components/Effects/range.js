function maxRangeEffect(){
    const maxFetchedRange = useRef({prevMin: 0, prevMax: 0})

    const isRangeMax = (min, max) => {
        const {prevMin, prevMax} = maxFetchedRange.current;

        if(prevMin === 0 && prevMax === 0) {
            maxFetchedRange.current = {prevMin: min, prevMax};
            return true;
        }

        console.log(min, prevMin, between(min, prevMin, prevMax));
        console.log(max, prevMax, between(max, prevMin, prevMax));
        console.log('----');

        return (between(min, prevMin, prevMax) && between(max, prevMin, prevMax));
    };

    const setMaxFetchedRage = (min, max) => {
        if(!isRangeMax(min, max)){
            maxFetchedRange.current = {
                prevMin: min,
                prevMax: max
            };
            console.log('set max', min, max);
        }
    }

    return [{}, setMaxFetchedRage()]
}

function between(x, min, max) {
    return x >= min && x <= max;
}

