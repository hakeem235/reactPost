import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Data from "../../assets/data.json";
import "./postForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NewPost = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="mainSec" id="newPost">
        <div className="  header border border-dark">
          <div className="c1"></div>
          <div className="c2"></div>
          <div className="c3"></div>
        </div>
        <div className=" container newPost bg-white p-2 ">
          <form className="d-flex flex-column ">
            <div className="d-flex flex-column justify-content-end">
              <input
                type="text"
                placeholder="Author Name"
                name="author"
                className="authorNam mb-2"
              ></input>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="email mb-2"
              ></input>
              <textarea
                type="text"
                placeholder="write you post"
                name="addPost"
                className="post mb-2"
                rows="20"
                cols="50"
              ></textarea>
              <Button className="postBtn" type="submit">
                Post
              </Button>
            </div>
          </form>
        </div>
        <hr />
        <div className="mt-3">
          <input
            className="search"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <hr />
          {Data.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.Name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return (
              <div className="container postList" key={key}>
                <div>
                  <div className="user m-2 bg-light">
                    <div className="title">
                      <div className=" header border border-dark">
                        <div className="c1"></div>
                        <div className="c2"></div>
                        <div className="c3"></div>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="post">
                        <p className="aPost">{val.post}</p>
                      </div>
                      <p className="Aname">{val.Name}</p>
                      <p className="email">{val.email}</p>
                      <hr />
                    </div>
                    <div classname="container">
                      <h4 className="comment">Comments</h4>
                      <p className="commentPost">
                        <span className="commentUser">{val.usrName}:</span>{" "}
                        {val.comment}
                      </p>
                      <div classname="container">
                        <hr />
                      </div>
                      <p className="commentPost">
                        <span className="commentUser">{val.usrName}:</span>{" "}
                        {val.comment}
                      </p>
                    </div>

                    <hr />
                    <div className=" p-3 d-flex justify-content-center ">
                      <input
                        placeholder="Writ your comment"
                        className=" m-2 commnetStyle"
                        name="comment"
                      />
                      <Button  variant="outline-secondary" size="small" type="submit">
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default NewPost;
