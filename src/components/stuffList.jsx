import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class stuffList extends Component {
  componentDidMount() {
    this.props.stuffActions.fetchStuff();
  }

  renderData(item){
    return <div key={item.id}>{item.name}</div>
  }

  render(){
    if(!this.props.stuff){
      return(
        <div>Loading Stuff...</div>
      )
    } else {
      return(
        <div className="stuff">
        {
          this.props.stuff.map((item, idx) => this.renderData(item) )
        }
        </div>
      )
    }
  }
}

stuffList.propTypes = {
  stuffActions: PropTypes.object,
  stuff: PropTypes.array
};

function mapStateToProps(state){
  return {
    stuff: state.stuff
  };
}

function mapDispatchToProps(dispatch){
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stuffList)
