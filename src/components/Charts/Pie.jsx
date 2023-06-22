import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components'

import { pieData } from '../../data/pieData'

const Pie = () => {
    const datalabel = { visible: true, name: 'text', position: 'Outside' };
  return (
    <div className='m-2 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl'> 
      <Header category = "Pie Chart" title = "Popular Sectors" />
      <AccumulationChartComponent id='charts'>
      <Inject services={[AccumulationDataLabel]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' pointColorMapping='fill' dataLabel={datalabel}></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </div>
  )
}

export default Pie