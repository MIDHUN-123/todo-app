import React from 'react';
import { FaListUl,FaRegCircle,FaCheckCircle } from 'react-icons/fa';
import './FilterTab.css';
const FilterTab = ({todos=[],filter,setFilter}) => {
    
    const totalCount=todos.length;
    const completedCount=todos.filter((t)=>t.completed).length;
    const activeCount=totalCount-completedCount;

  return (
    <div className='filter-row'>
        <button type='button'
            className={`filter-btn ${filter==='all' ? 'active-filter':''}`}
            onClick={()=>setFilter('all')}
        >
            <FaListUl className='filter-icon'/>
            <span>All</span>
            <span className='filter-badge'>{totalCount}</span>
        </button>
        <button 
            type='button'
            className={`filter-btn ${filter==='active' ? 'active-filter': ''}`}
            onClick={()=>setFilter('active')}
        >
            <FaRegCircle className='filter-icon'/>
            <span>Active</span>
            <span className='filter-badge'>{activeCount}</span>

        </button>
        <button 
            type='button'
            className={`filter-btn ${filter==='completed' ? 'active-filter' : ''}`}
            onClick={()=>setFilter('completed')}
        >
            <FaCheckCircle className='filter-icon'/>
            <span>Completed</span>
            <span className='filter-badge'>{completedCount}</span>
        </button>
    </div>
  )
}

export default FilterTab