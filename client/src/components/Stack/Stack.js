import Stack from 'react-bootstrap/Stack';

function StackWrapper({ list, handleClick }) {
  return (
    <Stack gap={3}>
      <div onClick={() => handleClick(list)} className="bg-light border px-5" style={{ cursor: "pointer" }}>{list.name}</div>
    </Stack>
  );
}

export default StackWrapper;