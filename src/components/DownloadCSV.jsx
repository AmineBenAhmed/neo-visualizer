import React from 'react';

const DownloadCSV = ({ data, fileName }) => {
  const exploitableData = [
    ["NEO Name", "Min Diameter", "Max Diameter"],
    ...data.map(item => [
      item.name,
      item.estimated_diameter.kilometers.estimated_diameter_min,
      item.estimated_diameter.kilometers.estimated_diameter_max,
    ])
  ]
  const convertToCSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.stringify(objArray) : objArray;
    let str = '';
    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in array[i]) {
        if (line !== '') line += ',';

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  };

  const downloadCSV = () => {
    const csvData = new Blob([convertToCSV(exploitableData)], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = csvURL;
    link.download = `${fileName}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className='mr-4 bg-[#00AC47] text-white  rounded p-2 text-bold sm:text-wrap'
      onClick={downloadCSV}
      >
        Download CSV
      </button>
  );
}

export default DownloadCSV;