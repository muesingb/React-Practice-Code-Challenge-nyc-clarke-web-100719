import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
    
    return (
      <Fragment>
        <div className="belt">
          {props.sushi.map(sushi => <Sushi key={sushi.id} {...sushi} moneyLeft={props.moneyLeft} ateSushi={props.ateSushi} />)}
          <MoreButton handleNextSushi={props.handleNextSushi} />
        </div>
      </Fragment>
    )
}

export default SushiContainer