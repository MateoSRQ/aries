import { connect } from 'react-redux'
import { NOT_LOGGED, LOGGING } from '../../../actions/index'
import Form  from '../../presentational/form/component'

const mapStateToProps = state => {
    return {}
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
)(Form)
