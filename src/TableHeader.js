export const TableHeader = (props) => {
  const { name, job, remove } = props.songTitles;
  return (
    <thead>
      <tr>
        <td>{name}</td>
        <td>{job}</td>
        <td>{remove}</td>
      </tr>
    </thead>
  );
};
