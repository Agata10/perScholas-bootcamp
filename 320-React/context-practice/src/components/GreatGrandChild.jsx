// Step 3: Use the context value inside the nested component that needs it
import { useContext } from 'react';
import { FamilyContext } from '../App';

function GreatGrandChild() {
  const style = useContext(FamilyContext);
  return (
    <div>
      <span style={style}>GreatGrandChild</span> <br />
    </div>
  );
}

export default GreatGrandChild;
