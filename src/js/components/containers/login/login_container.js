import { connect } from 'react-redux'
import { NOT_LOGGED, LOGGING } from '../../../actions/index'
import Container from '../../presentational/container/component'

const mapStateToProps = state => {
    console.log('mstp')
    console.log(state)
    switch (state.type) {
        case 'NOT_LOGGED':
            return {isVisible: true}
        case 'LOGGING':
            return {isVisible: false}
        default:
            return {isVisible: false}
    }
}

const mapDispatchToProps = dispatch => ({
    buttonClick: id => {
        console.log('mdtp')
        dispatch(logging(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
