import { Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { SketchPicker } from 'react-color';
import { SketchPickerProps } from 'react-color/lib/components/sketch/Sketch';

interface ColorPickerProps {
  value?: SketchPickerProps['color'];
  onChange?: SketchPickerProps['onChange'];
  onChangeComplete?: SketchPickerProps['onChangeComplete'];
}

const ColorPicker = ({ value, onChange, onChangeComplete }: ColorPickerProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div
          style={{
            width: 20,
            height: 20,
            background: 'var(--bg-color)',
            border: '1px solid green',
            cursor: 'pointer'
          }}
        ></div>
      </PopoverTrigger>
      <PopoverContent w='100%'>
        <PopoverArrow />
        <PopoverBody p={0}>
          <SketchPicker color={value} onChange={onChange} onChangeComplete={onChangeComplete} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
