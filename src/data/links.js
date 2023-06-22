import { AiOutlineBarChart } from 'react-icons/ai';
import { FiPieChart, } from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import { RiEarthFill } from 'react-icons/ri';
import { FaRegListAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';


export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'home',
          icon: <HiHome />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'list',
          icon: <FaRegListAlt />,
        },
        {
          name: 'registrationprocess',
          icon: <IoMdContacts />,
        },
        
      ],
    },

    {
      title: 'Charts',
      links: [
        {
          name: 'bar',
          icon: <AiOutlineBarChart />,
        },
        {
          name: 'pie',
          icon: <FiPieChart />,
        },
        {
          name: 'geographic',
          icon: <RiEarthFill />,
        }
      ],
    },
  ];