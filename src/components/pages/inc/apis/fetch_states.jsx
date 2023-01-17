import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../../../../constants";
import {
  BiBuoy,
  BiCoinStack,
  BiBriefcase,
  BiLineChart,
  BiNews,
} from "react-icons/bi";

const State = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/states`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {posts &&
        posts.map((post, index) => {
          return (
            <option
              key={index}
              value={post?.id}
              data-description={post?.attributes?.description}
            >
              {post?.attributes?.name}
            </option>
          );
        })}
    </>
  );
};

export default State;
