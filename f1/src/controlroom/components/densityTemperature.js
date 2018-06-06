import React, {Component} from 'react';
import {Input, Table} from 'semantic-ui-react';

class DensityTemperatureContainer extends Component {
  
  render() {
    const {
      props: {
        specieReducer: {nsmax}
      }
    } = this.props;
    
    return (
      <Table.Row>
        <Table.Cell>Density of the edge</Table.Cell>
        <Table.Cell>
          <Input type='number' name={'electronDensityEdge'} placeholder={'0.00'}/>
        </Table.Cell>
        
        <Table.Cell>
          <Input type='number' name={'hydrogenDensityEdge'} placeholder={'0.00'}/>
        </Table.Cell>
        
        <Table.Cell>
          <Input disabled={nsmax < 3} type='number' name={'deuteriumDensityEdge'} placeholder={'0.00'}/>
        </Table.Cell>
        
        <Table.Cell>
          <Input disabled={nsmax < 4} type='number' name={'TritiumDensityEdge'} placeholder={'0.00'}/>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default DensityTemperatureContainer;
