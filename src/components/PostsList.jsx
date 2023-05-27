export const PostsList = ({ posts }) => {
  // TODO: the code below is just for demo,
  // so feel free to delete it and write your own.

  return (
    <>
      <h1>List of Post titles</h1>
      <ol>
        {posts.map((item) => (
          <div
            key={item.id}
            className="bg-cover bg-center  rounded-lg"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            1
            <img src={item.img} />
          </div>

          // <li
          //   className={`bg-[${post.img}]`}
          //   key={post.id}
          // >
          //   {post.title}
          // </li>
          // <img src={post.img} />
        ))}
      </ol>
    </>
  );
};
