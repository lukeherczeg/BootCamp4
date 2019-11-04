import React from 'react';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';

function removeElement(arr, index) {
    arr.splice(index,1);
    return arr;
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            selectedBuilding: -1,
            data: props.data
        };
        this.maxId = this.state.data.length;
    }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
      this.setState({ filterText: value });
  }

  selectedUpdate(id) {
      //Here you will need to update the selectedBuilding property of state to the id passed into this function
      this.setState({ selectedBuilding: id });
  }


  removeBuilding() {
      if (this.state.selectedBuilding < this.state.data.length && this.state.selectedBuilding >= 0)
      {
          this.setState({
              data: removeElement(this.state.data, this.state.selectedBuilding),
              selectedBuilding: -1
          });
      }
  }

  addBuilding(val) {
      val.id = ++this.maxId;
      this.state.data.push(val);
      this.setState({ data: this.state.data });
  }

  render() {
    
      return (
        <div className="bg">
          <div className="title">
            <h1>UF Directory App</h1>
          </div>
          <Search
           filterText={this.state.filterText}
           filterUpdate={this.filterUpdate.bind(this)}
           />
          <main>
            <div className="row">
             <div className="column1">
               <div className="tableWrapper">
                
                  <table>
                  <tbody>
                      <tr>
                        <td>
                        <b>Code Building</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table table-striped table-hover">
                  

                <BuildingList
                  data={this.state.data}
                  filterText={this.state.filterText}
                  selectedUpdate={this.selectedUpdate.bind(this)}
                />
                </table>
              </div>
           </div>
         <div className="column2">
             <ViewBuilding
              data={this.state.data}
              selectedBuilding={this.state.selectedBuilding}
              />
              {
                 (this.state.selectedBuilding >= 0 && this.state.selectedBuilding < this.state.data.length)  ?
                    <RemoveBuilding
                        removeBuilding={this.removeBuilding.bind(this)}
                     /> 
                    : null
               }
             
              
              <div className = "col3">
                  <p></p>
                  <p><b>Add a building:</b></p>
              </div>
              <AddBuilding
                addBuilding={this.addBuilding.bind(this)} 
              />

         </div>

        </div>
         <Credit />
       </main>
     </div>
    );
   }
}

export default App;