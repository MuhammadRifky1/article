import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions';

class addArticle extends Component {
    componentDidMount(){
        this.props.fetchPosts()
    }
    render(){
        return(
            <div>
                <ul>
                {this.props.asd.map((data, i) => (
                    <li key={i}>asd</li>
                ))}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    asd: state.posts.items
  });


export default connect(mapStateToProps, { fetchPosts })(addArticle)