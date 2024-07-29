import { Container } from "./Container";
import { Link, useNavigate } from "react-router-dom";

export const AllBlogPost = ({ articles }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${id}`);
    console.log(id);
  };

  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl">All Blog Post</p>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p>All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <Link to={"/Allblogs"}>View All</Link>
      </div>
      <div className="flex flex-wrap gap-[20px] items-center justify-center">
        {articles.map((element) => {
          return (
            <Container
              img={element.social_image}
              tagName={element.tag_list[0]}
              text={element.description}
              date={element.published_at}
              profile={element.user.profile_image}
              userName={element.user.username}
              invisible={true}
              onClick={() => handleClick(element.id)}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <button className="flex px-4 py-5 border-1 border-[1px] border-solid w-fit rounded-[6px]">
          Learn More
        </button>
      </div>
    </div>
  );
};
