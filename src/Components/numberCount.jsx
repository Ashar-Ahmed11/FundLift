import React from 'react'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const NumberCounter = ({ count }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,   // only count once
        threshold: 0.5,      // fire when 50% visible
    });

    return (
        <div ref={ref}>
            {inView && <CountUp end={count} delay={0} duration={5} suffix="+" />}
        </div>
    );
}

export default NumberCounter;
