    import React, { useEffect, useState } from "react";
    import "./ImpactStats.css";

    const statsData = [
    { label: "Installations Completed", value: 500, suffix: "+" },
    { label: "Megawatts Deployed", value: 10, suffix: "MW+" },
    { label: "System Uptime", value: 99.9, suffix: "%" },
    { label: "Technical Support Availability", value: 24, suffix: "/7" }
    ];

    const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1800;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
            setCount(value);
            clearInterval(timer);
        } else {
            setCount(start);
        }
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <span className="stat-number">
        {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
        {suffix}
        </span>
    );
    };

    const ImpactStats = () => {
    return (
        <section className="impact-section">
        <div className="impact-container">
            <h2 className="impact-title">Our Impact in Numbers</h2>
            <p className="impact-subtitle">
            Measurable results that reflect our commitment to reliable,
            sustainable, and future-ready energy solutions.
            </p>

            <div className="impact-grid">
            {statsData.map((stat, index) => (
                <div className="impact-card" key={index}>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="stat-label">{stat.label}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default ImpactStats;
