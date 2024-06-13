import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/user/repos';

export const getGitHubRepos = async (token: string) => {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching GitHub repositories: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while fetching GitHub repositories');
    }
  }
};
