import React from 'react'
import { Bar } from 'react-chartjs-2'

function LineChart() {
    const data = {
        // type: 'Doughnut',
        labels: [
            'jan', 'feb', 'Mar', 'Apr', 'May', 'jun'],
        datasets: [
            {
                // label: 'sales for 2020(M)',
                data: [3, 2, 2, 8, 5, 4],
                backgroundColor: ['rgba(255,99,132,1)',
                    'rgba(255,205,86,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,159,64,1)',
                    'rgba(153,102,255,1)',
                    'rgba(200,0,255,1)'
                ],
                // hoverBackgroundColor: [


                // ],
                hoverOffset: 20,

            },

        ]
    }

    const options = {
        showLines: true,


    }
    return <Bar data={data} options={options} />



}
export default LineChart