import { Radio, Space } from 'antd';

function SelectInput({ options }) {
  console.log('options', options);
  return (
    <Space orientation="vertical">
      {options.items.map((item) => (
        <Radio key={item}>{item}</Radio>
      ))}
    </Space>
  );
}

export default SelectInput;
