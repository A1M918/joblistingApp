import React, {Component} from 'react';
import {ScrollView, ActivityIndicator, View, StyleSheet} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';

import {connect} from 'react-redux';
import {createJobRequest} from '../store/actions/home.actions';
class CreateJobScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  postJob = () => {
    console.log('THIS IS JOB DATA ===> ', this.state);
    // if (!this.props.submitting) {
      this.props.postJob(this.state);
    // }
  };

  handleChange = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    const {submitButton, container} = style;
    return (
      <View style={container}>
        <ScrollView style={{flex: 1}}>
          <Input
            placeholder="Job Title"
            onChangeText={(title) => this.handleChange({title})}
          />
          <Input
            placeholder="Company Name"
            onChangeText={(company) => this.handleChange({company})}
          />
          <Input
            placeholder="Phone"
            onChangeText={(phone) => this.handleChange({phone})}
          />
          <Input
            placeholder="Details"
            onChangeText={(details) => this.handleChange({details})}
          />
          <Button
            title="Post Job"
            style={submitButton}
            onPress={() => this.postJob()}>
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

const style = StyleSheet.create({
  container: {flex: 1, padding: 15},
  submitButton: {marginTop: 20, marginHorizontal: 15},
});

const mapStateToProps = (state) => ({
  submitting: state.home.isSubmitting,
});
const mapDispatchToProps = (dispatch) => ({
  postJob: (payload) => dispatch(createJobRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobScreen);
