import React, {useState} from 'react';
import {blogPosts} from './mock-data/blogPosts';
import {imagePosts} from './mock-data/imagePosts';
import {BlogPostRenderer} from './components/renderers/BlogPostRenderer';
import {ImagePostRenderer} from './components/renderers/ImagePostRenderer';
import {SearchSortAndFilter} from './components/SearchSortAndFilter';

function App() {
  const [showImagePosts, setShowImagePosts] = useState<boolean>(false);
  const buttonText = showImagePosts ? 'Show blog posts' : 'Show image posts';

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setShowImagePosts(!showImagePosts)}
      >
        {buttonText}
      </button>
      {!showImagePosts ? (
        <SearchSortAndFilter
          key="BlogPosts"
          title="Blog Posts:"
          data={blogPosts}
          renderItem={blogPost => (
            <BlogPostRenderer {...blogPost} key={blogPost.id} />
          )}
          searchLabel="Search for blog posts..."
          searchProperties={['title']}
          shouldBeCaseSensitive={true}
          sortersLabel="Sort blog posts..."
          initialSortProperty="title"
          filtersLabel="Filter blog posts..."
          initialIsDescending={true}
          initialFilterProperties={[]}
          initialSearchQuery=""
        />
      ) : (
        <SearchSortAndFilter
          key="ImagePosts"
          title="Image Posts:"
          data={imagePosts}
          renderItem={imagePost => (
            <ImagePostRenderer {...imagePost} key={imagePost.id} />
          )}
          searchLabel="Search for Image posts..."
          searchProperties={['caption']}
          shouldBeCaseSensitive={true}
          sortersLabel="Sort image posts"
          initialSortProperty="caption"
          filtersLabel="Filter image posts"
          initialIsDescending={false}
          initialFilterProperties={[]}
          initialSearchQuery=""
        />
      )}
    </>
  );
}

export default App;
