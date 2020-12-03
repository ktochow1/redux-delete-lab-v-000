import React from 'react'
import Band from './Band'

const Bands = props => {
    const renderBands = 
        props.bands.map((band) => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)

        return (
            // <div> {console.log(this.props.bands.bands)}</div>
            <div>{renderBands}</div>
        )
}

export default Bands