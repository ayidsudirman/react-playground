import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
        id: 1,
        title: '',
        body: '',
        userId: 1
    },
    isUpdate: false,
  };

  getPostAPI = () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
    .then((result)=> {
        this.setState({
            post: result.data
        })
    })

  }

  postDataToAPI = () => {
      axios.post('http://localhost:3004/posts', this.state.formBlogPost)
      .then((result) => {
         console.log(result) 
         this.getPostAPI();
      }, (error) => {
          console.log("error: ", error);
      })
  }

  putDataToAPI = () => {
      axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
      .then((result) => {
        this.getPostAPI()
        this.setState({
            isUpdate: false,
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            },
        })
      })
  }

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`)
        .then((result) => {
            this.getPostAPI();
        })
  }

  handleUpdate = (data) => {
          this.setState({
              formBlogPost: data,
              isUpdate: true
          })  
  }

  handleFormChange = (event) => {
    let formBlogPostNew = {...this.state.formBlogPost};
    let timeStamp = new Date().getTime();

    if (!this.state.isUpdate) {
        formBlogPostNew['id'] = timeStamp;
    }

    formBlogPostNew[event.target.name] = event.target.value;
    
    this.setState({
        formBlogPost: formBlogPostNew
    })
  }

  handleSubmit = () => {
    if (this.state.isUpdate) {
        this.putDataToAPI();
    } else {
        this.postDataToAPI();
    }
  }

  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`)

  }

  componentDidMount() {
    this.getPostAPI()

  }

  render() {
    return (
      <Fragment>
        <p>Halaman Blog Post</p>
        <hr />
        <div className="form-add-post">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="add title" value={this.state.formBlogPost.title} onChange={this.handleFormChange} />
            <label htmlFor="body">Blog Content</label>
            <textarea name="body" id="body" cols="30" rows="10" placeholder="add content" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
            <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
        </div>
        {this.state.post.map(post =>{
            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
        })}        
      </Fragment>
    );
  }
}

export default BlogPost;
