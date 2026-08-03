export const TableBody = (props) => {
  const rows = props.song.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.author}</td>
        <td>
          <button onClick={() => props.removeSong(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};
