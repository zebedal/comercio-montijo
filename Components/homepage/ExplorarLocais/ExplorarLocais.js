import { useState, Fragment } from "react"
import ExplorarHeader from './ExplorarHeader'
import ExplorarContent from './ExplorarContent'
import {categorias} from '../../../public/data/explorar'

const ExplorarLocais = (props) => {

    const [filter, setFilter] = useState('Todas')

    return (
        <Fragment>
            <ExplorarHeader />
            <ExplorarContent data={categorias} />
        </Fragment>
    )
}

export default ExplorarLocais