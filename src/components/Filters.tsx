import {  FILTERS_BUTTONS } from '../const';
import { type FilterType } from '../types';


interface Props {
    filterSelected: FilterType
    onFilterChange: (fiter:FilterType) => void
}



export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) =>{
  return(
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
          const isSelected = key === filterSelected;
          const className = isSelected ? 'selected' : '';

          return(
            <li key={key}>
              <a 
                href={href}
                className={className}
                onClick={(event)=> {
                  event.preventDefault();
                  onFilterChange(key as FilterType);
                }}
              >
                {literal}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};