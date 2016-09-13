import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  ActivityIndicator,
  Linking,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Attachment from './Attachment';
import Title from '../../components/Title';
import Padding from '../../components/Padding';
import ToolBar from '../../components/ToolBar';
import { fetchItemDetail } from './actions/itemDetail';
import styles from './styles';


class Detail extends Component {
  static propTypes = {
    courseId: PropTypes.string,
    itemId: PropTypes.string,
    itemType: PropTypes.string,
    itemsById: PropTypes.object,
    loading: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      closeIcon: null,
    };
  }
  componentWillMount() {
    Icon.getImageSource('close', 20, 'red').then((source) => {
      this.setState({ closeIcon: source });
    });
  }
  componentDidMount() {
    const { courseId, itemId, itemType, dispatch } = this.props;
    dispatch(fetchItemDetail(courseId, itemType, itemId));
  }
  itemTitles = {
    announcement: '公告',
    material: '教材',
    assignment: '作業',
  };
  handleListPress = (url) => {
    Linking.openURL(url);
  };
  renderAttachments = () => {
    const { itemId, itemType, itemsById, loading } = this.props;
    const item = itemsById[itemType][itemId] || {};
    const attachments = item.attachments || [];
    if (attachments.length === 0) {
      return null;
    }
    if (loading) {
      return (
        <View style={styles.attachmentList}>
          <ActivityIndicator color="#388e3c" size="large" />
        </View>
      );
    }
    const attachmentList = attachments.map((attachment, i) => (
      <Attachment key={i} attachment={attachment} />
    ));
    return (
      <View>
        <Text style={styles.attachmentHeader}>附檔</Text>
        <View style={styles.attachmentList}>
          {attachmentList}
        </View>
      </View>
    );
  };
  renderInfo = () => {
    const { itemId, itemType, itemsById, loading } = this.props;
    const item = itemsById[itemType][itemId] || {};
    if (loading) {
      return (
        <View style={styles.detailInfo}>
          <ActivityIndicator color="#388e3c" size="large" />
        </View>
      );
    }
    return <Title title={item.title} subtitle={item.dateStr} />;
  };
  renderDetail = () => {
    const { itemId, itemType, itemsById, loading } = this.props;
    const item = itemsById[itemType][itemId] || {};
    if (loading) {
      return (
        <View style={styles.detailContent}>
          <ActivityIndicator color="#388e3c" size="large" />
        </View>
      );
    }
    return (
      <View style={styles.detailContent}>
        <HTMLView
          value={item.content}
          onLinkPress={this.handleListPress}
        />
      </View>
    );
  };
  render() {
    const { itemType } = this.props;
    return (
      <View style={styles.base}>
        <StatusBar barStyle="light-content" backgroundColor="#388e3c" />
        <ToolBar
          title={this.itemTitles[itemType]}
          androidIcon="close"
          statusbarColor="#388e3c"
          iosIcon={this.state.closeIcon}
          style={{ backgroundColor: '#4caf50' }}
          onClicked={Actions.pop}
        />
        <Padding backgroundColor="#4caf50" />
        {this.renderInfo()}
        <ScrollView>
          <View style={styles.detailContainer}>
            {this.renderDetail()}
            {this.renderAttachments()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  itemsById: state.course.itemsById,
  loading: state.course.loading.detail,
});

export default connect(mapStateToProps)(Detail);

