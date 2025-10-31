    import React, { useEffect, useState } from "react";

    const AnimatedStats = () => {
    const stats = [
        { label: "Homes Powered", value: 800 },
        { label: "Renewable Energy", value: 100 },
        { label: "Years Experience", value: 15 },
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const duration = 2000; // animation duration in ms
        const intervalTime = 30; // update every 30ms

        const intervals = stats.map((stat, idx) => {
        const increment = Math.ceil(stat.value / (duration / intervalTime));
        return setInterval(() => {
            setCounts((prev) => {
            const newCounts = [...prev];
            if (newCounts[idx] < stat.value) {
                newCounts[idx] = Math.min(newCounts[idx] + increment, stat.value);
            }
            return newCounts;
            });
        }, intervalTime);
        });

        return () => intervals.forEach((i) => clearInterval(i));
    }, []);

    return (
        <div className="stats flex gap-6 justify-center flex-wrap mt-8">
        {stats.map((stat, idx) => (
            <div key={idx} className="stat text-center min-w-[120px]">
            <h3 className="text-3xl font-bold text-green-600">
                {counts[idx]}{stat.label === "Homes Powered" && "+"}
            </h3>
            <p className="text-gray-700">{stat.label}</p>
            </div>
        ))}
        </div>
    );
    };

    export default AnimatedStats;
