import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const _ = require('lodash');

export const Chart = () => {
    const [inputData, setInputData] = useState([])
    const [ready, setReady] = useState(false)

    const [data, setData] = useState([])

    const [statistics, setStatistics] = useState([])

    const fetchData = () => {
        let data = [];
        fetch(process.env.REACT_APP_TRAININGS_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        }).then(responseData => {
            responseData.map(item =>
                data.push(
                    {
                        activity: item.activity,
                        duration: item.duration,
                    }
                )
            )
            setInputData(data)
            setReady(true)
        }).catch(err => console.error(err))
    }

    // format the training data
    if (ready) {
        let groupedData = []
        let chartData = []

        setStatistics({ statistics: inputData })
        groupedData = _.mapValues(_.groupBy(statistics.statistics, 'activity'), v => _.sumBy(v, 'duration'))
        const makeArray = Object.entries(groupedData)
        makeArray.map(item =>
            chartData.push({
                activity: item[0],
                duration: item[1]
            })
        )
        setData(chartData)
        setReady(false)
    }

    //get the training data
    useEffect(() => {

        fetchData();

    }, [])

    return (
        <div className="colFlex flexJCC flexAC">
            <h3 className="chart__header">
                Duration (in minutes) of all activities completed
            </h3>
            <BarChart
                width={500}
                height={300}
                data={data}
            >
                <XAxis dataKey="activity" />
                <YAxis />
                <Tooltip />
                <Bar dataKey='duration' fill="#8884d8" />
            </BarChart>
        </div>


    )

}


