import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class App extends React.Component {
  render() {
    console.log(this.props.tweets)
    const allTweets = tweets.tweets.map(tweet => {
        return (
        <div className ="card">
        <div className = "card-body">
            <section>
                <Profileimageurl user = {tweet.user}/>
                <h1 style={{color: "grey", textAlign: "left"}}><Screenname user = {tweet.user}/></h1>
                <Name user = {tweet.user}/>
                {tweet.text}
             <Photo user = {tweet.user}/>
            </section>
            </div>
            </div>
            )
    })
    return (
      <main>
        {allTweets}
      </main>
      );
    }
}



class Profileimageurl extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.user.profile_image_url} width="40" height="40" />
                </div>
            )
    }
}



class Screenname extends React.Component {
  render() {
    console.log(this.props.user.screen_name)
    return (
      <h1>
        {this.props.user.screen_name}
      </h1>
         );
    }
}


class Name extends React.Component {
  render() {
    console.log(this.props.user.name)
    return (
      <h1>
        {this.props.user.name}
      </h1>
         );
    }
}


class Photo extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.user.url} width="200" height="auto"/>
                </div>
            )
    }
}




const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");