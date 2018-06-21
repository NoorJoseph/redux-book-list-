import React,{ Component } from 'react'
import  { connect } from 'react-redux'
class Bookdetails extends Component{
render(){
    if(!this.props.book){
        return <div>Please Select A Book</div>
    }
    return(
        <div>
            <h3>Details for:</h3>
            <p>Title: {this.props.book.title}</p>
            <p>pages: {this.props.book.pages}</p>
        </div>
    )
}
}
function mapStateToProps (state){
    return {
        book: state.activeBook
    }
}
export default connect(mapStateToProps)(Bookdetails)