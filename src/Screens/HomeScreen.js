import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';
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
    const {container, roundButton, textGeneralPadding, detailsText} = style;
    return (
      <View style={container}>
        <FlatList
          data={this.props.jobs}
          onRefresh={this.getAllJobs}
          onEndReached={this.getAllJobs}
          refreshing={this.props.fetching}
          renderItem={({item}) => (
            <Card title={item.title}>
              <Text style={textGeneralPadding}>Company: {item.company}</Text>
              <Text style={textGeneralPadding}>Phone: {item.phone}</Text>
              <Text style={detailsText}>{item.details}</Text>
            </Card>
          )}
          keyExtractor={({_id}) => _id}
        />
        <TouchableOpacity
          style={roundButton}
          onPress={() => NavigationService.navigate('CreateJob')}>
          <Icon name="add" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
  roundButton: {
    backgroundColor: '#326da8',
    position: 'absolute',
    bottom: '6%',
    right: '8%',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
  },
  textGeneralPadding: {paddingVertical: 5},
  detailsText: {
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10,
  },
});

const mapStateToProps = (state) => ({
  jobs: state.home.jobs,
  fetching: state.home.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getAllJobs: () => dispatch(getAllJobsRequest()),
  postJob: (payload) => dispatch(createJobRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
