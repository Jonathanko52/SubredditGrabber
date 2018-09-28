import React, { Component } from "react";
import { connect } from 'react-redux';
import { itemsFetchData } from '../../../actions/actions'
import Input from "../presentational/Input.jsx";

const mapStateToProps = (state) => {
  return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};


class MainContainer extends Component {
  componentDidMount() {
    // this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    this.props.fetchData('https://www.reddit.com/r/reactjs.json');

}
render() {
    if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }
    let arr=[];
    if(Array.isArray(this.props.items)){
        this.props.items.forEach((cur,ind)=>{
            arr.push(
                <li key={ind}>
                    {JSON.stringify(cur)}
                </li>
            )
        });
    } else {
        let keys = Object.keys(this.props.items)
        keys.forEach((cur,ind)=>{
            arr.push(
                <li key={ind}>
                    {JSON.stringify(cur)}
                </li>
            )
        });

    }

    return (
        <ul>
            {arr}
            {/* {this.props.items.map((item) => (
                <li key={item.id}>
                    {JSON.stringify(item)}
                </li>
            ))} */}
        </ul>
    );
}
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

