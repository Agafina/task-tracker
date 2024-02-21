
import Button from './Button'
const Header = ({onAdd , showAdd}) => {
    return ( 
        <header className="header">
      <h2>Task Tracker</h2>
        <Button text ={showAdd ? 'Close' : 'Add'} color={showAdd? 'red' : 'green'}  onAdd={onAdd} />
      </header>
     );
}
 
export default Header;