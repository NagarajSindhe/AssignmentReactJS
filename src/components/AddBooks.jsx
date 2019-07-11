import React, { Component } from "react";

class AddBooks extends Component {
  constructor(props) {
    super(props);
    this.state = { bookName: "", bookDescription: "", bookAuthor: "" };
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`http://localhost:8086/RestEasyPractice/rest/publish/addBooks`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bookName: this.state.bookName,
        bookDescription: this.state.bookDescription,
        bookAuthor: this.state.bookAuthor
      })
    })
      .then(function(response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="col-sm-12">
        <form
          name="blog_post"
          className="form-horizontal"
          onSubmit={this.handleSubmit}
        >
          <div id="blog_post">
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
                  className="form-control"
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
                  onChange={e => this.setState({ bookAuthor: e.target.value })}
                  required="required"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group ">
              <div className="col-sm-2" />
              <div className="col-sm-10">
                <button
                  type="submit"
                  id="blog_post_submit"
                  className="btn-primary btn"
                >
                  Add Book
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBooks;
