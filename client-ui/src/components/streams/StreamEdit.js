import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchStream,editStream} from '../../actions'
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onsubmit = formValues => {
        this.props.editStream(this.props.match.params.id,formValues);
    }

    render(){
        return (
            <div>
                <h3>Edit a stream</h3>
                <StreamForm onSubmit={this.onsubmit} initialValues={_.pick(this.props.stream,'title','description')}/>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);