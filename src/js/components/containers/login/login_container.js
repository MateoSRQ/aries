import { connect } from 'react-redux'
import { NOT_LOGGED, LOGGING } from '../../../constants/action-types'
import { notLogged, logging} from "../../../actions/index";
import Container from '../../presentational/container/component'

const mapStateToProps = state => {
    console.log('mstp')
    console.log(state)
    switch (state.status) {
        case 'NOT_LOGGED':
            console.log('_NOI LOGGED')
            return {visible: true}
        case 'LOGGING':
            console.log('_LOGGING')
            return {visible: false}

    }
}

const mapDispatchToProps = dispatch => ({
    logging: id => {
        console.log('mdtp')
        dispatch(logging(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
