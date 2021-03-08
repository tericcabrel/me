import { BlogPost } from '../../types';

type Props = {
  post: BlogPost;
};

const Post = ({ post }: Props) => {
  return (
    <div>
      <div className="rounded-lg overflow-hidden">
        <div className="relative overflow-hidden pb-60">
          <img
            className="absolute h-full w-full object-cover object-center"
            src={post.feature_image ?? ''}
            alt="Post Image"
          />
        </div>
        <div className="relative bg-white">
          <div className="py-10 px-8">
            <h3 className="text-2xl font-bold" style={{ height: 100, overflow: 'hidden' }}>
              {post.title}
            </h3>
            <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
              <p>Published at: {post.published_at}</p>
            </div>
            {/*<p className="leading-7">
              High quality notepad mockup in a huge resolution and with changeable everything.
            </p>*/}
            <div className="mt-10 flex justify-between items-center">
              <div>
                <img src="https://collect.criggzdesign.com/wp-content/uploads/2020/07/Ps.svg" alt="" className="w-6" />
              </div>
              <a href={post.url} className="flex items-center" target="_blank" rel="noopener noreferrer">
                <p className="mr-4">Read more</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.125" height="13.358" viewBox="0 0 14.125 13.358">
                  <g transform="translate(-3 -3.293)">
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                      fill="#1d1d1d"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
