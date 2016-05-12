import React from 'react';

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="red"/>
            </Sparklines>
        </div>
    );
}
