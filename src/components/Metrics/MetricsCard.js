import React from 'react'
import {Link} from 'react-router-dom'

function MetricsCard(props) {
    return (
        <div>
            <div className= {`metrics-box ${props.metricClass}`}>
                <Link to = {`/${props.linkTo}`} style={{ textDecoration: 'none' }}>
                    <div className="all-metrics-box-background">
                        <div className= {`all-metrics-box ${props.metricType}`}>
                            <h1 className ={props.title}>{props.cardType}</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MetricsCard






