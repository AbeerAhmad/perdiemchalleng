import {ActivityIndicator, FlatList} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {Post} from '../Post/Post';
import {fetchTodos} from '../../slice/homeAction';
import {useEffect} from 'react';
export const PostList = () => {
  const {posts, loading} = useAppSelector(state => state.homeSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <FlatList
          data={posts}
          renderItem={({item, index}) => {
            return <Post {...item} key={index} />;
          }}
        />
      )}
    </>
  );
};
