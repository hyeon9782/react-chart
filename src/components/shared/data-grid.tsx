type Props = {
  thead: string[];
  tbody: string[][];
};
const DataGrid = ({ thead, tbody }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          {thead.map((th) => (
            <th>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbody.map((tr) => (
          <tr>
            {tr.map((td) => (
              <td>{td}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default DataGrid;
