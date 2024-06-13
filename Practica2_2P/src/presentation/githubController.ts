import { Request, Response } from 'express';
import { getGitHubRepos } from '../infrastructure/githubService';

export const getRepos = async (req: Request, res: Response) => {
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      return res.status(500).json({ error: 'GitHub token is not set' });
    }

    const repos = await getGitHubRepos(token);
    return res.status(200).json(repos);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
