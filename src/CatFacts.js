import React, { Component } from 'react'
import { connect } from 'react-redux';
import {handleData} from './Reducer'

const mapStateToProps = (state) => {
    return {
        isLoaded: state.isLoaded,
        items: state.items,
        error: state.error
    }
};

const mapDispatchToProps = {
    handleData
};

class CatFacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        }
    }

    componentDidMount() {
        this.props.handleData();
    }

    render() {
        const isLoaded = this.props.isLoaded;
        const error = this.state.error;
        const items = this.props.items;
        
        if(error) {
            return (
                <section className="container">
                    <article className="fact-font">
                        Error: {error.message}
                    </article>
                </section>
            );
        } else if(isLoaded) {
            return (
                <section className="container">
                    <article className="fact-font">
                        Loading<i className="fa fa-spinner fa-spin"></i>
                    </article>
                </section>
            );
        }
        return (
            <section className="container">
                <article className="heading">
                    <div>Some interesting facts about CAT:</div>
                </article>
                <article className="fact-container fact-font">
                    <ul>
                        {
                            items.map((fact) => {
                              return  <li key={fact._id}>{fact.text}</li>
                            })
                        }
                    </ul>
                </article>
                <article className="btn">
                    <button onClick={this.props.handleData}>Get more facts</button>
                </article>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatFacts);
