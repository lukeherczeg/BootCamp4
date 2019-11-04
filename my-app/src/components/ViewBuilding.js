import React from 'react';

class ViewBuilding extends React.Component {
	render() {
	    const { data, selectedBuilding } = this.props;
	    if (selectedBuilding >= 0)
	    {
	        const building = data[selectedBuilding];
	        return (
				<div>
					<b>Building Information:</b>
					<table cellSpacing="9" cellPadding="9">
						<tbody>
						<tr>
							<td> Code:           </td>
							<td> {building.code} </td>
						</tr>
						<tr>
							<td> Name:           </td>
							<td> {building.name} </td>
						</tr>
	        {
	            (building.hasOwnProperty("address")) ?
                <tr>
                    <td> Address:           </td>
                    <td> {building.address} </td>
                </tr>
                : null
	        }	
	        {
	            (building.hasOwnProperty("coordinates")) ?
                <tr>
                    <td>  Latitude:                       </td>
                    <td > {building.coordinates.latitude} </td>
                </tr>
                : null
	        }
	        {
	            (building.hasOwnProperty("coordinates")) ?
                <tr>
                    <td> Longitude:                       </td>
                    <td> {building.coordinates.longitude} </td>
                </tr>
                : null
	        }	
	        </tbody>
						
        </table>
			
    </div>
			);
	    }
	    return (
			<div>
				<p>
					<i>Click on a building listing for more info</i>
				
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
