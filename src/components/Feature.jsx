import React from 'react'
import Featurebox from './Featurebox'

import fimg1 from '../img/1.svg'
import fimg2 from '../img/2.svg'
import fimg3 from '../img/3.svg'
import fimg4 from '../img/4.svg'

function Feature() {
    return (
        <div className="a-container" id="feature">
            <Featurebox img={fimg1} title="WeightLifting"/>
            <Featurebox img={fimg2} title="Specific Muscle"/>
            <Featurebox img={fimg3} title="Flex your muscle"/>
            <Featurebox img={fimg4} title="Cardio Exercise"/>
        </div>
    )
}

export default Feature
