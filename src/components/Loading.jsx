import React from 'react';
import "../style/loading.css";
import ClockLoader from "react-spinners/ClockLoader";

const Loading = ({ loading }) => {
    return (
        <div className='loading__main'>
            <ClockLoader
                color={"#7FC0FC"}
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading