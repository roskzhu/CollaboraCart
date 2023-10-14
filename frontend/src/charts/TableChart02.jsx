import { tailwindConfig, hexToRGB } from '../utils/Utils';
import LineChart from './LineChart01.jsx';

function TableChart02() {
    const chartData = {
        labels: [
          '12-01-2020',
          '01-01-2021',
          '02-01-2021',
          '03-01-2021',
          '04-01-2021',
          '05-01-2021',
          '06-01-2021',
          '07-01-2021',
          '08-01-2021',
          '09-01-2021',
          '10-01-2021',
          '11-01-2021',
          '12-01-2021',
          '01-01-2022',
          '02-01-2022',
          '03-01-2022',
          '04-01-2022',
          '05-01-2022',
          '06-01-2022',
          '07-01-2022',
          '08-01-2022',
          '09-01-2022',
          '10-01-2022',
          '11-01-2022',
          '12-01-2022',
          '01-01-2023',
        ],
        datasets: [
          // Indigo line
          {
            data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532],
            fill: true,
            backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
            borderColor: tailwindConfig().theme.colors.indigo[500],
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
            pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
          },
          // Gray line
          
        ],
      };
    
    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                    <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" class="px-6 py-4">#</th>
                        <th scope="col" class="px-4 py-4">Stock Item</th>
                        <th scope="col" class="px-6 py-4">Quantity</th>
                        <th scope="col" class="px-4 py-4">Price Now</th>
                        <th scope="col" class="px-4 py-4">Expected Price Increase</th>
                        <th scope="col" class="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Paper Cups</td>
                        <td class="whitespace-nowrap px-6 py-4">4</td>
                        <td class="whitespace-nowrap px-6 py-4">$0.85/m</td>
                        <td class="whitespace-nowrap px-6 py-4">23.5% increase to $1.05 </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <LineChart data={chartData} width={389} height={70}/></td>

                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td class="whitespace-nowrap px-6 py-4">Paper Cups</td>
                        <td class="whitespace-nowrap px-6 py-4">4</td>
                        <td class="whitespace-nowrap px-6 py-4">$0.85/m</td>
                        <td class="whitespace-nowrap px-6 py-4">23.5% increase to $1.05 </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <LineChart data={chartData} width={389} height={70}/></td>

                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                        <td class="whitespace-nowrap px-6 py-4">Paper Cups</td>
                        <td class="whitespace-nowrap px-6 py-4">4</td>
                        <td class="whitespace-nowrap px-6 py-4">$0.85/m</td>
                        <td class="whitespace-nowrap px-6 py-4">23.5% increase to $1.05 </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <LineChart data={chartData} width={389} height={70}/></td>

                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        );
    }
  
  export default TableChart02;