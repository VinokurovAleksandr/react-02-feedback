import React from 'react';
import style from '../Staticsics/Statistics.module.css';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    FeedbackPercentage
}) => {
    return (
        <div>
            <ul>
                <li className={style.feedback_value}>Good: {good} </li>
                <li className={style.feedback_value}>Neutral: {neutral}</li>
                <li className={style.feedback_value}>Bad: {bad}</li>
                <li className={style.feedback_value}>Total: {total} </li>
                <li className={style.feedback_value}>Positive feedback: {FeedbackPercentage} %</li>
            </ul>
        </div>
    )
};

export default Statistics;