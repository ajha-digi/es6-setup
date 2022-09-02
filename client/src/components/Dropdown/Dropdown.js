import Dropdown from 'react-bootstrap/Dropdown';

function DropdownWrapper({currency,language}) {
    if(language) {
        const  {name} = language;
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                   language
                </Dropdown.Toggle>
    
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">{name}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    if(currency) {
        
    }
    
}

export default DropdownWrapper;