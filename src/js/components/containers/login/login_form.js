import { connect } from 'react-redux'
import Form  from '../../presentational/form/component'
import { notLogged, logging} from "../../../actions/index";

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
