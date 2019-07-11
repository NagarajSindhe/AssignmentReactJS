import React, { Component } from "react";

class UpdateBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: "",
      bookName: "",
      bookDescription: "",
      bookAuthor: "",
      show: true
    };
  }
  handlClose = () => {
    this.setState({ show: !this.state.show });
  };

  componentWillMount = () => {
    if (this.props.bookId != null) {
      this.setState({ bookId: this.props.bookId });
    }
    if (this.props.bookName != null) {
      this.setState({ bookName: this.props.bookName });
    }
    if (this.props.bookDescription != null) {
      this.setState({ bookDescription: this.props.bookDescription });
    }
    if (this.props.bookAuthor != null) {
      this.setState({ bookAuthor: this.props.bookAuthor });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    fetch(`http://localhost:8086/RestEasyPractice/rest/publish/updateBooks`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bookId: this.state.bookId,
        bookName: this.state.bookName,
        bookDescription: this.state.bookDescription,
        bookAuthor: this.state.bookAuthor
      })
    })
      .then(function(response) {
        console.log(response);
        alert("Record Updated Successfully");
        window.location.reload();
      })
      .catch(function(error) {
        console.log(error);
      });
    //
  };
  render() {
    return (
      <div className="col-sm-12 bg-light">
        {this.state.show ? (
          <form
            name="blog_post"
            className="form-horizontal"
            onSubmit={this.handleSubmit}
          >
            <div id="blog_post">
              <div className="form-group">
                <label
                  hidden
                  className="col-sm-4 control-label required"
                  htmlFor="blog_post_title"
                >
                  Id {this.props.bookId}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    hidden
                    name="bookId"
                    onChange={e => this.setState({ bookId: e.target.value })}
                    required="required"
                    className="form-control"
                    value={this.state.bookId}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-4 control-label required"
                  htmlFor="blog_post_title"
                >
                  Book Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    onChange={e => this.setState({ bookName: e.target.value })}
                    required="required"
                    name="bookName"
                    className="form-control"
                    value={this.state.bookName}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-6 control-label required"
                  htmlFor="blog_post_body"
                >
                  Book Description
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    onChange={e =>
                      this.setState({ bookDescription: e.target.value })
                    }
                    required="required"
                    className="form-control"
                    value={this.state.bookDescription}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-4 control-label required"
                  htmlFor="blog_post_body"
                >
                  Book Author
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    onChange={e =>
                      this.setState({ bookAuthor: e.target.value })
                    }
                    required="required"
                    className="form-control"
                    value={this.state.bookAuthor}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-2" />
                <div className="col-sm-10">
                  <button
                    type="submit"
                    id="blog_post_submit"
                    className="btn-primary btn m-1"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    );
  }
}

export default UpdateBooks;
