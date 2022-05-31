import { Child, ChildAsFC } from './Child';

const Parent = () => {
    return (
        <div>
        <ChildAsFC color='red' onClick={() => console.log("Clicked")}>
            children of fc
        </ChildAsFC>
        <Child color='blue' onClick={() => console.log("Clicked")}/>
        </div>
    );
}

export default Parent;