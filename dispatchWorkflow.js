// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "@octokit/core";
const octokit = new Octokit({
    auth: ''
  })
  
  await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
    owner: 'aravind6threalm',  // Replace with your GitHub username or organization
    repo: 'various-action-tests', 
    workflow_id: 'dispatchApi.yml',
    ref: 'main',
    inputs: {
      name: 'Mona the Octocat',
      home: 'San Francisco, CA'
    },
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
