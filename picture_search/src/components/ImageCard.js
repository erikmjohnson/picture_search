import React from 'react';

export default class ImageCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    //starts interacting with the DOM
    this.imageRef = React.createRef();
  }

  //creates a function when the item is first loaded to set its' span
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // Algorithm to set span
  setSpans = () => {
   const height = this.imageRef.current.clientHeight;
   const spans = Math.ceil(height / 10);

   this.setState({ spans })
  };

  render() {
    const {description, urls} = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
          />
      </div>
    )
  }
}
