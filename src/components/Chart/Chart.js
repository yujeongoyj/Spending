import React from 'react';
import ChartBar from './Chartbar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className='chart'>
        {props.dataPoints.map(dataPoints =>
            <ChartBar
                key={dataPoints.label}
                value={dataPoints.value}
                maxValue={totalMaximum}
                lebel={dataPoints.label} />)}
    </div>
};

export default Chart;