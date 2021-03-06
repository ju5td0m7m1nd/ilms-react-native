import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  toolbar: {
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
  listItem: {
    flexDirection: 'row',
    height: 96,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  listItemInfo: {
    width: 96,
    padding: 16,
    alignItems: 'center',
  },
  listItemYear: {
    fontSize: 12,
    fontWeight: '100',
  },
  listItemDay: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listItemContent: {
    flex: 1,
    padding: 16,
  },
  listItemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  listItemSubtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  detailLoading: {
    height: 100,
    margin: 8,
    backgroundColor: 'white',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContent: {
    margin: 8,
    minHeight: 150,
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
  attachmentHeader: {
    paddingLeft: 16,
    margin: 8,
    marginTop: 24,
    fontWeight: 'bold',
  },
  attachmentList: {
    margin: 8,
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
  attachment: {
    padding: 16,
    flexDirection: 'row',
  },
  attachmentName: {
    paddingLeft: 16,
  },
  scoreListHeader: {
    padding: 16,
    backgroundColor: '#ffc107',
    flexDirection: 'row',
    elevation: 3,
  },
  scoreList: {
    flex: 1,
    margin: 8,
    elevation: 2,
  },
  scoreName: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
  },
  scorePercent: {
    width: 48,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  score: {
    width: 48,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
  },

});

export default styles;

