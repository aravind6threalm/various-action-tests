
//   const { Octokit } = require("@octokit/core");

// const octokit = new Octokit({
//   auth: ''
// });

// (async () => {
//   try {
//     const response = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows', {
//       owner: 'OWNER',
//       repo: 'REPO',
//       headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//       }
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// })();


import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: ''
});

(async () => {
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows', {
      owner: 'aravind6threalm',  // Replace with your GitHub username or organization
      repo: 'various-action-tests',    // Replace with your repository name
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
})();
