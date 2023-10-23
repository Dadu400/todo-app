import bin from './bin.svg';

const AllTask = () => {
    return (  
        <div className="tasks">
            <h1>All Tasks</h1>
            <input type="text" placeholder="Add a new task inside 'All' category" />
            <div className="todo">
                <div className='todosname'>
                    <label className='custom-checkbox'>
                    <input type="checkbox" id='checkbox'/>
                    <span className='checkmark'></span>
                    </label>
                <p>Buy Milk</p>
                </div>
                <div>
                <img src={bin} alt="bin" id='bin'/>
                </div>
            </div>
        </div>
    );
}
 
export default AllTask;