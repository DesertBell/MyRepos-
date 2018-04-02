import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class MyRepos extends React.Component {
 state = {
   repos: [],
   search: " "
 };

 componentDidMount() {
   fetch("https://api.github.com/users/DesertBell/repos")
     .then(response => response.json())
     .then(responseJson => {
       console.log(responseJson);
       this.setState({ repos: responseJson.items });
     });
 }

 render() {
   return (
     <div>
       Bell's Repo List
       <hr />
       <ul>
       {this.state.repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
       </ul>
     </div>
   );
 }
};

const mapStateToProps = state => {
   return {
    repos: state.repos
    };
};

export default connect(mapStateToProps)(MyRepos);

render(<MyRepos />, document.getElementById('root'));