import  * as actions from '../actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {RequestButton} from '../components';

export function mapDispatchToProps (dispatch: Dispatch<actions.GetPostsRequest>) {
    return {onClick: () => dispatch({ type: "GET_POSTS_REQUEST" })};
}

export default connect(null, mapDispatchToProps)(RequestButton);