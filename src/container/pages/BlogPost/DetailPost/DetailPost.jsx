import React, { Component } from 'react'
import axios from 'axios';
import "./DetailPost.css";

class DetailPost extends Component {
    state= {
        post: {
            title: "",
            body: ""
        }
        
    }

    componentDidMount() {
        // console.log(this.props)
        // console.log(this.props.match.params.postID)
        let id = this.props.match.params.postID;
        axios.get(`http://localhost:3004/posts/${id}`).then(result => {
            // console.log("result: ", result)
            let post = result.data;
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })    
        })
    }
      
    render() {                
        return (
            <div className="detail-post">
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>

        )
    }
}

export default DetailPost;