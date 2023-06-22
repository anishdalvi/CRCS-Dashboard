import React from 'react'
import { data, dataGrid } from '../data/dummy'
import { GridComponent, ColumnDirective, ColumnsDirective,Page, Inject, Toolbar,Search } from '@syncfusion/ej2-react-grids'
import { Resize, Sort, ContextMenu, Filter, ExcelExport, PdfExport, Edit} from '@syncfusion/ej2-react-grids'

import { Header } from '../components'

const ListOfRegistered = () => {
  const toolbarOptions = ['Search'];

  return (
    <div className='m-2 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl'> 
      <Header category = "Page" title = "List Of Registered Societies" />
      <GridComponent
        id="gridcomp"
        dataSource={data}
        allowPaging
        allowSorting
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {dataGrid.map((item, index) => (
            <ColumnDirective key = {index} {...item} />
          ) )}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search, Toolbar]} />
      </GridComponent>
      


    </div>
  )
}

export default ListOfRegistered