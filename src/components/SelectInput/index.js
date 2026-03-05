import { Radio, Space } from 'antd';

function SelectInput({ options }) {
  return (
    <Space orientation="vertical">
      {options.items.map((item) => (
        <Radio>{item}</Radio>
      ))}
    </Space>
  );
}

export default SelectInput;
