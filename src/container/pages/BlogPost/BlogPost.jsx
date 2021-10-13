import React, { Component, Fragment } from "react";
// import { v4 as uuidv4 } from "uuid";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";
import API from "../../../services";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
    isUpdate: false,
    comments: []
  };

  getPostAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        post: result,
      });
    });
    API.getComments().then((result)=>{
      this.setState({
        comments: result
      })
    })
  };

  postDataToAPI = () => {
    API.postNewsBlog(this.state.formBlogPost).then((result) =>{
      this.getPostAPI();
      this.setState({        
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    })    
  };

  putDataToAPI = () => {
    API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((result) => {
      this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
    })    
  };

  handleRemove = (data) => {
    API.deleteNewsBlog(data).then((result)=> {
      this.getPostAPI();
    })
  };

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    // let newId = uuidv4();    

    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timeStamp;
    }

    formBlogPostNew[event.target.name] = event.target.value;

    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <p>Halaman Blog Post</p>
        <hr />
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="add title"
            value={this.state.formBlogPost.title}
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="add content"
            value={this.state.formBlogPost.body}
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
              goDetail={this.handleDetail}
            />
          );
        })}
        {/* <hr />
        {this.state.comments.map((comment) => {
          return <p>{comment.name} - {comment.email}</p>          
        })} */}
      </Fragment>
    );
  }
}

export default BlogPost;
