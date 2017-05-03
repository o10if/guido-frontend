import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    width: 80,
  },
  tabs: {
    height: 55,
    flexDirection: 'row',
    paddingTop: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor: 'rgb(255,255,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabView: {
    flex: 1,
    padding: 10,
    paddingTop: 5,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
});
