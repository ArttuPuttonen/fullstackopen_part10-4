import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryItem from '../../components/RepositoryItem';

describe('RepositoryItem', () => {
  it('renders repository information correctly', () => {
    const repository = {
      id: 'jaredpalmer.formik',
      fullName: 'jaredpalmer/formik',
      description: 'Build forms in React, without the tears',
      language: 'TypeScript',
      forksCount: 1619,
      stargazersCount: 21856,
      ratingAverage: 88,
      reviewCount: 3,
      ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    };

    const { getByTestId } = render(<RepositoryItem item={repository} />);

    expect(getByTestId('fullName')).toHaveTextContent('jaredpalmer/formik');
    expect(getByTestId('description')).toHaveTextContent('Build forms in React, without the tears');
    expect(getByTestId('language')).toHaveTextContent('TypeScript');
    expect(getByTestId('stargazersCount')).toHaveTextContent('21.9k'); // 21856 formatted as 21.9k
    expect(getByTestId('forksCount')).toHaveTextContent('1.6k'); // 1619 formatted as 1.6k
    expect(getByTestId('reviewCount')).toHaveTextContent('3');
    expect(getByTestId('ratingAverage')).toHaveTextContent('88');
  });
});
