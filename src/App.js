import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Form from './components/Form';

class App extends Component {
  state = {
    news: []
  };

  async componentDidMount() {
   this.checkNews();
  }

  checkNews = async (category='general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=114920d78eb545ae9370cb39bb5d4f7d`;

    const answer = await fetch(url);
    const news = await answer.json();

    this.setState({
      news: news.articles
    })
    console.log(news.articles);
  }


  render() {
    return (
      <Fragment>
        <Header
          title="Buscador de Noticias"
        />

        <div className="container white contenedor-noticias">
          <Form 
            checkNews={this.checkNews}
          />

          <NewsList 
            news={this.state.news}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
