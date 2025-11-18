import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale,
    Filler 
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { ScaleLoader } from "react-spinners";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale,
    Filler
);

const COIN_URL = import.meta.env.VITE_COIN_API_URL;

const CoinChart = ({ coinID }) => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const res = await fetch(`${COIN_URL}/${coinID}/market_chart?vs_currency=usd&days=7`);
                const data = await res.json();
                const prices = data.prices.map(price => ({
                    x: price[0],
                    y: price[1]
                }));
                setChartData({
                    datasets: [{
                        label: 'Price (USD)',
                        data: prices,
                        fill: true,
                        borderColor: '#007bff',
                        backgroundColor: 'rgba(0,123,255,0.1)',
                        pointRadius: 0,
                        tension: 0.3
                    }]
                });
                setLoading(false);
            } catch (err) {
                console.error("Error fetching chart data:", err);
                setLoading(false);
            }
        };

        fetchPrices();
    }, [coinID]);

    return (
        <>
            {loading && <p><ScaleLoader /></p>}
            {chartData && !loading && (
                <>
                <h2 id="price-heading">{coinID.toUpperCase()} Price Chart (7d)</h2>
                <Line 
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: { display: false },
                            tooltip: { mode: 'index', intersect: false }
                        },
                        scales: {
                            x: {
                                type: 'time',
                                time: { unit: 'day' },
                                ticks: { autoSkip: true, maxTickLimit: 7 }
                            },
                            y: {
                                ticks: { callback: value => `$${value.toLocaleString()}` }
                            }
                        }
                    }}
                />
                </>
            )}
        </>
    );
};

export default CoinChart;
