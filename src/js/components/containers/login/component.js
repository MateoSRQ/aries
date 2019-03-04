import { connect } from 'react-redux'
import { NOT_LOGGED, LOGGING } from '../../../actions/index'
import Container from '../../presentational/container/component'
// import Form  from '../../presentational/form/component'

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
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
