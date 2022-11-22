import React from "react";

function PaypalButton({ total, tranSuccess }) {
  const placeOrder = () => {
    const payment = {
      paymentID: "PAYID-" + new Date().getTime(),
      address: {
        recipient_name: "John Doe",
        line1: "1 Main st",
        city: "San Jose",
        State: "CA",
        postal_code: "95131",
        country_code: "US",
      },
    };

    tranSuccess(payment);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline.. Failed to load RazorPay SDK..!!!");
      return;
    }

    const options = {
      key: "rzp_test_3z7ogt5sto6YmK",
      currency: "INR",
      amount: amount * 100,
      name: "Cake Shop Bill",
      description: "Thanks for purchasing this ckake.",
      image:
        "https://res.cloudinary.com/axitakathiriya11/image/upload/v1663741867/cld-sample-4.jpg",

      handler: function (response) {
        console.log(response.razorpay_payment_id);

        if (response.razorpay_payment_id) {
          const payment = {
            paymentID: response.razorpay_payment_id,
            address: {
              recipient_name: "John Doe",
              line1: "1 Main st",
              city: "San Jose",
              State: "CA",
              postal_code: "95131",
              country_code: "US",
            },
          };

          tranSuccess(payment);
        } else {
          alert(response.razorpay_payment_id);
        }
      },
      prefill: {
        name: "Axita Kathiriya",
        email: "axitakathiriya11@gmail.com",
        contact: "9638745550",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <div className="buy_now">
        <button id="buy" onClick={() => displayRazorpay(total)}>
          Buy Now
        </button>

        {/* <button id="buy" onClick={placeOrder}>
          Buy Now 111
        </button> */}
      </div>
    </>
  );
}

export default PaypalButton;
