import { formats } from '../data/averages-full';

interface DataItem {
  name: string;
  values: readonly number[];
}

interface TableData {
  data: DataItem[];
  caption: string;
}

export const ScreenReaderTable = ({ data, caption }: TableData) => {
  const rows = formats.map((format, rowIndex) => ({
    format,
    values: data.map((s) => s.values[rowIndex] ?? '-'),
  }));

  return (
    <table className="sr-only">
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th>Format</th>
          {data.map((s, colIndex) => (
            <th key={s.name || colIndex}>{s.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row.format || rowIndex}>
            <td>{row.format}</td>
            {row.values.map((val, colIndex) => (
              <td key={colIndex}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
