import { Filters } from './Filters';
import { FilterType } from '../types';

interface Props {
    activeCount: number
    completeCount: number
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterType) => void
    filterSelected: FilterType
}

export const Footer : React.FC<Props> = ({
  activeCount = 0, 
  completeCount = 0,
  onClearCompleted,
  handleFilterChange,
  filterSelected
}) =>{
  return(
    <footer className="footer">
      <span className='todo-count'>
        <strong>
          {activeCount} Restantes
        </strong>
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {
        completeCount > 0 ? (
          <button
            className='clear-completed'
            onClick={onClearCompleted}
          >
            Borrar completadas
          </button>
        ) : null
      }
    </footer>
  );
};