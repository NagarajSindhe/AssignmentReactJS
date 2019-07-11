import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import SearchForm from "./components/SearchForm";
import AddBooks from "./components/AddBooks";
import { connect } from "react-redux";
import UpdateBooks from "./components/UpdateBooks";
/* const products = [{ id: 1, name: "Sam", price: 1 }]; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      addBooks: false,
      updateBooks: this.props.show,
      bookId: "",
      bookName: "",
      bookDescription: "",
      bookAuthor: "",
      columns: [
        {
          dataField: "bookId",
          text: "Book ID",
          sort: true,
          sortCaret: (order, column) => {
            if (!order) return <i className="fas fa-sort" />;
            if (order === "asc") return <i className="fas fa-sort-up" />;
            if (order === "desc") return <i className="fas fa-sort-down" />;
            return null;
          }
        },
        {
          dataField: "bookName",
          text: "Book Name"
        },
        {
          dataField: "bookDescription",
          text: "Book Description"
        },
        {
          dataField: "bookAuthor",
          text: "Book Author"
        },
        {
          dataField: "Edit",
          text: "Update Books",
          formatter: (cellContent, row, event) => (
            <div>
              <i
                type="button"
                className="far fa-edit"
                onClick={this.showUpdateBook.bind(this, row)}
              />
            </div>
          )
        }
      ]
    };
  }

  searchById = async e => {
    const url = `http://localhost:8086/RestEasyPractice/rest/publish/getBooks`;
    const api_call = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bookName: e
      })
    });
    const data = await api_call.json();
    this.setState({ books: data });
  };
  getAllRecords = async () => {
    const url = `http://localhost:8086/RestEasyPractice/rest/publish/getAllBooks`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    this.setState({ books: data });
  };
  getRecordsById = async e => {
    const id = e.target.elements.recipeName.value;
    e.preventDefault();
    id.length === 0 ? alert("Please enter Id") : this.searchById(id);
  };
  componentWillMount() {
    this.getAllRecords();
  }
  showAddBook = () => {
    this.setState({
      addBooks: !this.state.addBooks
    });
  };
  refresh = () => {
    this.getAllRecords();
  };
  showUpdateBook = cellContent => {
    this.setState({
      updateBooks: !this.state.updateBooks,
      bookId: cellContent.bookId,
      bookName: cellContent.bookName,
      bookDescription: cellContent.bookDescription,
      bookAuthor: cellContent.bookAuthor
    });
  };

  render() {
    return (
      <div>
        <div className="text-primary">
          {this.state.updateBooks ? (
            <UpdateBooks
              bookId={this.state.bookId}
              bookName={this.state.bookName}
              bookDescription={this.state.bookDescription}
              bookAuthor={this.state.bookAuthor}
            />
          ) : null}
        </div>
        {this.state.addBooks ? <AddBooks /> : null}
        <SearchForm getRecordsById={this.getRecordsById} />
        <div style={{ padding: "5px" }} />
        <div>
          <button
            type="button"
            className="btn btn-primary btn-sm m-2"
            onClick={this.showAddBook}
          >
            Add New Book
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.refresh}
          >
            Refresh
          </button>
        </div>

        <div style={{ padding: "5px" }} />
        <BootstrapTable
          keyField="bookId"
          data={this.state.books}
          columns={this.state.columns}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBooks: () => dispatch({ type: "ADD_BOKS" }),
    updateBooks: () => dispatch({ type: "UPDATE_BOOKS" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
