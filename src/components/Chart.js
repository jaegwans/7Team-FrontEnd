import React, { PureComponent } from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts';

export default class Chart extends PureComponent {
    render() {
        const data = [
            {
                subject: '과제량',
                A: this.props.data.assignment,
                B: 100,
                fullMark: 100,
            },
            {
                subject: '친절도',
                A: this.props.data.kindness,
                B: 100,
                fullMark: 100,
            },
            {
                subject: '강의력',
                A: this.props.data.teaching,
                B: 100,
                fullMark: 100,
            },
            {
                subject: '온도',
                A: this.props.data.temperature,
                B: 100,
                fullMark: 100,
            },
            {
                subject: '인간성',
                A: this.props.data.humanity,
                B: 100,
                fullMark: 100,
            },
            {
                subject: '감수성',
                A: this.props.data.sensibility,
                B: 100,
                fullMark: 100,
            },
        ];
        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                        name="Mike"
                        dataKey="A"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Radar
                        name="anwser"
                        dataKey="B"
                        stroke="rgba(0, 0, 0, 0)"
                        fill="rgba(0, 0, 0, 0)"
                        fillOpacity={0}
                    />
                </RadarChart>
            </ResponsiveContainer>
        );
    }
}
