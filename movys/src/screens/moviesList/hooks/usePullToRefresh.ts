import React, {useState, useCallback} from 'react';
import {RefreshControl, ScrollView} from 'react-native';

interface PullToRefreshProps {
  onRefreshFunc: () => void;
}

const usePullToRefresh = ({onRefreshFunc}: PullToRefreshProps) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshHandler = useCallback(async () => {
    setRefreshing(true);
    await onRefreshFunc();
    setRefreshing(false);
  }, [onRefreshFunc]);

  return {refreshing, onRefreshHandler};
};

export default usePullToRefresh;
