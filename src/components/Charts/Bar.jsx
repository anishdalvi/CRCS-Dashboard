import React from 'react'
import { Header } from '../../components'
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';

import { stateData } from '../../data/stateData'

const Bar = () => {
  
    const primaryxAxis = { valueType: 'Category', labelRotation: 270,
    };
    const tooltip = { enable: true };
    const marker = { visible: true, width: 7, height: 7, dataLabel: { visible: true } };
    
  return (
    <div className='m-2 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl'> 
      <Header category = "Bar Chart" title = "Registrations across the states" />

      <ChartComponent id='charts' primaryXAxis={primaryxAxis} tooltip={tooltip}
      >
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stateData} xName='state' yName='regs' type='Column' name='States' marker={marker} />
      </SeriesCollectionDirective>
    </ChartComponent>
        
    </div>
  )
}

export default Bar