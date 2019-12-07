import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    category: ''
  }

  componentDidMount() {
    this.setState({
      category: 'general'
    })
  }

  handleChangeCategory = e => {
    this.setState({
      category: e.target.value
    }, () =>
      {this.props.checkNews(this.state.category);
    })
  }

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <h2>Encuentra noticias por categoría</h2>

          <div className="input-field col s12 m8 offset-m2">
            <select
              onChange={this.handleChangeCategory}
            >

              <option value="general">General</option>
              <option value="business">Negocios</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="health">Salud</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnología</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  checkNews: PropTypes.func.isRequired
}

export default Form
