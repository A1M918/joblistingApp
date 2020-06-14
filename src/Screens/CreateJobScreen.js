import React, {Component} from 'react';
import {ScrollView, ActivityIndicator, View} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';

import {connect} from 'react-redux';
import {createJobRequest} from '../store/actions/home.actions';
class CreateJobScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  postJob = () => {
    if (!this.props.submitting) {
      this.props.postJob(this.state);
    }
  };

  handleChange = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    console.log('Render ====>');
    return (
      <View style={{flex: 1, padding: 15}}>
        <ScrollView style={{flex: 1}}>
          <Input placeholder="Job Title" />
          <Input placeholder="Company Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Details" />
          <Button
            title="Post Job"
            style={{marginTop: 20, marginHorizontal: 15}}
            onPress={() => alert('Hello')}>
            {this.props.submitting ? (
              <ActivityIndicator />
            ) : (
              <Text> Post Job </Text>
            )}
          </Button>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  submitting: state.home.isSubmitting,
});
const mapDispatchToProps = (dispatch) => ({
  postJob: (payload) => dispatch(createJobRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobScreen);
