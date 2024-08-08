import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (data) {
    console.log(JSON.stringify(data, null, 2));
  }

  const repositories = data ? data.repositories : null;

  return { repositories, loading, error, refetch };
};

export default useRepositories;
