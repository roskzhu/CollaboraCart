import React from 'react';
import { Link } from 'react-router-dom';
import TableChart02 from '../../charts/TableChart02.jsx';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard02() {



  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
      {/*
        <header className="flex justify-between items-start mb-2">
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                Option 1
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                Option 2
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">
                Remove
              </Link>
            </li>
          </EditMenu> 
        </header>*/}
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">Current Stock and Pricing Trends</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+49%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        <TableChart02/>
      </div>
    </div>
  );
}

export default DashboardCard02;