const Cart = ({ cart, setCart }) => {
  const isCartEmpty = cart.length === 0;

  const deliveryFees = 2.5;
  let subTotal = 0;
  cart.forEach((cartItem) => {
    subTotal += cartItem.price * cartItem.amount;
  });

  const total = subTotal + deliveryFees;
  const addToCart = () => {};
  const removeToCart = () => {};

  return (
    <div className="cart-container">
      <div className="cart">
        <button className="valid-cart">Valider mon panier</button>
        {isCartEmpty ? (
          <div className="resume-cart">
            <p className="empty-cart">Votre panier est vide</p>
          </div>
        ) : (
          <div className="resume-cart">
            <div className="cart-items">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="cart-item">
                    <div className="amount-item-counter">
                      <p className="manage-amount">
                        <span>+</span>
                        <span>{item.amount}</span>
                        <span>-</span>
                      </p>
                    </div>
                    <p className="cart-item-title">{item.title}</p>
                    <p className="cart-item-price">{item.price}</p>
                  </div>
                );
              })}
              <hr />
            </div>
            <div className="calcul-total">
              frais de livraison : {deliveryFees} + sous tot : {subTotal}
            </div>
            <hr />
            <div className="total">total : {total}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
