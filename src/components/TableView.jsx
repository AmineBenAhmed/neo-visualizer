const TableView = ({ data }) => (
  <table className="lg:w-[80%] md:w-[90%] sm:w-[100%] border-collapse border-4 p-2 bg-white sm:overflow-y-auto">
      <thead>
          <tr className="border-b-2 bg-[blue] text-white lg:text-sm md:text-[1.5svw] sm:text-[1vw]">
              <th>NEO Name</th>
              <th>Min Estimated Diameter (km)</th>
              <th>Max Estimated Diameter (km)</th>
          </tr>
      </thead>
      <tbody>
          {data.map((neo) => (
              <tr className="border-2 lg:text-base text-center sm:text-xs cursor-pointer hover:bg-zinc-300" key={neo.id}>
                  <td>{neo.name}</td>
                  <td>{neo.estimated_diameter.kilometers.estimated_diameter_min}</td>
                  <td>{neo.estimated_diameter.kilometers.estimated_diameter_max}</td>
              </tr>
          ))}
      </tbody>
  </table>
);

export default TableView;
