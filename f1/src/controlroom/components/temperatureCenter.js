import React, {Component} from 'react';
import {Input, Table} from 'semantic-ui-react';

class TemperatureAtCenter extends Component {
  render() {
    const {
      props: {
        specieReducer: {nsmax}
      }
    } = this.props;
    return (
      <Table.Row>
        <Table.Cell>Temperature at the center</Table.Cell>
        <Table.Cell>
          <Input type='number' name={'electronTemperatureCenter'} placeholder={'0.00'}/>
        </Table.Cell>
        
        <Table.Cell>
          <Input type='number' name={'hydrogenTemperatureCenter'} placeholder={'0.00'}/>
        </Table.Cell>
        
        <Table.Cell>
          <Input disabled={nsmax < 3} type='number' name={'deuteriumTemperatureCenter'} placeholder={'0.00'}/>
        </Table.Cell>
        
        <Table.Cell>
          <Input disabled={nsmax < 4} type='number' name={'TritiumTemperatureCenter'} placeholder={'0.00'}/>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default TemperatureAtCenter;
