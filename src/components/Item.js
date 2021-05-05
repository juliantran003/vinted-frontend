const Item = (props) => {
  return (
    <div>
      <div>
        <img className="avatar" src={props.avatar} alt="" />
        {props.username}
      </div>
      <img className="product" src={props.image} alt="" />
      <div>
        {props.price} €{props.size}
        {props.brand}
      </div>
    </div>
  );
};

export default Item;
