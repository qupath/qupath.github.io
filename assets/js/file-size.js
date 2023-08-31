// Possible solution to fetching the filesizes for the download
const owner = "owner";
const repoName = "repo_name";
const filePath = "path/to/file.txt";

const url = `https://api.github.com/repos/${owner}/${repoName}/contents/${filePath}`;

fetch(url)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Unable to fetch file information");
    }
  })
  .then(jsonData => {
    const fileSize = jsonData.size;
    console.log(`File size: ${fileSize} bytes`);
  })
  .catch(error => {
    console.error(error.message);
  });
