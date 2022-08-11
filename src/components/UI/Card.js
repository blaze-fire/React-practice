import './Card.css'
function Card(props){
    
    // So now anything we receive as a class name from outside is added to that string And here we can then dynamically point at this class, this constant.
    
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card