import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import { IDropDownListState } from 'types/IDropDownList';
import { Wrapper, Header, Option } from './DropDownList.styled';

const DropDownList: React.FC<IDropDownListState> = ({
  options,
  label,
  top,
  bottom,
  left,
  right,
  getValue,
}) => {
  const [option, setOption] = useState<null | string>(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const value = e.currentTarget.textContent;
    setOption(value);
    getValue(value as string);
  };

  const toogle = () => setIsOpen(prevState => !prevState);

  return (
    <Wrapper top={top} bottom={bottom} left={left} right={right}>
      <div onClick={toogle}>
        <Header>
          <p>{option ? option : label}</p>
          {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </Header>
        {isOpen && (
          <div>
            {options.map(item => (
              <Option key={item} onClick={selectOption}>
                {item}
              </Option>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default DropDownList;
