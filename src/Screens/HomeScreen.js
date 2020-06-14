import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, View, TouchableOpacity} from 'react-native';
import {Card, Text, Icon} from 'react-native-elements';

import {
  getAllJobsRequest,
  createJobRequest,
} from '../store/actions/home.actions';
import * as NavigationService from '../NavigationService/NavigationService';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs,
    };
  }

  getAllJobs = () => {
    this.props.getAllJobs();
  };

  componentDidMount() {
    this.getAllJobs();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.jobs}
          onRefresh={this.getAllJobs}
          onEndReached={this.getAllJobs}
          refreshing={this.props.fetching}
          renderItem={({item}) => (
            <Card title={item.title}>
              <Text style={{paddingVertical: 5}}>Company: {item.company}</Text>
              <Text style={{paddingVertical: 5}}>Phone: {item.phone}</Text>
              <Text
                style={{
                  borderTopWidth: 1,
                  marginTop: 10,
                  paddingTop: 10,
                }}>
                {item.details}
              </Text>
            </Card>
          )}
          keyExtractor={({_id}) => _id}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#326da8',
            position: 'absolute',
            bottom: '8%',
            right: '8%',
            width: 80,
            height: 80,
            borderRadius: 40,
          }}
          onPress={() => NavigationService.navigate('CreateJob')}>
          {/* <Fab style={{backgroundColor: '#5067FF'}} position="bottomRight"> */}
          <Icon name="add" />
          {/* </Fab> */}
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.home.jobs,
  fetching: state.home.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getAllJobs: () => dispatch(getAllJobsRequest()),
  postJob: (payload) => dispatch(createJobRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
