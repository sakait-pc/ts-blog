import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeExternalLinks from 'rehype-external-links'
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'posts')
const EXTENSION = '.md'

const getFilePaths = (fp) => {
  const filePath = fp.slice(0, -EXTENSION.length).split(postsDirectory + path.sep);
  const filePaths = filePath[1].split(path.sep);
  return filePaths;
};

const getAllPaths = (postsDirectory) => {
  const fileNames = [];

  const recurseAllPaths = (dirPath) => {
    const allDirents = fs.readdirSync(dirPath, {withFileTypes: true});
    const filePaths = allDirents.map((dirent) => path.join(dirPath, dirent.name));
    for (const fp of filePaths) {
      if (fs.statSync(fp).isDirectory()) {
        recurseAllPaths(fp);
      } else {
        fileNames.push(getFilePaths(fp));
      }
    }
  }
  recurseAllPaths(postsDirectory);
  return fileNames;
};

export function getAllPostIds() {
  // Returns an array that looks like this:
  // [
  //   ['some', 'deep', 'path'],
  //   ['some', 'path', 'to', 'file'],
  //   ['ssg-ssr'],
  //   ['pre-rendering']
  // ]
  return getAllPaths(postsDirectory)
}

export function getSortedPostsData() {
  const fileNames = getAllPaths(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.join('/')
    // Read markdown file as string
    const fileNamePath = id + EXTENSION
    const fullPath = path.join(postsDirectory, fileNamePath)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}

// TODO: to show the latest post
// export const latestPostSlug = getSortedPostsData()[0].id

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}${EXTENSION}`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContents)
  const processedContent = await unified()
    .use(remarkParse)
    .use(remark2rehype)
    .use(rehypeExternalLinks, {target: ['_blank'], rel: ['noopener', 'nofollow']})
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.value;

  return {
    slug,
    contentHtml,
    ...matterResult.data
  }
}