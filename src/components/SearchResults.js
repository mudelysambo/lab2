import React from "react";
import "./SearchResults.css";

function SearchResults() {
  return (
    <div>
      <h1>Results(5 found)</h1>
      <div className="App">
        <table>
          <tr>
            <th>Title</th>
            <th>First names</th>
            <th>Surname</th>
            <th>Emaail</th>
            <th>Room id</th>
            <th>Check in date</th>
            <th>Check out date</th>
          </tr>
          <tr>
            <td>Mr</td>
            <td>person1</td>
            <td>Else</td>
            <td>person1@else.com</td>
            <td>1</td>
            <td>2017-11-21</td>
            <td>2017-11-21</td>
          </tr>
          <tr>
            <td>Mrs</td>
            <td>person2</td>
            <td>Else</td>
            <td>person2@else.com</td>
            <td>1</td>
            <td>2017-11-21</td>
            <td>2017-11-21</td>
          </tr>
          <tr>
            <td>Mr</td>
            <td>person3</td>
            <td>Else</td>
            <td>person3@else.com</td>
            <td>1</td>
            <td>2017-11-21</td>
            <td>2017-11-21</td>
          </tr>
          <tr>
            <td>Mrs</td>
            <td>person4</td>
            <td>Else</td>
            <td>person4@else.com</td>
            <td>1</td>
            <td>2017-11-21</td>
            <td>2017-11-21</td>
          </tr>
          <tr>
            <td>Mr</td>
            <td>person5</td>
            <td>Else</td>
            <td>person5@else.com</td>
            <td>1</td>
            <td>2017-11-21</td>
            <td>2017-11-21</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default SearchResults;
