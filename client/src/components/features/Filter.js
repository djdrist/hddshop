import { useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/productsRedux';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filter = ({ capacity, setCapacity, color, setColor, singleProduct }) => {
  const colors = Array.from(
    new Set(
      useSelector(getAllProducts).map((product) => product.color.toUpperCase()),
    ),
  );
  const capacities = Array.from(
    new Set(useSelector(getAllProducts).map((product) => product.capacity)),
  );

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="color">Color</InputLabel>
        <Select
          labelId="color"
          id="color"
          value={color}
          label="Age"
          onChange={handleColorChange}
        >
          {!singleProduct && (
            <MenuItem value="">
              <em>ALL</em>
            </MenuItem>
          )}
          {colors.map((color) => (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="capacity">Capacity</InputLabel>
        <Select
          labelId="capacity"
          id="capacity"
          value={capacity}
          label="Capacity"
          onChange={handleCapacityChange}
        >
          {!singleProduct && (
            <MenuItem value="">
              <em>ALL</em>
            </MenuItem>
          )}
          {capacities.map((capacity) => (
            <MenuItem key={capacity} value={capacity}>
              {capacity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Filter;
