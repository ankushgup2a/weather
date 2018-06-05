import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

function max(data) {
    return _.round(_.max(data));
}

function min(data) {
    return _.round(_.min(data));
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div className="minmaxDiv" >उच्च: {max(props.data)} {props.units}  औसत: {average(props.data)} {props.units} न्यूनतम: {min(props.data)} {props.units}</div>
        </div>
    );
}