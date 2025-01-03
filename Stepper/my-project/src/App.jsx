import Stepper from "./Components/Stepper"


function App() {
  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Information Content</div>,
    },
    {
      label: "Account Info",
      content: <div>Account Info Content</div>,
    },
    {
      label: "Payment",
      content: <div>Payment Content</div>,
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Content</div>,
    },
    {
      label: "Review",
      content: <div>Review Content</div>,
    },
  ];
  return (
    <div>
      <h1 className="text-red-600">App</h1>
      <Stepper steps={steps}/>
    </div>
  )
}

export default App
