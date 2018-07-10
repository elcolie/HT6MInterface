import React, {Component} from 'react';
import {Input, Table} from 'semantic-ui-react';

class TemperatureEdge extends Component {
  render() {
    const {
      props: {
        specieReducer: {nsmax}
      }
    } = this.props;
    return (
      <Table.Row>
        <Table.Cell>Temperature at the edge</Table.Cell>
        <Table.Cell>
          <Input type='number' name={'electronDensityCenter'} placeholder={'0.00'}/>
        </Table.Cell>
        
        <Table.Cell>
          <Input type='number' name={'hydrogenDensityCenter'} placeholder={'0.00'}/>
        </Table.Cell>
        
        <Table.Cell>
          <Input disabled={nsmax < 3} type='number' name={'deuteriumDensityCenter'} placeholder={'0.00'}/>
        </Table.Cell>
        
        <Table.Cell>
          <Input disabled={nsmax < 4} type='number' name={'TritiumDensityCenter'} placeholder={'0.00'}/>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default TemperatureEdge;
